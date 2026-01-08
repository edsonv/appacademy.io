const chai = require('chai');
const expect = chai.expect;

const { Word } = require('../class');

describe('Word', function () {
  let wordInstance;
  this.beforeEach(() => {
    wordInstance = new Word('hello');
  });

  describe('Word constructor function', function () {
    it('should have a "word" property', function () {
      expect(wordInstance.word).to.exist;
    });

    it('should set the "word" property when a new word is created', function () {
      expect(wordInstance.word).to.equal('hello');
    });
  });

  describe('removeVowels function', function () {
    it('should return a the word with all vowels removed', function () {
      expect(wordInstance.removeVowels()).to.equal('hll');
    });
  });

  describe('removeConsonants function', function () {
    it('should return the word with the consonants removed', function () {
      expect(wordInstance.removeConsonants()).to.equal('eo');
    });
  });

  describe('pigLatin function', function () {
    it('should return the word converted to pig latin', function () {
      expect(wordInstance.pigLatin()).to.equal('ellohay');
    });
  });
});
