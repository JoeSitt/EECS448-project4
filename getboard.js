/**
* Create's game board.
*/
function Create() {
	var choice = document.getElementsByName("q1");
	var picked;
	for (var i = 0; i < choice.length; i++) {
		if (choice[i].checked) {
			picked = choice[i].value;
			break;
		}
	}
	var buttons = '<br><center><button id="first" value="0" onclick="dropDisc(1)">First Column.</button><button id="second" value="0" onclick="dropDisc(2)">Second Column.</button><button id="third" value="0" onclick="dropDisc(3)">Third Column.</button><button id="fourth" value="0" onclick="dropDisc(4)">Fourth Column.</button><button id="fifth" value="0" onclick="dropDisc(5)">Fifth Column.</button><button id="sixth" value="0" onclick="dropDisc(6)">Sixth Column.</button><button id="seventh" value="0" onclick="dropDisc(7)">Seventh Column.</button><br><br><button id="resetboard" value="0" onclick="reset()">Reset Board.</button><br></center>';
	var buttons1 = '<br><center><button id="first" value="0" onclick="fightAi(1)">First Column.</button><button id="second" value="0" onclick="fightAi(2)">Second Column.</button><button id="third" value="0" onclick="fightAi(3)">Third Column.</button><button id="fourth" value="0" onclick="fightAi(4)">Fourth Column.</button><button id="fifth" value="0" onclick="fightAi(5)">Fifth Column.</button><button id="sixth" value="0" onclick="fightAi(6)">Sixth Column.</button><button id="seventh" value="0" onclick="fightAi(7)">Seventh Column.</button><br><br><button id="resetboard" value="0" onclick="reset()">Reset Board.</button><br></center>';
	var turn = '</button><button class="button" value="0" id="turns"><h3>Player 1\'s Turn</h3></button><br>';
	var choice = '<form onsubmit="Create()"><h2>What mode would you like to play?</h2><br><fieldset id="q1"><h4><input name="q1" value="1" id="A" type="radio"> A. Player vs Ai<br><input name="q1" value="2" id="B" type="radio" checked="checked"> B. 2 players<br><input name="q1" value="3" id="C" type="radio"> C. Ai vs Ai<br></h4></fieldset><br><input type="submit" name="submit" value="Submit.">	</form>';
	var gameMode = 0;
	if (picked == 1) {
		document.body.innerHTML = '<center><h3 id="1A">You picked Player vs Ai.</h3>' + turn + '</center>';
		gameMode = 1;
	}
	else if (picked == 2) {
		document.body.innerHTML = '<center><h3 id="PP">You picked Player vs Player.</h3>' + turn + '</center>';
		gameMode = 2;
	}
	else {
		document.body.innerHTML = '<center><h3 id="AA">You picked Ai vs Ai.</h3>' + turn + '</center>';
		gameMode = 3;
	}

	//var row = document.createElement("tr");
	//document.getElementById("tableE").appendChild(row);
	var tableE = document.createElement("table");
	tableE.style.border = "1px solid black";
	tableE.id = "Table";
	/*var imge = document.createElement("img");
	imge.src = "https://people.eecs.ku.edu/~j024s900/project3/nodot.png";
	imge.height = "50";
	imge.width = "50";

	var imge1 = document.createElement("img");
	imge1.src = "https://people.eecs.ku.edu/~j024s900/project3/bdot.png";
	imge1.height = "50";
	imge1.width = "50";
	imge1.hidden = "1";

	var imge2 = document.createElement("img");
	imge2.src = "https://people.eecs.ku.edu/~j024s900/project3/reddot.png";
	imge2.height = "50";
	imge2.width = "50";
	imge2.hidden = "1";*/

	for (var i = 0; i < 6; i++) {
		var row = tableE.insertRow(-1);
		for (var j = 0; j < 7; j++) {
			var id = "n" + i + j;
			var id1 = "b" + i + j;
			var id2 = "r" + i + j;
			var b = '<img src="https://people.eecs.ku.edu/~j024s900/project3/nodot.png" height="100" width="100" id="' + id + '">' + '<img src="https://people.eecs.ku.edu/~j024s900/project3/bdot.png" height="100" width="100" hidden="1" id="' + id1 + '">' + '<img src="https://people.eecs.ku.edu/~j024s900/project3/reddot.png" height="100" width="100" hidden="1" id="' + id2 + '">';
			var cell1 = row.insertCell(-1);
			cell1.style.border = "1px solid black";
			cell1.innerHTML = b;
			//cell1.appendChild(imge1);
			//cell1.appendChild(imge2);
		}
	}
	document.body.appendChild(tableE);

	if (gameMode == 1) {
		document.body.innerHTML += buttons1;
	}
	else if (gameMode == 2) {
		document.body.innerHTML += buttons;
	}
	else {
		for (var i = 0; i < 42; i++) {
			(function (i) {
				setTimeout(moveRandom, 1000*i);
			})(i);
		}
	}

}
