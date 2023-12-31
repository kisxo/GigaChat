import secrets, random
from flask import Flask, flash, redirect, render_template, request, session

from flask_session import Session
from flask_socketio import SocketIO, send, join_room, leave_room, close_room

# Configure application
app = Flask(__name__)
socketio = SocketIO(app)

PAIRS = []

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


@app.route("/")
def homepage():
    # Forget any user_id
    session.clear()
    session["user_id"] = secrets.token_urlsafe(32)
    return render_template("homepage.html")

@app.route("/lobby")
def lobby():
    if session.get("user_id") is None:
        print("user not found")
        return redirect("/")
    return render_template("lobby.html")

@socketio.on("connect")
def connect(auth):
    if not PAIRS:
        pair_id = secrets.token_urlsafe(16)
        PAIRS.append(pair_id)
        session["pair_id"] = pair_id
        join_room(pair_id)
    else:
        session["pair_id"] = random.choice(PAIRS)
        pair_id = session["pair_id"]
        PAIRS.remove(pair_id)
        join_room(pair_id)
        send({'sender': 0, 'message':'You are connected'}, to = pair_id)
        
@socketio.on("message")
def message(data):
    pair_id = session["pair_id"]
    if not data:
        return

    send(data, to = pair_id)

@socketio.on("disconnect")
def disconnect():
    pair_id = session["pair_id"]
    try:
        PAIRS.remove(pair_id)
    except:
        pass
    
    send({'sender': 1, 'message':'Stranger has disconnected'}, to = pair_id)
    
    close_room(pair_id)

if __name__ == '__main__':
    socketio.run(app)