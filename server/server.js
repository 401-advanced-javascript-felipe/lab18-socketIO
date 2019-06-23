'use strict';

const io = require('socket.io')(3000);

io.on('connection', socket => {
  console.log(`server.js connected to socket ${socket.id}`);

  socket.on('file-save', payload =>{
    io.emit('message', payload);
  });

  socket.on('file-error', payload =>{
    io.emit('message', payload);
  });

});


