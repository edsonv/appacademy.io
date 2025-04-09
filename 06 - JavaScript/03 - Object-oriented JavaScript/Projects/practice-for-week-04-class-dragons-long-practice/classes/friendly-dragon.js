const Dragon = require('./dragon');

// Your code here
class FriendlyDragon extends Dragon {
  constructor(name, color, lifeGoals, friend) {
    super(name, color);
    this.name = name;
    this.color = color;
    this.lifeGoals = lifeGoals;
    this.friend = friend;
  }

  hasLifeGoals() {
    for (const lifeGoal of this.lifeGoals) {
      console.log(`${this.name} likes to ${lifeGoal}`);
    }
  }

  helpsPeople() {
    return `${this.name} helps their friend ${this.friend}`;
  }
}

// const puff = new FriendlyDragon(
//   'Puff',
//   'green',
//   ['live by the sea', 'frolick in the autumn mist', 'help small children'],
//   'Jackie Paper'
// );
// console.log(puff);
// console.log(puff.breathesFire()); //Friendly dragons can still breathe fire!
// puff.hasLifeGoals();
// console.log(puff.helpsPeople());

// const toothless = new FriendlyDragon(
//   'Toothless',
//   'black',
//   [
//     'save the town of Burke',
//     'fly with a kid on his back',
//     'hang out with Vikings',
//   ],
//   'Hiccup'
// );
// console.log(toothless);
// toothless.hasLifeGoals();
// console.log(toothless.helpsPeople());
// console.log(toothless.breathesFire());

module.exports = FriendlyDragon;
