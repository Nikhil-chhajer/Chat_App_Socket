var socket = io();
//we have install socket for frontend this will communicate to  server from  where it is getting render
let btn=document.getElementById('btn');
btn.onclick=function exec(){
    socket.emit('from_client');
}
socket.on('from_server_side',()=>{
    const div=document.createElement('div');
    div.innerText='New event from server side';
    document.body.appendChild(div);

})// this will listen to the event from server side here we are listing event named 'from_server_side'
