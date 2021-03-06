const Board = require('./board.js');
const MoveError = require('./moveError.js');

class Game {
  constructor() {
    this.currentPlayer = Board.marks[0];
    this.board = new Board();
  }

  isOver() {
    return this.board.isOver();
  }

  playMove(pos) {
    this.board.place_mark(pos, this.currentPlayer);
    this.swapTurn();
  }

  promptMove(reader, callback) {
    const game = this;

    this.board.print();
    console.log(`Current turn: ${this.currentPlayer}`);

    reader.question('Enter rowIdx: ', (rowIdxStr) => {
      const rowIdx = parseInt(rowIdxStr);
      reader.question('Enter colIdx: ', (colIdxStr) => {
        const colIdx = parseInt(colIdxStr);
        callback([rowIdx, colIdx]);
      });
    });
  }

  run(reader, completioncallback) {
    this.promptMove(reader, (move) => {
      try {
        this.playMove(move);
      } catch (e) {
        if (e instanceof MoveError) {
          console.log(e.msg);
        } else {
          throw e;
        }
      }

      if (this.isOver()) {
        this.board.print();
        if (this.winner()) {
          console.log(`${this.winner()} has won!`);
        } else {
          console.log('NO ONE WINS!');
        }
        completioncallback();
      } else {
        this.run(reader, completioncallback);
      }
    });
  }

  swapTurn() {
    if (this.currentPlayer === Board.marks[0]) {
      this.currentPlayer = Board.marks[1];
    } else {
      this.currentPlayer = Board.marks[0];
    }
  }

  winner() {
    return this.board.winner();
  }
}

module.exports = Game;
