// Used to store state of game. Red is treated as plauer 1 and starts
var board = new Game(true);

/**
* Resets game. Both external and internal board representations are reset.
*/
function reset() {
	var gameEnd = document.getElementById("resetboard");
	var disc = document.getElementById("turns");
	disc.value = 0;
	fir = 0; sec = 0; thi = 0; fou = 0; fif = 0; six = 0; sev = 0;
	gameEnd.value = 0;
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
	// Changed the design.
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 7; j++) {
           if (board.grid[i][j] == 0) {
				var addDisc = document.getElementById("cell" + i + j);
				addDisc.innerHTML = "";
            }
            else if (board.grid[i][j] == 1) {
				var addDisc = document.getElementById("cell" + i + j);
				addDisc.innerHTML = '<img src="reddot.png" height="100" width="100">';
            }
            else {
				var addDisc = document.getElementById("cell" + i + j);
				addDisc.innerHTML = '<img src="bdot.png" height="100" width="100">';
            }
        }
    }
}

// TODO: Prevent turn switch on illegal (full column) move

/**
* Implements button functionality
*/
var fir = 0; var sec = 0; var thi = 0; var fou = 0; var fif = 0; var six = 0; var sev = 0;
function dropDisc(x) {
	var disc = document.getElementById("turns");
	var check = false;
	var gameEnd = document.getElementById("resetboard");

	if (gameEnd.value != 1) {
	if (x == 1) {
		//var fir = document.getElementById("first");
		if (fir < 6) {
			check = true;
			fir++;
		}
	}
	else if (x == 2) {
		//var sec = document.getElementById("second");
		if (sec < 6) {
			check = true;
			sec++;
		}
	}
	else if (x == 3) {
		//var thi = document.getElementById("third");
		if (thi < 6) {
			check = true;
			thi++;
		}
	}
	else if (x == 4) {
		//var fou = document.getElementById("fourth");
		if (fou < 6) {
			check = true;
			fou++;
		}
	}
	else if (x == 5) {
		//var fif = document.getElementById("fifth");
		if (fif < 6) {
			check = true;
			fif++;
		}
	}
	else if (x == 6) {
		//var six = document.getElementById("sixth");
		if (six < 6) {
			check = true;
			six++;
		}
	}
	else {
		//var sev = document.getElementById("seventh");
		if (sev < 6) {
			check = true;
			sev++;
		}
	}
	if (((disc.value % 2) == 1) && check) {
		//Future feature. movein(x - 1);
		//Future feature. animateDisc(x);
		move(x - 1);
		disc.innerHTML = "<h3>Player 1's Turn</h3>";
		disc.value++;
		getWinner();
	}
	else if (check) {
		//Future feature. movein(x - 1);
		//Future feature. animateDisc(x);
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
		//var fir = document.getElementById("first");
		if (fir < 6) {
			check = true;
			fir++;
		}
	}
	else if (x == 2) {
		//var sec = document.getElementById("second");
		if (sec < 6) {
			check = true;
			sec++;
		}
	}
	else if (x == 3) {
		//var thi = document.getElementById("third");
		if (thi < 6) {
			check = true;
			thi++;
		}
	}
	else if (x == 4) {
		//var fou = document.getElementById("fourth");
		if (fou < 6) {
			check = true;
			fou++;
		}
	}
	else if (x == 5) {
		//var fif = document.getElementById("fifth");
		if (fif < 6) {
			check = true;
			fif++;
		}
	}
	else if (x == 6) {
		//var six = document.getElementById("sixth");
		if (six < 6) {
			check = true;
			six++;
		}
	}
	else {
		//var sev = document.getElementById("seventh");
		if (sev < 6) {
			check = true;
			sev++;
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
* AI vs AI
*/
var timer;
function AivsAi() {
	timer = window.setInterval(moveRandom, 1000);
	return;
}

/*function moveDisc() {
	window.clearInterval(timer2);

}*/

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

function movein(x) {
	var disc = document.getElementById("turns");
	var topname = document.getElementById("top" + x);
	if (((disc.value % 2) == 1)) {
		topname.innerHTML = '<img id="mpic" src="bdot.png" height="100" width="100">';
	}
	else {
		topname.innerHTML = '<img id="mpic" src="reddot.png" height="100" width="100">';
	}
	/*else {
		topname.innerHTML = '<img src="lblue.png" height="100" width="100">';
	}*/

}

function moveout(x) {
	var topname = document.getElementById("top" + x);
	topname.innerHTML = "";
}

function addEvents() {
	for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 7; j++) {
            var cellname = document.getElementById("cell" + i + j);
			if (j == 0) {
				cellname.addEventListener("mousemove", function (e) { movein(0);});
				cellname.addEventListener("mouseout", function (e) { moveout(0);});
				cellname.onclick = function (e) { dropDisc(1);};
			}
			if (j == 1) {
				cellname.addEventListener("mousemove", function (e) { movein(1);});
				cellname.addEventListener("mouseout", function (e) { moveout(1);});
				cellname.onclick = function (e) { dropDisc(2);};
			}
			if (j == 2) {
				cellname.addEventListener("mousemove", function (e) { movein(2);});
				cellname.addEventListener("mouseout", function (e) { moveout(2);});
				cellname.onclick = function (e) { dropDisc(3);};
			}
			if (j == 3) {
				cellname.addEventListener("mousemove", function (e) { movein(3);});
				cellname.addEventListener("mouseout", function (e) { moveout(3);});
				cellname.onclick = function (e) { dropDisc(4);};
			}
			if (j == 4) {
				cellname.addEventListener("mousemove", function (e) { movein(4);});
				cellname.addEventListener("mouseout", function (e) { moveout(4);});
				cellname.onclick = function (e) { dropDisc(5);};
			}
			if (j == 5) {
				cellname.addEventListener("mousemove", function (e) { movein(5);});
				cellname.addEventListener("mouseout", function (e) { moveout(5);});
				cellname.onclick = function (e) { dropDisc(6);};
			}
			if (j == 6) {
				cellname.addEventListener("mousemove", function (e) { movein(6);});
				cellname.addEventListener("mouseout", function (e) { moveout(6);});
				cellname.onclick = function (e) { dropDisc(7);};
			}
		}
	}
}

function addPlayerEvent() {
	for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 7; j++) {
            var cellname = document.getElementById("cell" + i + j);
			if (j == 0) {
				cellname.onclick = function (e) { dropDisc(1);};
			}
			if (j == 1) {
				cellname.onclick = function (e) { dropDisc(2);};
			}
			if (j == 2) {
				cellname.onclick = function (e) { dropDisc(3);};
			}
			if (j == 3) {
				cellname.onclick = function (e) { dropDisc(4);};
			}
			if (j == 4) {
				cellname.onclick = function (e) { dropDisc(5);};
			}
			if (j == 5) {
				cellname.onclick = function (e) { dropDisc(6);};
			}
			if (j == 6) {
				cellname.onclick = function (e) { dropDisc(7);};
			}
		}
	}
}

