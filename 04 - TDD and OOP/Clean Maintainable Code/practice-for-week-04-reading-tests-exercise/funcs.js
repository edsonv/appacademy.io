function isFive(num) {
  return num === 5;
}

function idOdd(number) {
  if (typeof number !== Number) throw new Error();
  return number % 2 !== 0;
}

function myRange(min, max, step = 1) {
  let range = [];
  for (let i = min; i <= max; i += step) {
    range.push(i);
  }
  return range;
}
