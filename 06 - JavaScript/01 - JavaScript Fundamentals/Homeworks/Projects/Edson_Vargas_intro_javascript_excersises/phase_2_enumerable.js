const NUMS = [1, 2, 3, 4, 5];

Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

NUMS.forEach(num => {
  console.log(`square of ${num} is ${num * num}`);
});

