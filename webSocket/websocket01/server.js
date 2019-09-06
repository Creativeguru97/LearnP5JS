// Express: web framework for node.js for host a directory
//https://expressjs.com

//socket.io: https://socket.io

let express = require('express');//Importing module
//Store a function in a variable

let app = express();//Call the function and store the result in "app"
let server = app.listen(3000);//listen to localhost: 3000

//Host all files in the public folder
app.use(express.static('public'));

console.log("My socket server is running");

//socket: a connection
let socket = require('socket.io');
let io = socket(server);//Keep track of inputs/outputs messages in and out

io.sockets.on('connection', (socket) => {
  console.log('new connection: '+ socket.id);

  socket.on('mouseData', (data) => {
    //Goes to everyone except this clien
    socket.broadcast.emit('mouseData', data);

    //Goes to everyone including this client
    // io.sockets.emit('mouseData', data);
    console.log(data);
  });

});//When a new connection happens
