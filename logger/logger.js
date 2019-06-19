'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

console.log('logger.js connected to socket');


socket.on('message', payload => {
  console.log(payload);
});
