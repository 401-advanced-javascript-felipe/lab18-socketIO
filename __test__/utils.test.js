'use strict';

const utils = require('../src/utils');

jest.mock('fs');

describe('utils.toUpper()', () => {
  it('should uppercase the contents of a buffer', () => {
    // arrange
    let data = Buffer.from('hello');

    // act
    data = utils.toUpper(data);

    // assert
    expect(data).toBe('HELLO');
  });

});


describe('utils.readFile()', () => {
  it('should reject and return invalid file', () => {
    // arrage
    expect.assertions(1);
    let file = 'bad.txt';

    // act and assert
    return expect(utils.readFile(file)).rejects.toMatch('Invalid File');
  });

  it('should resolve and receive file contents', () => {
    expect.assertions(1);
    // arrange
    let file = 'good.txt';

    // act and assert
    return utils.readFile(file)
      .then(data => {
        expect(Buffer.isBuffer(data)).toBeTruthy();
      });
  });

});

describe('utils.writeFile()', () => {

  it('can save a file', () => {
    const str = 'test words';
    const b = Buffer.from(str);
    return utils.writeFile('foo.txt', b)
      .then( success => {
        expect(success).toBeUndefined();
      });
  });

  it('raises an error if a file is invalid', () => {
    const str = 'test words';
    const b = Buffer.from(str);
    return utils.writeFile(undefined, b)
      .then( success => {
        expect(success).toBeUndefined();
      })
      .catch( err => {
        expect(err).toBeDefined();
      });
  });

});
