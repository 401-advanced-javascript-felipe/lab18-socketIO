'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');


const eventHelper = module.exports = {};

eventHelper.errorEmitter = (error) => {
  socket.emit('error', error);
};

eventHelper.successEmmiter = () => {
  socket.emit('file-save', 'file was save');
};
