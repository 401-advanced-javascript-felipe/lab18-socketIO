'use strict';

const utils = require('./src/utils');

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

let errorEmitter = (error) => {
  socket.emit('error', error);
};

const alterFile = (file) => {

  utils.readFile(file)
    .then(data => {
      data = utils.toUpper(data);
      utils.writeFile(file, data);
    })
    .then(() => socket.emit('file-save', 'file was saved'))
    .catch(errorEmitter);
};

let file = process.argv.slice(2).shift();
alterFile(file);
