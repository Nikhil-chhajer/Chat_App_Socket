const express=require('express');
const http=require('http');
const socketio=require('socket.io');
const app=express();
const server=http.createServer(app);
//createServer has all neccessary details to create the web socket connection
const io=socketio(server);
app.use('/',express.static(__dirname+'/public'));
//this middleware actually maps where are the static assets eg. HTML file
//and whatever functionality we are writing for express will also be parse to server object and that is how we are connecting http and express together
io.on('connection', (socket) => {
    console.log('a user connected',socket.id);

    socket.on('from_client',()=>{
         console.log("from client side");
         
    
        })
    setInterval(()=>{
        socket.emit('from_server_side');
    },2000);//socket.emit will send event from server side to frontend ,here we are sending event  name 'from_server_side'
});
//this will listen to connection event which is being made from frontend
//io.on has unique id with every web connection


//this server is coming from http module which is capable to create web server and listen the ports
server.listen(3000,()=>{
    console.log("start server");

}) 
