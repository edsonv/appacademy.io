const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;

chai.use(spies);

const myMap = require('../problems/my-map'); // adjust the path as needed

describe('myMap', () => {
  let input;

  // 🧼 Ensure isolation with beforeEach
  beforeEach(() => {
    input = [1, 2, 3];
  });

  it('should not mutate the original array', () => {
    const clone = [...input];
    myMap(input, (x) => x * 2);
    expect(input).to.deep.equal(clone);
  });

  it('should not call the built-in Array.prototype.map', () => {
    // Spy on the input array's .map method
    const mapSpy = chai.spy.on(input, 'map');
    myMap(input, (x) => x * 2);
    expect(mapSpy).to.not.have.been.called();
  });

  it('should invoke the callback once for each element', () => {
    const callback = chai.spy((x) => x * 2);
    myMap(input, callback);
    expect(callback).to.have.been.called.exactly(input.length);
  });
});
