const Employee = require('./employee');
const Manager = require('./manager');

const hobbes = new Manager('Hobbes', 1000000, 'Founder');
const calvin = new Manager('Calvin', 130000, 'Director', hobbes);
const sussie = new Manager('Sussie', 100000, 'TA Manager', calvin);

const lily = new Employee('Lily', 90000, 'TA', sussie);
const clifford = new Employee('Clifford', 90000, 'TA', sussie);

console.log(hobbes.calculateBonus(0.05)); // => 70500
console.log(calvin.calculateBonus(0.05)); // => 20500
console.log(sussie.calculateBonus(0.05)); // => 14000
console.log(lily.calculateBonus(0.05)); // => 4500
console.log(clifford.calculateBonus(0.05)); // => 4500
