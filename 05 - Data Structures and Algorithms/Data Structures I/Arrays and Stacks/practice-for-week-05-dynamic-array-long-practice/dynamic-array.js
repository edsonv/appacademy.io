class DynamicArray {
  constructor(defaultSize = 4) {
    // Your code here
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);
    this.length = 0;
  }

  read(index) {
    // Your code here
    return this.data[index];
  }

  push(val) {
    // Your code here
    if (this.length >= this.capacity) {
      this.resize();
    }

    this.data[this.length] = val;
    this.length++;
  }

  pop() {
    // Your code here
    if (this.length === 0) return undefined;

    const value = this.data[this.length - 1];
    this.data[this.length - 1] = undefined;
    this.length--;

    return value;
  }

  shift() {
    // Your code here
    if (this.length === 0) return undefined;
    const value = this.data[0];

    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    this.length--;

    return value;
  }

  unshift(val) {
    // Your code here
    if (this.length >= this.capacity) {
      this.resize();
    }

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {
    // Your code here
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        return i;
      }
    }

    return -1;
  }

  resize() {
    // Your code here
    this.capacity *= 2;
    const newData = new Array(this.capacity);

    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i];
    }

    this.data = newData;
  }
}

module.exports = DynamicArray;
