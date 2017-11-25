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
	var down;
	var sTime = new Date().getTime();
		var animateDisc0 = function() {
		var cTime = new Date().getTime();
		var bottom = (10 + ((cTime - sTime)/1000) * 300);
		var animate = document.getElementById("mpic");
		animate.style.top = bottom + "px";
		if (bottom < 110) {
			window.requestAnimationFrame(animateDisc0);
		}
	}
		var animateDisc1 = function() {
		var cTime = new Date().getTime();
		var bottom = (10 + ((cTime - sTime)/1000) * 300);
		var animate = document.getElementById("mpic");
		animate.style.top = bottom + "px";
		if (bottom < 223) {
			window.requestAnimationFrame(animateDisc1);
		}
	}
		var animateDisc2 = function() {
		var cTime = new Date().getTime();
		var bottom = (10 + ((cTime - sTime)/1000) * 300);
		var animate = document.getElementById("mpic");
		animate.style.top = bottom + "px";
		if (bottom < 335) {
			window.requestAnimationFrame(animateDisc2);
		}
	}
		var animateDisc3 = function() {
		var cTime = new Date().getTime();
		var bottom = (10 + ((cTime - sTime)/1000) * 300);
		var animate = document.getElementById("mpic");
		animate.style.top = bottom + "px";
		if (bottom < 448) {
			window.requestAnimationFrame(animateDisc3);
		}
	}
		var animateDisc4 = function() {
		var cTime = new Date().getTime();
		var bottom = (10 + ((cTime - sTime)/1000) * 300);
		var animate = document.getElementById("mpic");
		animate.style.top = bottom + "px";
		if (bottom < 558) {
			window.requestAnimationFrame(animateDisc4);
		}
	}
	var animateDisc5 = function() {
		var cTime = new Date().getTime();
		var bottom = (10 + ((cTime - sTime)/1000) * 300);
		var animate = document.getElementById("mpic");
		animate.style.top = bottom + "px";
		if (bottom < 670) {
			window.requestAnimationFrame(animateDisc5);
		}
	}
