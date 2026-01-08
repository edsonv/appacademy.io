const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {
  constructor() {
    this.playerTurn = "O";

    this.grid = [
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
    ];

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    // Navigation and Action commands
    Screen.addCommand("left", "move cursor left", () => this.cursor.left());
    Screen.addCommand("right", "move cursor right", () => this.cursor.right());
    Screen.addCommand("up", "move cursor up", () => this.cursor.up());
    Screen.addCommand("down", "move cursor down", () => this.cursor.down());
    Screen.addCommand("return", "place piece", () => this.placePiece());
    Screen.addCommand("space", "place piece", () => this.placePiece());

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  placePiece() {
    let col = this.cursor.col;
    for (let row = this.grid.length - 1; row >= 0; row--) {
      if (this.grid[row][col] === " ") {
        this.grid[row][col] = this.playerTurn;
        Screen.setGrid(row, col, this.playerTurn);

        const winner = ConnectFour.checkWin(this.grid);
        if (winner) {
          ConnectFour.endGame(winner);
        } else {
          this.playerTurn = this.playerTurn === "O" ? "X" : "O";
          Screen.render();
        }
        return;
      }
    }
    Screen.setMessage("Column is full!");
    Screen.render();
  }

  static checkWin(grid) {
    const numRows = grid.length;
    const numCols = grid[0].length;
    let isFull = true;

    for (let r = 0; r < numRows; r++) {
      for (let c = 0; c < numCols; c++) {
        const char = grid[r][c];
        if (char === " ") {
          isFull = false;
          continue;
        }

        // Horizontal
        if (
          c + 3 < numCols &&
          char === grid[r][c + 1] &&
          char === grid[r][c + 2] &&
          char === grid[r][c + 3]
        ) {
          return char;
        }

        // Vertical
        if (
          r + 3 < numRows &&
          char === grid[r + 1][c] &&
          char === grid[r + 2][c] &&
          char === grid[r + 3][c]
        ) {
          return char;
        }

        // Diagonal Down-Right
        if (
          r + 3 < numRows &&
          c + 3 < numCols &&
          char === grid[r + 1][c + 1] &&
          char === grid[r + 2][c + 2] &&
          char === grid[r + 3][c + 3]
        ) {
          return char;
        }

        // Diagonal Up-Right
        if (
          r - 3 >= 0 &&
          c + 3 < numCols &&
          char === grid[r - 1][c + 1] &&
          char === grid[r - 2][c + 2] &&
          char === grid[r - 3][c + 3]
        ) {
          return char;
        }
      }
    }

    return isFull ? "T" : false;
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

module.exports = ConnectFour;
