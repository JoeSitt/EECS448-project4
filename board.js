/**
* Encapsulates a game of Connect-4
*
* Contains an int[][] representing the game board. The grid is an array of rows,
* meaning items are indexed as grid[row][column].
*/
class Game {

    /**
    * Initializes grid and starting player based on user specification. whether
    * or not player 1 is to make first move is set and defaulted to when board
    * is reset.
    */
    constructor(doesPlayer1Start) {
        if (doesPlayer1Start) {
            this.turn = 1;
        } else {
            this.turn = 2;
        }

        this.player1Starts = doesPlayer1Start;
        this.grid = this.makeGrid(6, 7, 0);
    }

    /**
    * Returns separate copy of game instance.
    */
    getCopy() {
        var gameCopy = new Game(this.player1Starts);
        for (var i = 0; i < this.grid.length; i++) {
            for (var j = 0; j < this.grid[0].length; j++) {
                gameCopy.grid[i][j] = this.grid[i][j];
            }
        }
        return gameCopy;
    }

    /**
    * Returns the transpose of the grid. As grid items are accessed via,
    * grid[row][column], the returned tranpose can have its items accessed via
    * returned_grid[column][row]
    */
    getTransposedGrid() {
        return this.grid[0].map((col, i) => this.grid.map(row => row[i]));
    }

    /**
    * Resets game board, resetting turn.
    */
    reset() {
        this.grid = this.makeGrid(6, 7, 0);

		//modified to make the front end work
		var elementbut  = document.getElementsByTagName("button");
		for (var i = 0; i < (elementbut.length); i++) {
				elementbut[i].value = 0;
		}
		turns.innerHTML = "<h3>Player 1's Turn</h3>";

        if (this.player1Starts) {
            this.turn = 1;
        } else {
            this.turn = 2;
        }
    }

    /**
    * Returns a 2d array containing content passed.
    */
    makeGrid(height, width, content) {
        var outArr = [];
        for (var i = 0; i < height; i++) {
            var row = [];
            for (var j = 0; j < width; j++) {
                row.push(content);
            }
            outArr.push(row);
        }
        return outArr;
    }

    /**
    * Switches current player to other.
    */
    switchTurn() {
        if (this.turn == 1) {
            this.turn = 2;
        } else if (this.turn == 2) {
            this.turn = 1;
        } else {
            console.log("ERROR");
        }
    }

    /**
    * Places player's whose turn it is's representation in spot passed.
    * Returns true if placement was succesful (column was not full), else false.
    * Switch turn to opposing player.
    */
    move(spot) {
        if (this.grid[0][spot] != 0) {
            return false;
        } else {
            for (var j = 0; j < 6; j++) {
                if (this.grid[j][spot] != 0) {
                    this.grid[j - 1][spot] = this.turn;
                    this.switchTurn();
                    return true;
                }
            }

            this.grid[5][spot] = this.turn;
            this.switchTurn();
            return true;
        }
    }

