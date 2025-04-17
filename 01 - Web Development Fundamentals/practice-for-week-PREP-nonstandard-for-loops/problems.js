function oddIndices(arr) {
  // Return an array containing all the odd indices in the array
  // Your code here
  const oddIndices = [];
  arr.forEach((el, i) => (i % 2 !== 0 ? oddIndices.push(el) : null));

  return oddIndices;
}

function oddReverse(arr) {
  // Return an array containing all the odd indices starting from the end
  // Your code here
  return oddIndices(arr).reverse();
}

function secondPower(arr) {
  // Return an array containing all indices that are powers of 2
  // Your code here
  const powersOfTwo = [];
  let i = 0;
  while (i < arr.length - 1) {
    let index = 2 ** i;
    let element = arr[index];
    if (element) powersOfTwo.push(element);
    i++;
  }

  return powersOfTwo;
}

function nthPower(arr, n) {
  // Return an array containing all indices that are powers of n
  // Your code here
  const powersOfN = [];
  let i = 0;
  while (i < arr.length - 1) {
    let index = n ** i;
    let element = arr[index];
    if (element) powersOfN.push(element);
    i++;
  }

  return powersOfN;
}

function firstHalf(arr) {
  // Return an array containing the first half of an array
  // Include middle index on odd length arr
  // Your code here
  const arrLength = arr.length;
  const halfLength = Math.round(arrLength / 2);

  if (arrLength === 1 || arrLength === 0) {
    return arr;
  }

  return arr.toSpliced(halfLength);
}

function secondHalf(arr) {
  // Return an array containing the second half of an array
  // Exclude middle index on odd length arr
  // Your code here
  const arrLength = arr.length;
  const halfLength = Math.floor(arrLength / 2);
  if (arrLength === 1 || arrLength === 0) {
    return [];
  }

  return arr.toSpliced(-arrLength, halfLength);
}

module.exports = {
  oddIndices,
  oddReverse,
  secondPower,
  nthPower,
  firstHalf,
  secondHalf,
};
