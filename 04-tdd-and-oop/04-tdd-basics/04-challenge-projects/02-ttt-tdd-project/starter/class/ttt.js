const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {
  static SYMBOLS = {
    X: "X",
    O: "O",
    EMPTY: " ",
    TIE: "T",
  };

  constructor() {
    this.playerTurn = TTT.SYMBOLS.O;

    this.grid = [
      [TTT.SYMBOLS.EMPTY, TTT.SYMBOLS.EMPTY, TTT.SYMBOLS.EMPTY],
      [TTT.SYMBOLS.EMPTY, TTT.SYMBOLS.EMPTY, TTT.SYMBOLS.EMPTY],
      [TTT.SYMBOLS.EMPTY, TTT.SYMBOLS.EMPTY, TTT.SYMBOLS.EMPTY],
    ];

    this.cursor = new Cursor(3, 3);

    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    Screen.addCommand("up", "move cursor up", this.cursorUp.bind(this));
    Screen.addCommand("down", "move cursor down", this.cursorDown.bind(this));
    Screen.addCommand("left", "move cursor left", this.cursorLeft.bind(this));
    Screen.addCommand(
      "right",
      "move cursor right",
      this.cursorRight.bind(this)
    );
    Screen.addCommand("return", "place move", this.placeMove.bind(this));

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  cursorUp() {
    this.cursor.up();
    Screen.render();
  }

  cursorDown() {
    this.cursor.down();
    Screen.render();
  }

  cursorLeft() {
    this.cursor.left();
    Screen.render();
  }

  cursorRight() {
    this.cursor.right();
    Screen.render();
  }

  placeMove() {
    if (this.grid[this.cursor.row][this.cursor.col] === TTT.SYMBOLS.EMPTY) {
      this.grid[this.cursor.row][this.cursor.col] = this.playerTurn;
      Screen.setGrid(this.cursor.row, this.cursor.col, this.playerTurn);

      const winner = TTT.checkWin(this.grid);
      if (winner) {
        TTT.endGame(winner);
      } else {
        this.playerTurn =
          this.playerTurn === TTT.SYMBOLS.O ? TTT.SYMBOLS.X : TTT.SYMBOLS.O;
        Screen.setMessage(`Current Player: ${this.playerTurn}`);
        Screen.render();
      }
    } else {
      Screen.setMessage("Space already taken!");
      Screen.render();
    }
  }

  static checkWin(grid) {
    const lines = this._getLines(grid);

    for (const line of lines) {
      const winner = this._checkLine(line);
      if (winner) return winner;
    }

    if (this._isGridFull(grid)) return TTT.SYMBOLS.TIE;

    return false;
  }

  static _getLines(grid) {
    const lines = [];

    // Rows
    grid.forEach((row) => lines.push(row));

    // Columns
    for (let col = 0; col < grid[0].length; col++) {
      lines.push(grid.map((row) => row[col]));
    }

    // Diagonals
    lines.push([grid[0][0], grid[1][1], grid[2][2]]);
    lines.push([grid[0][2], grid[1][1], grid[2][0]]);

    return lines;
  }

  static _checkLine(line) {
    const first = line[0];
    if (first !== TTT.SYMBOLS.EMPTY && line.every((cell) => cell === first)) {
      return first;
    }
    return null;
  }

  static _isGridFull(grid) {
    return grid.every((row) => row.every((cell) => cell !== TTT.SYMBOLS.EMPTY));
  }

  static endGame(winner) {
    if (winner === TTT.SYMBOLS.O || winner === TTT.SYMBOLS.X) {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === TTT.SYMBOLS.TIE) {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }
}

module.exports = TTT;