function addAiEvent() {
	for (var i = 0; i < 6; i++) {
		for (var j = 0; j < 7; j++) {
            var cellname = document.getElementById("cell" + i + j);
			if (j == 0) {
				cellname.onclick = function (e) { fightAi(1);};
			}
			if (j == 1) {
				cellname.onclick = function (e) { fightAi(2);};
			}
			if (j == 2) {
				cellname.onclick = function (e) { fightAi(3);};
			}
			if (j == 3) {
				cellname.onclick = function (e) { fightAi(4);};
			}
			if (j == 4) {
				cellname.onclick = function (e) { fightAi(5);};
			}
			if (j == 5) {
				cellname.onclick = function (e) { fightAi(6);};
			}
			if (j == 6) {
				cellname.onclick = function (e) { fightAi(7);};
			}
		}
	}
}

/**
* Returns a spot to move to if next player whose turn it is can win.
* If not, returns -1
*/
function getMoveLookahead(game) {

    // Store whose turn it is
    var thisPlayer = game.turn;

    // Look for winning move, returning if found
    for (var i = 0; i < 7; i++) {
        var gameCopy = game.getCopy();
        if (gameCopy.move(i)) {
            if (gameCopy.getState() == thisPlayer) {
                return i;
            }
        }
    }

    // No immediate winning move found
    return -1;
}

/**
* Returns a list of potential moves that the player whose turn it is can make.
*/
function getPossibleMoves(game) {

	// Catch end game
	if (game.getState() != -1) {
		return [];
	}

	var moveList = [];
	for (var i = 0; i < 7; i++) {
		if (game.grid[0][i] == 0) {
			moveList.push(i);
		}
	}

	return moveList;
}
