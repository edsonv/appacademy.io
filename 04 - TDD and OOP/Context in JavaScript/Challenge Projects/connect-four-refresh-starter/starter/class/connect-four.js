const Screen = require('./screen');
const Cursor = require('./cursor');

class ConnectFour {
  constructor() {
    this.playerTurn = 'O';

    this.grid = [
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ];

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('t', 'test command (remove)', ConnectFour.testCommand);

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  // Remove this
  static testCommand() {
    console.log('TEST COMMAND');
  }

  static checkWin(grid) {
    const size = grid.length;
    let isFull = true;
    const allEqual = (cells) =>
      cells.every((cell) => cell === cells[0] && cell !== ' ');

    for (let i = 0; i < size; i++) {
      const row = grid[i];
      const col = grid.map((row) => row[i]);

      if (allEqual(row)) return row[0]; // Horizontal
      if (allEqual(col)) return col[0]; // vertical

      if (row.includes(' ')) isFull = false;
    }

    //  diagonals
    const mainDiagonal = grid.map((row, i) => row[i]);
    const antiDiagonal = grid.map((row, i) => row[size - 1 - i]);

    if (allEqual(mainDiagonal)) return mainDiagonal[0];
    if (allEqual(antiDiagonal)) return antiDiagonal[0];

    return isFull ? 'T' : false;
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }
}

module.exports = ConnectFour;
