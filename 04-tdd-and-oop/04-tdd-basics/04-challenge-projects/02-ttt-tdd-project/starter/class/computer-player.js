const TTT = require("./ttt");

/**
 * ComputerPlayer class handles the logic for the AI opponent in Tic-Tac-Toe.
 */
class ComputerPlayer {
  /**
   * Strategically valuable board locations.
   */
  static LOCATIONS = {
    CENTER: { row: 1, col: 1 },
    CORNERS: [
      { row: 0, col: 0 },
      { row: 0, col: 2 },
      { row: 2, col: 0 },
      { row: 2, col: 2 },
    ],
    OPPOSITES: [
      { start: [0, 0], end: [2, 2] },
      { start: [0, 2], end: [2, 0] },
      { start: [2, 2], end: [0, 0] },
      { start: [2, 0], end: [0, 2] },
    ],
    SIDES: [
      { row: 0, col: 1 },
      { row: 1, col: 0 },
      { row: 1, col: 2 },
      { row: 2, col: 1 },
    ],
  };

  /**
   * Returns a list of all current valid moves on the grid.
   * @param {string[][]} grid
   * @returns {Array<{row: number, col: number}>}
   */
  static getValidMoves(grid) {
    const validMoves = [];
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === TTT.SYMBOLS.EMPTY) {
          validMoves.push({ row, col });
        }
      }
    }
    return validMoves;
  }

  /**
   * Returns a random valid move.
   * @param {string[][]} grid
   * @returns {{row: number, col: number}}
   */
  static randomMove(grid) {
    const validMoves = this.getValidMoves(grid);
    const randomIndex = Math.floor(Math.random() * validMoves.length);
    return validMoves[randomIndex];
  }

  /**
   * Helper to simulate a move on the grid, execute a callback, and then undo the move.
   * @private
   */
  static _simulate(grid, move, symbol, callback) {
    const { row, col } = move;
    grid[row][col] = symbol;
    const result = callback();
    grid[row][col] = TTT.SYMBOLS.EMPTY;
    return result;
  }

  /**
   * Finds moves that lead to an immediate win for the given symbol.
   * @param {string[][]} grid
   * @param {string} symbol
   * @returns {Array<{row: number, col: number}>}
   */
  static getWinningMoves(grid, symbol) {
    const validMoves = this.getValidMoves(grid);
    return validMoves.filter((move) =>
      this._simulate(grid, move, symbol, () => TTT.checkWin(grid) === symbol)
    );
  }

  /**
   * Finds moves that create a "fork" (at least two ways to win).
   * @param {string[][]} grid
   * @param {string} symbol
   * @returns {Array<{row: number, col: number}>}
   */
  static getForks(grid, symbol) {
    const validMoves = this.getValidMoves(grid);
    return validMoves.filter((move) =>
      this._simulate(
        grid,
        move,
        symbol,
        () => this.getWinningMoves(grid, symbol).length >= 2
      )
    );
  }

  /**
   * Returns the best possible move based on a prioritized hierarchy of strategy.
   * @param {string[][]} grid
   * @param {string} symbol
   * @returns {{row: number, col: number}}
   */
  static getSmartMove(grid, symbol) {
    const opponent = symbol === TTT.SYMBOLS.X ? TTT.SYMBOLS.O : TTT.SYMBOLS.X;

    // Hierarchy of prioritization:
    return (
      this.getWinningMoves(grid, symbol)[0] ||
      this.getWinningMoves(grid, opponent)[0] ||
      this.getForks(grid, symbol)[0] ||
      this._handleOpponentForks(grid, symbol, opponent) ||
      this._getCenterMove(grid) ||
      this._getOppositeCornerMove(grid, opponent) ||
      this._getEmptyCornerMove(grid) ||
      this._getEmptySideMove(grid) ||
      this.randomMove(grid)
    );
  }

  /**
   * Strategies for blocking an opponent's fork.
   * @private
   */
  static _handleOpponentForks(grid, symbol, opponent) {
    const opponentForks = this.getForks(grid, opponent);

    // If only one fork, block it.
    if (opponentForks.length === 1) return opponentForks[0];

    // If multiple forks, force the opponent into a defensive move that doesn't create a fork for them.
    if (opponentForks.length > 1) {
      const validMoves = this.getValidMoves(grid);
      for (const move of validMoves) {
        const result = this._simulate(grid, move, symbol, () => {
          const myWins = this.getWinningMoves(grid, symbol);
          if (myWins.length === 0) return null;

          const blockNeeded = myWins[0];
          return this._simulate(grid, blockNeeded, opponent, () => {
            const stillAFork = this.getWinningMoves(grid, opponent).length >= 2;
            return stillAFork ? null : move;
          });
        });
        if (result) return result;
      }
    }
    return null;
  }

  static _getCenterMove(grid) {
    const { row, col } = this.LOCATIONS.CENTER;
    if (grid[row][col] === TTT.SYMBOLS.EMPTY) return { row, col };
    return null;
  }

  static _getOppositeCornerMove(grid, opponent) {
    for (const pair of this.LOCATIONS.OPPOSITES) {
      const [startRow, startCol] = pair.start;
      const [endRow, endCol] = pair.end;
      if (
        grid[startRow][startCol] === opponent &&
        grid[endRow][endCol] === TTT.SYMBOLS.EMPTY
      ) {
        return { row: endRow, col: endCol };
      }
    }
    return null;
  }

  static _getEmptyCornerMove(grid) {
    return this.LOCATIONS.CORNERS.find(
      (c) => grid[c.row][c.col] === TTT.SYMBOLS.EMPTY
    );
  }

  static _getEmptySideMove(grid) {
    return this.LOCATIONS.SIDES.find(
      (s) => grid[s.row][s.col] === TTT.SYMBOLS.EMPTY
    );
  }
}

module.exports = ComputerPlayer;
