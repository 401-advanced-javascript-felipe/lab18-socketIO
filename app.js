'use strict';

const alter = require('./src/alter');

const alterFile = (file) => {

  alter.readFile(file)
    .then(data => {
      data = alter.toUpper(data);
      alter.writeFile(file, data);
    })
    .then(console.log('saved'))
    .catch(error =>{
      console.log(error);
    });

};

let file = process.argv.slice(2).shift();
alterFile(file);
