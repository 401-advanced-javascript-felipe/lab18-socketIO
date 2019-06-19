'use strict';

/**
 * Helps alter the file
 * @module src/alter
 * @desc node's fs modules promisified using util
 */

module.exports = exports = {};

const fs = require('fs');

/**
 * @param {Buffer} data - the contents of a file as a buffer
 * @return {string} - a string with the contents of the file uppercase
 */
function toUpper(data) {
  data = Buffer.from(data);
  return data.toString().toUpperCase();
}

/**
 * @param {filePath} filePath - the contents of a file as a buffer
 * @return {string} - a string with the contents of the file uppercase
 */
let readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if(err) reject(err);
      else resolve(data);
    });
  });
};

/**
 * @param {filePath} filePath - the contents of a file as a buffer
 * @param {filePath} filePath - the contents of a file as a buffer
 * @return {} - saves file with new data to dir
 */
let writeFile = (file, text) => {
  return new Promise((resolve, reject) =>{

    fs.writeFile(file, text, (err) => {
      if (err) reject(err);
      else resolve();
    });

  });
};


exports.writeFile = writeFile;
exports.readFile = readFile;
exports.toUpper = toUpper;
