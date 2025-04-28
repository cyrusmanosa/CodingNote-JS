const express = require('express');
const socketIo = require('socket.io');
const http = require('http');


// initiate socket.io and attch this to the http server
// emit => on; [server to client or client to server 都得]
const app = express();
const server = http.createServer(app)
const io = socketIo(server)

app.use(express.static('public'));
const users = new Set();

io.on("connection",(socket) =>{
    console.log("A user is now connected");
    // handle users when they will join the chat
    socket.on('join',(userName)=>{
        users.add(userName);
        socket.userName = userName;
        
        // broadcast to all clients/users that a new user has joined
        io.emit('userJoined',userName);
        // send the updated user list all client
        io.emit('userList',Array.from(users));
    })


    // handle incoming chat message
    socket.on('chatMessage',(message)=>{
        //broadcast the received message to all connected clients
        io.emit("chatMessage",message)
    });

    socket.on("disconnect",()=>{
        console.log('An User is disconnected')
        users.forEach(user =>{
            if (user === socket.userName){
                users.delete(user);
                io.emit('userLeft',user);
                io.emit('userList',Array.from(users));
            }
        })
    })
});



// handle user disco


const PORT = 3000;
server.listen(PORT,()=>{
    console.log('Server is now running');
})