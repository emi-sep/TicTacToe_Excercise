var tictactoeConstants = require('./constants');

class TicTacToeUtils {

  /**
   * Builds the board data object with a 3x3 array and an array of
   * empty cells
   * @private
   */
  buildBoard = function(boardSize) {
    var data = {
      board: [],
      empty: [],
    };

    for (var i = 0; i < boardSize; i += 1) {
      var row = [];

      for (var k = 0; k < boardSize; k += 1) {
        row.push(null);
        data.empty.push(i + " " + k);
      }

      data.board.push(row);
    }

    return data;
  }

  TestEjercicio7_1 = function(){
    console.log("commit1");
  }

  /**
   * Sets the players array with the types supplied, and markers (x and o)
   * chosen at random
   * @private
   */
  setupPlayers = function(playerTypes) {
    var initialIndex = 0;
    let players = [];
    if (playerTypes.length == 2) {
      initialIndex = Math.round(Math.random());

      players = [
        {
          marker: tictactoeConstants._playerMarks[initialIndex],
          type: playerTypes[0],
        },
        {
          marker: tictactoeConstants._playerMarks[!initialIndex | 0],
          type: playerTypes[1],
        },
      ];
    }
    return players;
  }

  /**
   * Rotates the players. Switches which player is currently active
   * @private
   */
  rotatePlayers = function(players) {
    players.push(players.shift());
  }

  TestEjercicio7_2 = function(){
    console.log("commit1");
  }
}

module.exports = { TicTacToeUtils }

var ticTacToeUtils = new TicTacToeUtils();

console.log(ticTacToeUtils.buildBoard(2));
console.log(tictactoeConstants);
console.log(ticTacToeUtils.setupPlayers(["E", "I"]));
