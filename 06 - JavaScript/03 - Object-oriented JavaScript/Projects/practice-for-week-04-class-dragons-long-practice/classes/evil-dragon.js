const Dragon = require('./dragon');

// Your code here
class EvilDragon extends Dragon {
  constructor(name, color, evilDoings, nemesis) {
    super(name, color);
    this.name = name;
    this.color = color;
    this.evilDoings = evilDoings;
    this.nemesis = nemesis;
  }

  dontInviteThemOverForDinner() {
    for (const evilDoing of this.evilDoings) {
      console.log(`${this.name} will ${evilDoing}`);
    }
  }

  burnsNemesis() {
    return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
  }
}

// const enderDragon = new EvilDragon(
//   'Ender Dragon',
//   'black',
//   [
//     'spit a fireball at Steve',
//     'rule over all the Endermen',
//     'destroy all blocks in its way',
//   ],
//   'Steve'
// );
// console.log(enderDragon);
// enderDragon.dontInviteThemOverForDinner();
// console.log(enderDragon.breathesFire());
// console.log(enderDragon.burnsNemesis());

// const drogon = new EvilDragon(
//   'Drogon',
//   'black-red',
//   [
//     'eat all your livestock',
//     'burn down your castle in Westeros',
//     'burn your father and brother',
//   ],
//   'Night King'
// );
// console.log(drogon);
// drogon.dontInviteThemOverForDinner();
// console.log(drogon.breathesFire());
// console.log(drogon.burnsNemesis());

module.exports = EvilDragon;
