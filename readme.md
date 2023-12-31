# Giga Chat
Random chat web app using flask and socket-io.
## Video Demo [YouTube]: https://youtu.be/Ob3R9G3Cctg
<img src="https://github.com/kisxo/host/blob/master/GigaChat/guide_assets/video_overview_thumbnail.png?raw=true" alt="video preview image" width="75%"></img>

## Description
Giga chat is web based chat application through which two stranger can text with each other.

The clint side web UI is inspired from discord.

The server side is composed from `flask` a python web framework and `flask_socketio` a python version of socket io for message transmission between users.

The application has only 2 routes homepage `/` route and lobby `/lobby` route.

### Homepage

<img src="https://github.com/kisxo/host/blob/master/GigaChat/guide_assets/giga_chat_home_potrait.png?raw=true" alt="homepage image" width="50%"></img>

When a user connects to the server they are directed to `/` route of the flask application route system.
The homepage is dark purple and space themed. It has only one glowing button `Start chatting`. When a user clicks the button they are redirected to lobby `/lobby` route to start chatting.

### Lobby

<img src="https://github.com/kisxo/host/blob/master/GigaChat/guide_assets/giga_chat_lobby_chatting_potrait.png?raw=true" alt="chatting lobby image" width="50%"></img>

The chat lobby UI is very simple and minimal without any bloat. Giga Chat logo on the top, 2 button and an input box.

The left button `Stop` is used to end the conversation with the stranger.

The middle input box is where the messages are entered.

And the right button is used to send the entered messages.

<img src="https://github.com/kisxo/host/blob/master/GigaChat/guide_assets/giga_chat_lobby_disconnected_potrait.png?raw=true" alt="disconnected lobby image" width="50%"></img>

## Implementation
#### File Structure
-  GigaChat
   -   app.py
   -   readme.md
   -  static
      -  chat_lobby.js
      -  home.css
      -  lobby.css
      -  script.js
      -  space.jpeg
   -  templates
      -  homepage.html
      -  layout.html
      -  lobby.html


The entire application has 
