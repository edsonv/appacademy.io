function GameView(game, ctx) {
  this.game = game;
  this.ctx = ctx;
}

GameView.prototype.start = function () {
  setInterval(() => {
    this.game.moveObjects(100);
    this.game.draw(this.ctx);
  }, 1000);
};

module.exports = GameView;
