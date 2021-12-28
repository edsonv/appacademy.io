Array.prototype.uniq = function () {
  let uniqueArray = [];

  this.forEach(el => {
    if (!uniqueArray.includes(el)) {
      uniqueArray.push(el);
    }
  });
  return uniqueArray;
};

// console.log([1, 2, 2, 3, 3, 3].uniq()); // [1,2,3]

Array.prototype.twoSum = function () {
  indicesPairs = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      if (this[i] + this[j] === 0 && j > i) {
        indicesPairs.push([i, j]);
      }
    }
  }

  return indicesPairs;
};

// console.log([-1, 1, 2, 3, -5, 5].twoSum());

Array.prototype.transpose = function () {
  let columns = Array.from(
    { length: this[0].length },
    () => Array.from({ length: this[0].length })
  );

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      columns[j][i] = this[i][j];
    }
  }

  return columns;
};

console.log([[1, 2, 3], [4, 5, 6], [7, 8, 9]].transpose()); // [[1,4,7], [2,5,8], [3,6,9]]