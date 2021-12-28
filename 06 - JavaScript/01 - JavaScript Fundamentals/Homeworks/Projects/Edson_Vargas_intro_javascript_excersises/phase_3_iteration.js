Array.prototype.bubbleSort = function () {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        isSorted = false;
      }
    }
  }

  return this;
};

console.log([5, 3, 4, 2, 1].bubbleSort());

String.prototype.substrings = function () {
  let subStrings = []
  for (let start = 0; start < this.length; start++) {
    for (let end = start + 1; end <= this.length; end++) {
      subStrings.push(this.slice(start, end));
    }
  }
  return subStrings;
};

console.log("abc".substrings());