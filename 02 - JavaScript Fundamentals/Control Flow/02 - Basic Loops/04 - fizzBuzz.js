function fizzBuzz(arr) {
  fizzBuzzArr = [];
  arr.forEach(el => {
    if ((el % 3 === 0) ^ (el % 5 === 0)) {
      fizzBuzzArr.push(el);
    }
  });

  return fizzBuzzArr;
}

console.log(fizzBuzz([1, 3, 5, 7, 9, 12, 15, 17,]));