    /**
    * Check for '\' diagonals of four for player.
    */
    checkMajorDiags(player) {

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 4; j++) {
                if (this.grid[i][j] == player && this.grid[i + 1][j + 1] == player && this.grid[i + 2][j + 2] == player && this.grid[i + 3][j + 3] == player) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
    * Check '/' diagonals of four for players.
    */
    checkMinorDiags(player) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 4; j++) {
                if (this.grid[i + 3][j] == player && this.grid[i + 2][j + 1] == player && this.grid[i + 1][j + 2] == player && this.grid[i][j + 3] == player) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
    * Check rows for player.
    */
    checkRows(player) {

        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 4; j++) {
                if (this.grid[i][j] == player && this.grid[i][j + 1] == player && this.grid[i][j + 2] == player && this.grid[i][j + 3] == player) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
    * Check columns for player.
    */
    checkCols(player) {

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 7; j++) {
                if (this.grid[i][j] == player && this.grid[i + 1][j] == player && this.grid[i + 2][j] == player && this.grid[i + 3][j] == player) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
    * Returns whether or not the game is in a tied state.
    */
    isTie() {
        for (var i = 0; i < 6; i++) {
            if (this.grid[0][i] == 0) {
                return false;
            }
        }
        return true;
    }

    /**
    * Returns whether or not the player passed has won.
    */
    hasPlayerWon(player) {
        return this.checkCols(player) || this.checkRows(player) || this.checkMajorDiags(player) || this.checkMinorDiags(player);
    }

    /**
    * Returns integer representing current state of game.
    *
    * -1 : Game is in progress
    *  0 : Game has ended and resulted in a tie
    *  1 : Game has ended and resulted in player 1 winning
    *  2 : Game has ended and resulted in player 2 winning
    */
    getState() {
        if (this.isTie()) {
            return 0;
        } else if (this.hasPlayerWon(1)) {
            return 1;
        } else if (this.hasPlayerWon(2)) {
            return 2;
        } else {
            return -1;
        }
    }

};

// Used to store state of game. Red is treated as plauer 1 and starts
var board = new Game(true);

/**
* Resets game. Both external and internal board representations are reset.
*/
function reset() {
    board.reset();
    update();
}

/**
* Returns integer representing current state of game.
*
* -1 : Game is in progress
*  0 : Game has ended and resulted in a tie
*  1 : Game has ended and resulted in red winning
*  2 : Game has ended and resulted in black winning
*/
function state() {
    return board.getState();
}

/**
* Given that the game is not over, the current player moves in the spot passed.
*/
function move(spot) {
    if (board.getState() != -1) {

		//modified to make the frontend work
		var disc = document.getElementById("turns");
		if (board.getState() == 1) {
			disc.innerHTML = "<h3>Game Over. Player 1 Won.</h3>";
		}
		else if (board.getState() == 2) {
			disc.innerHTML = "<h3>Game Over. Player 2 Won.</h3>";
		}
		else {
			disc.innerHTML = "<h3>Game Over. Game Tied.</h3>";
		}
		var gameEnd = document.getElementById("resetboard");
		gameEnd.value = 1;

        return;
    }

    if (!board.move(spot)) {
        alert("ERROR: Column is full!");
    } else {
        update();
    }
}

/**
* Given that the game is not over, the current player places a random move.
*/
function moveRandom() {
    if (board.getState() != -1) {

        //modified to make the frontend work
		var disc = document.getElementById("turns");
		if (board.getState() == 1) {
			disc.innerHTML = "<h3>Game Over. Ai 1 Won.</h3>";
			window.clearInterval(timer);
		}
		else if (board.getState() == 2) {
			disc.innerHTML = "<h3>Game Over. Ai 2 Won.</h3>";
			window.clearInterval(timer);
		}
		else {
			disc.innerHTML = "<h3>Game Over. Game Tied.</h3>";
			window.clearInterval(timer);
		}
		//var gameEnd = document.getElementById("resetboard");
		//gameEnd.value = 1;

        return;
    }
	var disc = document.getElementById("turns");
	disc.innerHTML = "<h3>Ai Currently Playing.</h3>";

    // Move randomly until valid move found
    while (!board.move(getRandInt(0, 7))) {}

    update();
}

/**
* Returns a ranom int in the range [start, end)
*/
function getRandInt(start, end) {
    return start + Math.floor(Math.random() * (end - start));
}

/**
* Updates frontend board repsentation according to Game object.
*/
function update() {
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 7; j++) {
            var b = document.getElementById("b" + i + j);
            var r = document.getElementById("r" + i + j);
            var n = document.getElementById("n" + i + j);

            if (board.grid[i][j] == 0) {
                b.hidden = 1;
                r.hidden = 1;
                n.hidden = 0;
            }
            if (board.grid[i][j] == 1) {
                b.hidden = 1;
                r.hidden = 0;
                n.hidden = 1;
            }
            if (board.grid[i][j] == 2) {
                b.hidden = 0;
                r.hidden = 1;
                n.hidden = 1;
            }
        }
    }
}

// TODO: Prevent turn switch on illegal (full column) move

/**
* Implements button functionality
*/
function dropDisc(x) {
	var disc = document.getElementById("turns");
	var check = false;
	var gameEnd = document.getElementById("resetboard");
	if (gameEnd.value != 1) {
	if (x == 1) {
		var fir = document.getElementById("first");
		if (fir.value < 6) {
			check = true;
			fir.value++;
		}
	}
	else if (x == 2) {
		var sec = document.getElementById("second");
		if (sec.value < 6) {
			check = true;
			sec.value++;
		}
	}
	else if (x == 3) {
		var thi = document.getElementById("third");
		if (thi.value < 6) {
			check = true;
			thi.value++;
		}
	}
	else if (x == 4) {
		var fou = document.getElementById("fourth");
		if (fou.value < 6) {
			check = true;
			fou.value++;
		}
	}
	else if (x == 5) {
		var fif = document.getElementById("fifth");
		if (fif.value < 6) {
			check = true;
			fif.value++;
		}
	}
	else if (x == 6) {
		var six = document.getElementById("sixth");
		if (six.value < 6) {
			check = true;
			six.value++;
		}
	}
	else {
		var sev = document.getElementById("seventh");
		if (sev.value < 6) {
			check = true;
			sev.value++;
		}
	}
	if (((disc.value % 2) == 1) && check) {
		move(x - 1);
		disc.innerHTML = "<h3>Player 1's Turn</h3>";
		disc.value++;
		getWinner();
	}
	else if (check) {
		move(x - 1);
		disc.innerHTML = "<h3>Player 2's Turn</h3>";
		disc.value++;
		getWinner();
	}
	if (disc.value == 42) {
		disc.innerHTML = "<h3>Game Over.</h3>";
	}
	}
	return;
}

/**
* Player vs AI
*/
function fightAi(x) {
	var disc = document.getElementById("turns");
	var check = false;
	var gameEnd = document.getElementById("resetboard");
	if (gameEnd.value != 1) {
	if (x == 1) {
		var fir = document.getElementById("first");
		if (fir.value < 6) {
			check = true;
			fir.value++;
		}
	}
	else if (x == 2) {
		var sec = document.getElementById("second");
		if (sec.value < 6) {
			check = true;
			sec.value++;
		}
	}
	else if (x == 3) {
		var thi = document.getElementById("third");
		if (thi.value < 6) {
			check = true;
			thi.value++;
		}
	}
	else if (x == 4) {
		var fou = document.getElementById("fourth");
		if (fou.value < 6) {
			check = true;
			fou.value++;
		}
	}
	else if (x == 5) {
		var fif = document.getElementById("fifth");
		if (fif.value < 6) {
			check = true;
			fif.value++;
		}
	}
	else if (x == 6) {
		var six = document.getElementById("sixth");
		if (six.value < 6) {
			check = true;
			six.value++;
		}
	}
	else {
		var sev = document.getElementById("seventh");
		if (sev.value < 6) {
			check = true;
			sev.value++;
		}
	}
	if (check) {
		move(x - 1);
		getWinner();
		moveRandom();
		disc.innerHTML = "<h3>Player 1's Turn</h3>";
		getWinner();
	}
	}
	return;
}

/**
* Determines winner.
*/
function getWinner() {
	var disc = document.getElementById("turns");
	var gameEnd = document.getElementById("resetboard");
	if (board.getState() != -1) {
		if (board.getState() == 1) {
			disc.innerHTML = "<h3>Game Over. Player 1 Won.</h3>";
		}
		else if (board.getState() == 2) {
			disc.innerHTML = "<h3>Game Over. Player 2 Won.</h3>";
		}
		else {
			disc.innerHTML = "<h3>Game Over. Game Tied.</h3>";
		}
		gameEnd.value = 1;
	}
	return;
}

var timer;
function AivsAi() {
	timer = window.setInterval(moveRandom, 1000);
	return;
}

/**
* Verifies that Game intsance can be correctly instantiated.
*/
QUnit.test("Game constructor(...) test", function(assert) {
  var expectedGrid = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
  ];
  var testGame = new Game(true);
  assert.deepEqual(testGame.grid, expectedGrid, "Verify that game grid is correctly initialized");
  assert.ok(testGame.player1Starts, "Verify that player 1 can be correctly set to start");

  var testGame = new Game(false);
  assert.notOk(testGame.player1Starts, "Verify that player 2 can be correctly set to start");
});

