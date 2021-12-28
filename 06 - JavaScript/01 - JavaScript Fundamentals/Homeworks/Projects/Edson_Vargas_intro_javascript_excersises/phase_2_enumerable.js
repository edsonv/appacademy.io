const NUMS = [1, 2, 3, 4, 5];

Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

NUMS.forEach(num => {
  console.log(`square of ${num} is ${num * num}`);
});

Array.prototype.myMap = function (callback) {
  const myMapArray = [];
  this.myEach(el => myMapArray.push(callback(el)));
  return myMapArray;
};

console.log(NUMS.myMap(num => num * num));

Array.prototype.myReduce = function (callback, initialValue) {
  let arr = this;

  if (initialValue === undefined) {
    initialValue = arr[0];
    arr = arr.slice(1);
  }

  let result = initialValue;

  arr.myEach(el => result = callback(result, el));

  return result;
};

console.log(NUMS.myReduce((total, item) => total + item));

