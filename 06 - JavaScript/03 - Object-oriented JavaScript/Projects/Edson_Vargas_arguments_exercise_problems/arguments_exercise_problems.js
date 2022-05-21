function sum() {
  let sum = 0;
  for (const i in arguments) {
    sum += arguments[i];
  }

  return sum;
}

console.log(sum(1, 2, 3, 4) === 10);
console.log(sum(1, 2, 3, 4, 5) === 15);

function sumRest(...args) {
  let total = 0;
  args.forEach((element) => {
    total += element;
  });
  return total;
}

console.log(sumRest(1, 2, 3, 4) === 10);
console.log(sumRest(1, 2, 3, 4, 5) === 15);

Function.prototype.myBind1 = function (ctx) {
  const fn = this;
  const bindArgs = Array.from(arguments).slice(1);
  return function _boundFn() {
    const callArgs = Array.from(arguments);
    return fn.apply(ctx, bindArgs.concat(callArgs));
  };
};

Function.prototype.myBind2 = function (ctx, ...bindArgs) {
  return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat('Markov');
const pavlov = new Dog('Pavlov');

markov.says('meow', 'Ned');

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind1(pavlov, 'meow', 'Kush')();
markov.says.myBind2(pavlov, 'meow', 'Kush')();

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind1(pavlov)('meow', 'a tree');
markov.says.myBind2(pavlov)('meow', 'a tree');

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind1(pavlov, 'meow')('Markov');
markov.says.myBind2(pavlov, 'meow')('Markov');

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays1 = markov.says.myBind1(pavlov);
const notMarkovSays2 = markov.says.myBind2(pavlov);
notMarkovSays1('meow', 'me');
notMarkovSays2('meow', 'me');

function curriedSum(numArgs) {
  let numbers = [];
  function _curriedSum(number) {
    numbers.push(number);

    if (numbers.length === numArgs) {
      let total = 0;

      numbers.forEach((num) => {
        total += num;
      });

      return total;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

const result = curriedSum(5);
console.log(result(1963)(1964)(1987)(1988)(1997));

// using spread
Function.prototype.curry = function (numArgs) {
  const args = [];
  const fn = this;

  function _curriedFn(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return fn(...args);
    } else {
      return _curriedFn;
    }
  }
  return _curriedFn;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumThree.curry(3)(87)(88)(97));

Function.prototype.curry1 = function (numArgs) {
  const args = [];
  const fn = this;

  function _curriedFn(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return fn.apply(null, args);
    } else {
      return _curriedFn;
    }
  }
  return _curriedFn;
};

console.log(sumThree.curry1(3)(87)(88)(97));
