const Util = require('./util.js');
const Asteroid = require('./asteroid');

function Game() {
  this.asteroids = [];

  this.addAsteroids();
}

Game.BG_COLOR = '#e6e6e6';
Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 10;

Game.prototype.addAsteroids = function () {
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid({ game: this }));
  }
};

Game.prototype.randomPosition = function () {
  return [Game.DIM_X * Math.random(), Game.DIM_Y * Math.random()];
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  ctx.fillStyle = Game.BG_COLOR;
  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

  this.asteroids.forEach(function (object) {
    object.draw(ctx);
  });
};

Game.prototype.moveObjects = function (delta) {
  this.asteroids.forEach(function (object) {
    object.move(delta);
  });
};

Game.prototype.wrap = function (pos) {
  return [Util.wrap(pos[0], Game.DIM_X), Util.wrap(pos[1], Game.DIM_Y)];
};

Game.prototype.isOutOfBounds = function (pos) {
  return pos[0] < 0 || pos[1] < 0 || pos[0] > Game.DIM_X || pos[1] > Game.DIM_Y;
};

module.exports = Game;
