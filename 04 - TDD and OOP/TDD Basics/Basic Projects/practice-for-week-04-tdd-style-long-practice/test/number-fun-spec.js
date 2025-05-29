// Your code here
const { expect } = require('chai');
const { returnsThree, reciprocal } = require('../problems/number-fun');

describe('Number Fun', () => {
  describe('returnsThree()', () => {
    it('should return the number 3', () => {
      expect(returnsThree()).to.equal(3);
    });
  });

  describe('reciprocal(n)', () => {
    it('should return the reciprocal of n', () => {
      expect(reciprocal(2)).to.equal(0.5);
      expect(reciprocal(4)).to.equal(0.25);
      expect(reciprocal(5)).to.equal(0.2);
      expect(reciprocal(8)).to.equal(0.125);
      expect(reciprocal(10)).to.equal(0.1);
    });

    it('should accept a number between 1 and 1000000', () => {
      expect(() => reciprocal(0)).to.throw(
        RangeError,
        'n must be between 1 and 1000000'
      );
      expect(() => reciprocal(10000001)).to.throw(
        RangeError,
        'n must be between 1 and 1000000'
      );
    });
  });
});