//110, 223, 335, 448, 558, 670
	if (gameEnd.value != 1) {
	if (x == 1) {
		//var fir = document.getElementById("first");
		if (fir < 6) {
			check = true;
			down = fir;
			fir++;
		}
	}
	else if (x == 2) {
		//var sec = document.getElementById("second");
		if (sec < 6) {
			check = true;
			down = sec;
			sec++;
		}
	}
	else if (x == 3) {
		//var thi = document.getElementById("third");
		if (thi < 6) {
			check = true;
			down = thi;
			thi++;
		}
	}
	else if (x == 4) {
		//var fou = document.getElementById("fourth");
		if (fou < 6) {
			check = true;
			down = fou;
			fou++;
		}
	}
	else if (x == 5) {
		//var fif = document.getElementById("fifth");
		if (fif < 6) {
			check = true;
			down = fif;
			fif++;
		}
	}
	else if (x == 6) {
		//var six = document.getElementById("sixth");
		if (six < 6) {
			check = true;
			down = six;
			six++;
		}
	}
	else {
		//var sev = document.getElementById("seventh");
		if (sev < 6) {
			check = true;
			down = sev;
			sev++;
		}
	}
	if (((disc.value % 2) == 1) && check) {
		removeEvents();
		movein(x - 1);
		disc.innerHTML = "<h3>Player 1's Turn</h3>";
		disc.value++;

		if (down == 0) {
			animateDisc5();
			setTimeout(function() { move(x - 1); }, 2300);
			setTimeout(function() { moveout(x - 1); }, 2300);
			setTimeout(function() { addEvents(); }, 2300);
			setTimeout(function() { getWinner(); }, 2300);
		}
		else if (down == 1) {
			animateDisc4();
			setTimeout(function() { move(x - 1); }, 2000);
			setTimeout(function() { moveout(x - 1); }, 2000);
			setTimeout(function() { addEvents(); }, 2000);
			setTimeout(function() { getWinner(); }, 2000);
		}
		else if (down == 2) {
			animateDisc3();
			setTimeout(function() { move(x - 1); }, 1600);
			setTimeout(function() { moveout(x - 1); }, 1600);
			setTimeout(function() { addEvents(); }, 1600);
			setTimeout(function() { getWinner(); }, 1600);
		}
		else if (down == 3) {
			animateDisc2();
			setTimeout(function() { move(x - 1); }, 1300);
			setTimeout(function() { moveout(x - 1); }, 1300);
			setTimeout(function() { addEvents(); }, 1300);
			setTimeout(function() { getWinner(); }, 1300);
		}
		else if (down == 4) {
			animateDisc1();
			setTimeout(function() { move(x - 1); }, 900);
			setTimeout(function() { moveout(x - 1); }, 900);
			setTimeout(function() { addEvents(); }, 900);
			setTimeout(function() { getWinner(); }, 900);
		}
		else {
			animateDisc0();
			setTimeout(function() { move(x - 1); }, 500);
			setTimeout(function() { moveout(x - 1); }, 500);
			setTimeout(function() { addEvents(); }, 500);
			setTimeout(function() { getWinner(); }, 500);
		}
	}
	else if (check) {
		removeEvents();
		movein(x - 1);
		disc.innerHTML = "<h3>Player 2's Turn</h3>";
		disc.value++;

		if (down == 0) {
			animateDisc5();
			setTimeout(function() { move(x - 1); }, 2300);
			setTimeout(function() { moveout(x - 1); }, 2300);
			setTimeout(function() { addEvents(); }, 2300);
			setTimeout(function() { getWinner(); }, 2300);
		}
		else if (down == 1) {
			animateDisc4();
			setTimeout(function() { move(x - 1); }, 2000);
			setTimeout(function() { moveout(x - 1); }, 2000);
			setTimeout(function() { addEvents(); }, 2000);
			setTimeout(function() { getWinner(); }, 2000);
		}
		else if (down == 2) {
			animateDisc3();
			setTimeout(function() { move(x - 1); }, 1600);
			setTimeout(function() { moveout(x - 1); }, 1600);
			setTimeout(function() { addEvents(); }, 1600);
			setTimeout(function() { getWinner(); }, 1600);
		}
		else if (down == 3) {
			animateDisc2();
			setTimeout(function() { move(x - 1); }, 1300);
			setTimeout(function() { moveout(x - 1); }, 1300);
			setTimeout(function() { addEvents(); }, 1300);
			setTimeout(function() { getWinner(); }, 1300);
		}
		else if (down == 4) {
			animateDisc1();
			setTimeout(function() { move(x - 1); }, 900);
			setTimeout(function() { moveout(x - 1); }, 900);
			setTimeout(function() { addEvents(); }, 900);
			setTimeout(function() { getWinner(); }, 900);
		}
		else {
			animateDisc0();
			setTimeout(function() { move(x - 1); }, 500);
			setTimeout(function() { moveout(x - 1); }, 500);
			setTimeout(function() { addEvents(); }, 500);
			setTimeout(function() { getWinner(); }, 500);
		}
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

var Ai1=new left();
var Ai2=new randobot();
function moveAI() {
    // console.log(Ai2);
    update();
    Ai1=new left();
    Ai2=new randobot();
    //alert(Ai1.name);

  	var disc = document.getElementById("turns");
  	disc.innerHTML = "<h3>Ai Currently Playing.</h3>";

    // Move randomly until valid move found
    if (((disc.value % 2) == 1) /*&& check*/) {
      var game=board;
      while (!board.move(Ai1.m(game))) {}
      //move(Ai1.m(game));
      disc.innerHTML = "<h3>" + Ai1.name + "'s Turn</h3>";
      disc.value++;
      getWinner();
      update();
      update();
    }
    else {
      var game=board
      //var test = Ai2.m(game);
      while (!board.move(Ai2.m(game))) {}
      //move(Ai2.m(game));
      disc.innerHTML = "<h3>" + Ai2.name + "'s Turn</h3>";
      disc.value++;
      //getWinner();


      //     if (board.getState() != -1) {
			//
      //         //modified to make the frontend work
      // 		var disc = document.getElementById("turns");
      // 		if (board.getState() == 1) {
      // 			disc.innerHTML = "<h3>Game Over. "+Ai1.name+" Won.</h3>";
      // 			window.clearInterval(timer);
      // 		}
      // 		else if (board.getState() == 2) {
      // 			disc.innerHTML = "<h3>Game Over. "+Ai1.name+" Won.</h3>";
      // 			window.clearInterval(timer);
      // 		}
      // 		else {
      // 			disc.innerHTML = "<h3>Game Over. Game Tied.</h3>";
      // 			window.clearInterval(timer);
      // 		}
      // 		//var gameEnd = document.getElementById("resetboard");
      // 		//gameEnd.value = 1;
			// 				update();
      //         return;
      //     }
			//
			//
      // update();
    }
    if (disc.value == 42) {
      disc.innerHTML = "<h3>Game Over.</h3>";
    }
    //while (!board.move(getRandInt(0, 7))) {}
		if (board.getState() != -1) {

				//modified to make the frontend work
		var disc = document.getElementById("turns");
		if (board.getState() == 1) {
			disc.innerHTML = "<h3>Game Over. "+Ai1.name+" Won.</h3>";
			window.clearInterval(timer);
		}
		else if (board.getState() == 2) {
			disc.innerHTML = "<h3>Game Over. "+Ai1.name+" Won.</h3>";
			window.clearInterval(timer);
		}
		else {
			disc.innerHTML = "<h3>Game Over. Game Tied.</h3>";
			window.clearInterval(timer);
		}
		//var gameEnd = document.getElementById("resetboard");
		//gameEnd.value = 1;
				update();
				return;
		}

update();
update();

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

function movesia(e) {
	movein(0);
}

function movesoa(e) {
	moveout(0);
}

function movesib(e) {
	movein(1);
}

function movesob(e) {
	moveout(1);
}

function movesic(e) {
	movein(2);
}

function movesoc(e) {
	moveout(2);
}

function movesid(e) {
	movein(3);
}

function movesod(e) {
	moveout(3);
}

function movesie(e) {
	movein(4);
}

function movesoe(e) {
	moveout(4);
}

function movesif(e) {
	movein(5);
}

function movesof(e) {
	moveout(5);
}

function movesig(e) {
	movein(6);
}

function movesog(e) {
	moveout(6);
}

function addEvents() {
	var gameEnd = document.getElementById("resetboard");
	gameEnd.onclick = reset;
	for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 7; j++) {
            var cellname = document.getElementById("cell" + i + j);
			if (j == 0) {
				var a = 0;
				cellname.addEventListener("mousemove", movesia);
				cellname.addEventListener("mouseout", movesoa);
				cellname.onclick = function (e) { dropDisc(1);};
			}
			if (j == 1) {
				var b = 1;
				cellname.addEventListener("mousemove", movesib);
				cellname.addEventListener("mouseout", movesob);
				cellname.onclick = function (e) { dropDisc(2);};
			}
			if (j == 2) {
				var c = 2;
				cellname.addEventListener("mousemove", movesic);
				cellname.addEventListener("mouseout", movesoc);
				cellname.onclick = function (e) { dropDisc(3);};
			}
			if (j == 3) {
				var d = 3;
				cellname.addEventListener("mousemove", movesid);
				cellname.addEventListener("mouseout", movesod);
				cellname.onclick = function (e) { dropDisc(4);};
			}
			if (j == 4) {
				var e = 4;
				cellname.addEventListener("mousemove", movesie);
				cellname.addEventListener("mouseout", movesoe);
				cellname.onclick = function (e) { dropDisc(5);};
			}
			if (j == 5) {
				var f = 5;
				cellname.addEventListener("mousemove", movesif);
				cellname.addEventListener("mouseout", movesof);
				cellname.onclick = function (e) { dropDisc(6);};
			}
			if (j == 6) {
				var g = 6;
				cellname.addEventListener("mousemove", movesig);
				cellname.addEventListener("mouseout", movesog);
				cellname.onclick = function (e) { dropDisc(7);};
			}
		}
	}
}

function removeEvents() {
	var gameEnd = document.getElementById("resetboard");
	gameEnd.onclick = "";
	for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 7; j++) {
            var cellname = document.getElementById("cell" + i + j);
			if (j == 0) {
				var a = 0;
				cellname.removeEventListener("mousemove", movesia);
				cellname.removeEventListener("mouseout", movesoa);
				cellname.onclick = "";
			}
			if (j == 1) {
				var b = 1;
				cellname.removeEventListener("mousemove", movesib);
				cellname.removeEventListener("mouseout", movesob);
				cellname.onclick = "";
			}
			if (j == 2) {
				var c = 2;
				cellname.removeEventListener("mousemove", movesic);
				cellname.removeEventListener("mouseout", movesoc);
				cellname.onclick = "";
			}
			if (j == 3) {
				var d = 3;
				cellname.removeEventListener("mousemove", movesid);
				cellname.removeEventListener("mouseout", movesod);
				cellname.onclick = "";
			}
			if (j == 4) {
				var e = 4;
				cellname.removeEventListener("mousemove", movesie);
				cellname.removeEventListener("mouseout", movesoe);
				cellname.onclick = "";
			}
			if (j == 5) {
				var f = 5;
				cellname.removeEventListener("mousemove", movesif);
				cellname.removeEventListener("mouseout", movesof);
				cellname.onclick = "";
			}
			if (j == 6) {
				var g = 6;
				cellname.removeEventListener("mousemove", movesig);
				cellname.removeEventListener("mouseout", movesog);
				cellname.onclick = "";
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

function alphabeta(game, depth, a, b) {

	// If game is over
	var gameState = game.getState();
	if (gameState != -1) {
		if (gameState == 1) {
			return -1;
		} else if (gameState == 2) {
			return 1;
		} else {
			return 0;
		}
	}

	// If max search depth has been reached
	if (depth == 0) {
		return 0;
	}

	var potentialMoves = getPossibleMoves(game);

	// If maximizing player
	if (game.turn == 2) {
		var v = -Infinity;
		for (var i = 0; i < potentialMoves.length; i++) {
			var element = potentialMoves[i];

			var gameCopy = game.getCopy();
			gameCopy.move(element);

			var gameScore = alphabeta(gameCopy, depth - 1, a, b);
			v = Math.max(v, gameScore);
			a = Math.max(a, v);

			if (b <= a) {
				break;
			}
		}
		return v;
	} else {
		var v = Infinity;
		for (var i = 0; i < potentialMoves.length; i++) {
			var element = potentialMoves[i];

			var gameCopy = game.getCopy();
			gameCopy.move(element);

			var gameScore = alphabeta(gameCopy, depth - 1, a, b);
			v = Math.min(v, gameScore);
			b = Math.min(b, v);

			if (b <= a) {
				break;
			}
		}
		return v;
	}
}

function getNextMove(game, depth, randomize) {
	var potentialMoves = getPossibleMoves(game);
	var moveScores = [];

	potentialMoves.forEach(function(element) {
	    var gameCopy = game.getCopy();
		gameCopy.move(element);
		var moveScore = alphabeta(gameCopy, depth - 1, -Infinity, Infinity);
		moveScores.push(moveScore);
	});

	if (potentialMoves.length != moveScores.length) {
		console.log("ERROR: potentialMoves does not correspond with moveScores");
	}

	var bestScore;

	if (game.turn == 1) {
		// return potentialMoves[moveScores.indexOf(Math.min(...moveScores))];
		bestScore = Math.min(...moveScores);
	} else {
		// return potentialMoves[moveScores.indexOf(Math.max(...moveScores))];
		bestScore = Math.max(...moveScores);
	}

	var bestMoves = []
	for (var i = 0; i < potentialMoves.length; i++) {
		if (moveScores[i] == bestScore) {
			bestMoves.push(potentialMoves[i]);
		}
	}

	if (randomize) {
		return bestMoves[getRandInt(0, bestMoves.length)];
	} else {
		return bestMoves[0];
	}
}

function getNextMove_StrongAI(game) {
	return getNextMove(game, 4, true);
}

function getNextMove_WeakAI(game) {
	return getNextMove(game, 1, true);
}

function faceOff(rounds, AI1_move_function, AI2_move_function) {
	var ai1WinCount = 0;
	var ai2WinCount = 0;
	var tieCount = 0;
	for (var i = 0; i < rounds; i++) {
		var g = new Game(true);
		while(true) {
			if (g.getState() != -1) {
				break;
			}

			if (g.turn == 1) {
				g.move(AI1_move_function(g));
			} else {
				g.move(AI2_move_function(g));
			}
		}

		if (g.getState() == 1) {
			ai1WinCount += 1;
		} else if (g.getState() == 2) {
			ai2WinCount += 1;
		} else if (g.getState() == 0) {
			tieCount += 1;
		} else {
			console.log("ERROR: game not over");
		}
	}

	var outArr = [ai1WinCount, ai2WinCount, tieCount];
	return outArr;
}
