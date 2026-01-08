// Your code here
const { expect } = require('chai');
const reverseString = require('../problems/reverse-string');

describe('reverseString(string)', () => {
  it('should return the reversed string', () => {
    const input = 'fun';
    const reversed = reverseString(input);

    expect(reversed).to.equal('nuf');
  });

  it('should throw an error if the argument is not a string', () => {
    expect(() => reverseString(123)).to.throw(TypeError);
  });
});
