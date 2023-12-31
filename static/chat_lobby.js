let socketio = io();

const client_side_id = Math.random().toString(36).substring(2, 10);

const messages = document.querySelector("#messages_list");
const stop_chat_button = document.querySelector("#disconnect_button");
   

function send_message() {
    stop_chat_button.innerText= "Stop";
    stop_chat_button.style.backgroundColor = "#37306B";
    const message_input_box = document.querySelector("#message");
    if (message_input_box.value == "") {
        return;
    }
    socketio.emit("message", {
        sender: client_side_id,
        message: message_input_box.value
    });

    message_input_box.value = "";
}

function disconnect_stranger() {
    const disconnect_status = stop_chat_button.innerText;
    
    if (disconnect_status == 'Stop')
    {
        stop_chat_button.innerText= "Confirm";
        stop_chat_button.style.backgroundColor = "red";
   
    }
    if (disconnect_status == 'Confirm')
    {
        location.reload();
    }
}


function display_message(message_container)
{
    if (message_container.sender == client_side_id)
    {
        messages.innerHTML += `
        <div class="my_bubble">
        <div class="my_message">
        ${message_container.message}
        </div>
        </div>
        `;
    }
    else if (message_container.sender == 0)
    {
        document.querySelector("#loading_animation").remove();
        messages.innerHTML += `
        <div class="server_message py-4">
        ${message_container.message}
        </div>
        `;
    }
    else if ( message_container.sender == 1)
    {
        messages.innerHTML += `
        <div class="server_message py-4">
        ${message_container.message}
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                <button class="btn btn-primary me-md-2" onclick="location.reload();" type="button">Enter a Chat</button>
        </div>
        `;
    }
    else 
    {
        messages.innerHTML += `
        <div class="stranger_bubble">
        <div class="stranger_message">
        ${message_container.message}
        </div>
        </div>
        `;
    }
}

socketio.on("message", (data) => {
    display_message(data);
});