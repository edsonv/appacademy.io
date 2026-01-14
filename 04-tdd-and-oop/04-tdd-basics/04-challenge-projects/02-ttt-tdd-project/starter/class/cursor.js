const Screen = require("./screen");

class Cursor {
  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = "black";
    this.cursorColor = "yellow";
  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  _move(rowDelta, colDelta) {
    const newRow = this.row + rowDelta;
    const newCol = this.col + colDelta;

    if (
      newRow >= 0 &&
      newRow < this.numRows &&
      newCol >= 0 &&
      newCol < this.numCols
    ) {
      this.resetBackgroundColor();
      this.row = newRow;
      this.col = newCol;
      this.setBackgroundColor();
    }
  }

  up() {
    this._move(-1, 0);
  }

  down() {
    this._move(1, 0);
  }

  left() {
    this._move(0, -1);
  }

  right() {
    this._move(0, 1);
  }
}

module.exports = Cursor;
