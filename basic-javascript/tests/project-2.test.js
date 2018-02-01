const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('getBiggest', ()=> {
  const getBiggest = funcs.getBiggest;
  it('should be a function', ()=> {
    assert.typeOf(getBiggest, 'function');
  });
  it('should return a number', ()=> {
    const testCall = getBiggest(10,20);
    assert.typeOf(testCall,'number');
  });
  it('should return a larger number', ()=> {
    const testCall = getBiggest(10,20);
    assert.equal(testCall, 20);
  });
})

describe('returnFirst', ()=> {
  const returnFirst = funcs.returnFirst;
  const myValue = [0,1,2,3]
  it.skip('should return a specific value based on passed in array', () => {
    const testCall = returnFirst(returnFirst);
    assert.strictEquals(testCall, myValue);
  });
});