/**
* Verifies that Game updates after valid moves are done.
*/
QUnit.test("Game move(...) test", function(assert) {
  var expectedGrid = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
  ];
  var testGame = new Game(true);
  assert.deepEqual(testGame.grid, expectedGrid, "Verify game grid before moves are done");

  assert.ok(testGame.move(0), "Verify move method correctly returns that move can be done");
  var expectedGrid = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0]
  ];
  assert.deepEqual(testGame.grid, expectedGrid, "Verify game grid after first move is done");

  assert.ok(testGame.move(2), "Verify move method correctly returns that move can be done");
  var expectedGrid = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 0, 2, 0, 0, 0, 0]
  ];
  assert.deepEqual(testGame.grid, expectedGrid, "Verify game grid after second move is done");
});

/**
* Verifies that Game can be succesfully copied.
*/
QUnit.test("Game getCopy() test", function(assert) {

  var testGame = new Game(true);
  var testGameCopy = testGame.getCopy();
  assert.deepEqual(testGame.grid, testGameCopy.grid, "Verify that copied game instance has the same grid as original");

  testGame.move(0);
  assert.notDeepEqual(testGame.grid, testGameCopy.grid, "Verify that copied game instance is not updated when original is");

  testGame.grid = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 0, 2, 0, 0, 0, 0]
  ];
  testGameCopy = testGame.getCopy();
  assert.deepEqual(testGame.grid, testGameCopy.grid, "Verify that in progress game can successfully be copied");
});
