function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
  return `${this.owner} loves ${this.name}`;
}

let felix = new Cat("Felix", "Cartoon Network");
let tom = new Cat("Tom", "Hannah Barbera");

console.log(felix.cuteStatement());
console.log(tom.cuteStatement());

Cat.prototype.cuteStatement = function () {
  return `Everyone loves ${this.name}`;
};

console.log(felix.cuteStatement());
console.log(tom.cuteStatement());

Cat.prototype.meow = function () {
  return "meeeooow!!";
}

console.log(felix.meow());

felix.meow = function () {
  return "meow...";
};

console.log(tom.meow());
console.log(felix.meow());