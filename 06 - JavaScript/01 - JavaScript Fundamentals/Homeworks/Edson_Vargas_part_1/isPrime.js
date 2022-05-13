export function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(2)); // true
console.log(isPrime(10)); // false
console.log(isPrime(15485863)); // true
console.log(isPrime(3548563)); // false
