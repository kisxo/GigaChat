# Giga Chat

Random chat web app using flask and socket-io.

## Video Demo [YouTube]: https://youtu.be/Ob3R9G3Cctg

<img src="https://github.com/kisxo/host/blob/master/GigaChat/guide_assets/video_overview_thumbnail.png?raw=true" alt="video preview image" width="75%"></img>

## Description

Giga chat is web based chat application through which two stranger can text with each other.

The clint side web UI is inspired from discord.

The server side is composed from `flask` a python web framework and `flask_socketio` a python version of socket io for message transmission between users.
I have used `socket-io` because it makes message transmission quick and efficient instead of using manual forwarding which is more complex and slow.
The other option I liked but didnt used due to not being anonymous is P-to-P chat method, as it shared the ip between the users. But the socket-io helps to only send messages and no other data.


The application has only 2 routes homepage `/` route and lobby `/lobby` route.

### Homepage

<img src="https://github.com/kisxo/host/blob/master/GigaChat/guide_assets/giga_chat_home_potrait.png?raw=true" alt="homepage image" width="50%"></img>

The homepage is dark purple and space themed. It has only one glowing button `Start chatting`. When a user clicks the button they are redirected to lobby `/lobby` route to start chatting.

### Lobby

<img src="https://github.com/kisxo/host/blob/master/GigaChat/guide_assets/giga_chat_lobby_chatting_potrait.png?raw=true" alt="chatting lobby image" width="50%"></img>

The chat lobby UI is very simple and minimal without any bloat. Giga Chat logo on the top, 2 button and an input box.

The left button `Stop` is used to end the conversation with the stranger.

The middle input box is where the messages are entered.

And the right button is used to send the entered messages.

<img src="https://github.com/kisxo/host/blob/master/GigaChat/guide_assets/giga_chat_lobby_disconnected_potrait.png?raw=true" alt="disconnected lobby image" width="50%"></img>

## Implementation

### File Structure

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

#### app.py

It is the main server side python program using flask web framework and socket-io. 

When a user connects to the server and joins a lobby the server looks if any other user is online and waiting for connection.
If there is a user in the waiting list both are connected using a unique (16 character) pair-id which is generated while joining waiting list.

After the 2 users has been connected the socket listens for messages from both users and transmits the messages to the users.
If one of them disconnects both the promted to start a new meassage.

#### readme.md
Quick Guide

#### static
Folder for all static files like javascript, css, images.

##### chat_lobby.js
This is the javascript file for lobby.

When users enter the lobby they send a message to the server that the user is ready for connection using socket-io on event listener.
The server than sends a reply if they connect or put into a waiting list.
If get paired a messsage 'you are connected' will be displayed or if put into waiting list a 'waiting for stranger' message will be displayed.

When the users clicks on `Stop` button the message will cleared and a new chat will be started.

##### home.css

Homepage style sheet.

##### lobby.css

Lobby style sheet.

##### script.js

This script is used to change background color after the page has been loaded to remove flicker caused by `background-blendmode darken`.
It also reduces the font size if any overflow occurs.

##### space.jpeg

Background image for homepage and lobby.

#### templates

Folder for all html files of the application.

##### homepage.html

It the homepage layout file. The homepage is divided into 4 different sections.

- homepage
  -  hero section
  -  start chatting button
  -  features section
  -  footer

###### hero section

It is the main hero banner which shows the Logo and what application is this.

###### start chatting button

It is the container for start chatting button which takes user to chat lobby.

###### features of Giga Chat

This section describes various features of Giga Chat with help of various bootstrap icons.

###### footer
 
This section shows a link to github profile.

And a shows this is a final project for cs50.

##### layout.html

The main html template for other pages using jinja.
It has the css and javascript which links to both pages from one file.

##### lobby.html

This the lobby layout it is a big flex box container divided into 3 parts.

-  lobby
   -  tittle section
   -  meassages container
   -  user input section

###### tittle section

This is here logo is displayed in lobby.

###### meassages container

This is y-scrollable flex box, meassages are direct child of this container. They arrenged from bottom to top.