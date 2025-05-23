const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let secretNumber;
let min;
let max;
let numAttemps;

function checkGuess(number) {
  if (number > secretNumber) {
    console.log('Too high');
    return false;
  }
  if (number < secretNumber) {
    console.log('Too low');
    return false;
  }
  if (number === secretNumber) {
    console.log('Correct!');
    return true;
  }
}

const handleAskGuess = (answer) => {
  const guess = checkGuess(Number(answer));

  if (guess) {
    console.log('You win!');
    rl.close();
  } else if (numAttemps > 0) {
    askGuess();
  } else {
    console.log('You lose.');
    rl.close();
  }
};

function askGuess() {
  numAttemps--;
  rl.question('Enter a guess: ', handleAskGuess);
}

const handleMaxInput = (maxInput) => {
  max = Number(maxInput);
  console.log(`I'm thinking of a number between ${min}  and ${max}...`);

  secretNumber = randomInRange(min, max);
  askGuess();
};

const handleMinInput = (minInput) => {
  min = Number(minInput);
  rl.question('Enter a max number: ', handleMaxInput);
};

function askRange() {
  rl.question('Enter a min number: ', handleMinInput);
}

const handleAskLimit = (limit) => {
  numAttemps = limit;
  askRange();
};

function askLimit() {
  rl.question('Enter a limit of attempts: ', handleAskLimit);
}

askLimit();
