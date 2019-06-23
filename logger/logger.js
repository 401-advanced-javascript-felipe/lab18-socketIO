'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

console.log('logger.js connected to socket');

let logPayLoad = payload => {
  console.log(payload);
};
socket.on('message', logPayLoad);

module.exports = logPayLoad;
