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
        alert("ERROR: Game is over!");
        return;
    }

    if (!board.move(spot)) {
        alert("ERROR: Column is full!");
    }
    
    update();
}

/**
* Given that the game is not over, the current player places a random move.
*/
function moveRandom() {
    if (board.getState() != -1) {
        alert("ERROR: Game is over!");
        return;
    }

    // Move randomly until valid move found
    while (!board.move(Math.round(Math.random()*7) + 1)) {}

    update();
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
