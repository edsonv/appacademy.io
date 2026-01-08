const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {
  constructor() {
    this.playerTurn = "O";

    this.grid = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
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
    if (this.grid[this.cursor.row][this.cursor.col] === " ") {
      this.grid[this.cursor.row][this.cursor.col] = this.playerTurn;
      Screen.setGrid(this.cursor.row, this.cursor.col, this.playerTurn);

      const winner = TTT.checkWin(this.grid);
      if (winner) {
        TTT.endGame(winner);
      } else {
        this.playerTurn = this.playerTurn === "O" ? "X" : "O";
        Screen.setMessage(`Current Player: ${this.playerTurn}`);
        Screen.render();
      }
    } else {
      Screen.setMessage("Space already taken!");
      Screen.render();
    }
  }

  static checkWin(grid) {
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

    // Horizontal
    for (let row = 0; row < 3; row++) {
      if (
        grid[row][0] !== " " &&
        grid[row][0] === grid[row][1] &&
        grid[row][1] === grid[row][2]
      ) {
        return grid[row][0];
      }
    }

    // Vertical
    for (let col = 0; col < 3; col++) {
      if (
        grid[0][col] !== " " &&
        grid[0][col] === grid[1][col] &&
        grid[1][col] === grid[2][col]
      ) {
        return grid[0][col];
      }
    }

    // Diagonal
    if (
      grid[0][0] !== " " &&
      grid[0][0] === grid[1][1] &&
      grid[1][1] === grid[2][2]
    ) {
      return grid[0][0];
    }

    if (
      grid[0][2] !== " " &&
      grid[0][2] === grid[1][1] &&
      grid[1][1] === grid[2][0]
    ) {
      return grid[0][2];
    }

    // Tie
    let empty = false;
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (grid[row][col] === " ") {
          empty = true;
          break;
        }
      }
    }

    if (!empty) {
      return "T";
    }

    return false;
  }

  static endGame(winner) {
    if (winner === "O" || winner === "X") {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === "T") {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }
}

module.exports = TTT;
