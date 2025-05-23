// Your code here
class Dragon {
  static getDragons(...dragons) {
    const dragonNames = [];
    for (let dragon of dragons) {
      dragonNames.push(dragon.name);
    }
    return dragonNames;
  }
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }
}

// const puff = new Dragon('Puff', 'green');
// console.log(puff);
// console.log(puff.breathesFire());

// const toothless = new Dragon('Toothless', 'black');
// console.log(toothless);
// console.log(toothless.breathesFire());

// const puff = new Dragon('Puff', 'green');
// const toothless = new Dragon('Toothless', 'black');
// console.log(Dragon.getDragons(puff, toothless));
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
