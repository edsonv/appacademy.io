function myMap(inputArray, callback) {
  // Your code here
  let result = [];
  for (let el of inputArray) {
    result.push(callback(el));
  }
  return result;
}

module.exports = myMap;
