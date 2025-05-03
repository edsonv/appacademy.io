// using surrogate trick

Function.prototype.inherits = function (SuperClass) {
  function Surrogate() {}
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

// using Object.create

Function.prototype.inherits2 = function (SuperClass) {
  this.prototype = Object.create(SuperClass.prototype);
  this.prototype.constructor = this;
};

function MovingObject(name) {
  this.name = name;
}
MovingObject.prototype.moveForward = function () {
  console.log(this.name + ' moving forward!');
};

function Ship(name) {
  MovingObject.call(this, name);
}

Ship.inherits(MovingObject);
Ship.prototype.sail = function () {
  console.log(this.name + ' is sailing');
};

const santaMaria = new Ship('Santa María');
santaMaria.moveForward();
santaMaria.sail();
