/**
* Creates a game board.
*/
var coin=getRandInt(0,2);
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
	var turn = '</button><button class="button" value="0" id="turns"><h3>Player 1\'s Turn</h3></button>';
	if(coin){
		turn = '</button><button class="button" value="1" id="turns"><h3>Player 2\'s Turn</h3></button>';
	}else {
		turn = '</button><button class="button" value="0" id="turns"><h3>Player 1\'s Turn</h3></button>';
	}
	var resetb = '<br><center><button id="resetboard" value="0" onclick="reset()">Reset Board.</button><br></center>';
	var choice = '<form onsubmit="Create()"><h2>What mode would you like to play?</h2><br><fieldset id="q1"><h4><input name="q1" value="1" id="A" type="radio"> A. Player vs Ai<br><input name="q1" value="2" id="B" type="radio" checked="checked"> B. 2 players<br><input name="q1" value="3" id="C" type="radio"> C. Ai vs Ai<br></h4></fieldset><br><input type="submit" name="submit" value="Submit.">	</form>';

	var gameMode = 0;
	if (picked == 1) {
		document.body.innerHTML = '<center><h3 id="1A">You picked Player vs Random Ai.</h3>' + turn + '</center>';
		gameMode = 1;
	}
	else if (picked == 2) {
		document.body.innerHTML = '<center><h3 id="PP">You picked Player vs Player.</h3>' + turn + '</center>';
		gameMode = 2;
	}
	else if (picked == 3) {
		document.body.innerHTML = '<center><h3 id="AR">You picked Random Ai vs Random Ai.</h3>' + turn + '</center>';
		gameMode = 3;
	}
	else if (picked == 4) {
		document.body.innerHTML = '<center><h3 id="AS">You picked Player vs TreeBot Ai.</h3>' + turn + '</center>';
		gameMode = 4;
	}
	else if (picked == 5) {
		document.body.innerHTML = '<center><h3 id="RS">You picked Random Ai vs TreeBot Ai.</h3>' + turn + '</center>';
		gameMode = 5;
	}
	else if (picked == 6) {
		document.body.innerHTML = '<center><h3 id="SS">You picked TreeBot Ai vs TreeBot Ai.</h3>' + turn + '</center>';
		gameMode = 6;
	}
	else if (picked == 7) {
		document.body.innerHTML = '<center><h3 id="AC">You picked Player vs Custom Ai.</h3>' + turn + '</center>';
		gameMode = 7;
	}

	if (gameMode != 3 && gameMode != 5 && gameMode != 6) {
		var tableA = document.createElement("table");
		tableA.className = "vanish";
		tableA.id = "Table1";
		var rowA = tableA.insertRow(-1);
		for (var j = 0; j < 7; j++) {
			var id = "n" + j;
			var id1 = "b" + j;
			var id2 = "r" + j;
			var cellA = rowA.insertCell(-1);
			cellA.className = "vanish";
			var id3 = "top" + j;
			cellA.id = id3;
		}
	}

	if (gameMode == 1 || gameMode == 4) {
		var tableE = document.createElement("table");
		tableE.className = "main";
		tableE.id = "Table";
		for (var i = 0; i < 6; i++) {
			var row = tableE.insertRow(-1);
			for (var j = 0; j < 7; j++) {
				var id = "n" + i + j;
				var id1 = "b" + i + j;
				var id2 = "r" + i + j;
				var k = j + 1;
				var cell1 = row.insertCell(-1);
				cell1.className = "main";
				var id3 = "cell" + i + j;
				cell1.id = id3;
			}
		}
	}
	else {
		var tableE = document.createElement("table");
		tableE.className = "main";
		tableE.id = "Table";
		for (var i = 0; i < 6; i++) {
			var row = tableE.insertRow(-1);
			for (var j = 0; j < 7; j++) {
				var id = "n" + i + j;
				var id1 = "b" + i + j;
				var id2 = "r" + i + j;
				var k = j + 1;
				var cell1 = row.insertCell(-1);
				cell1.className = "main";
				var id3 = "cell" + i + j;
				cell1.id = id3;
			}
		}
	}

	if (gameMode != 3 && gameMode != 5 && gameMode != 6) {
		document.body.appendChild(tableA);
	}

	document.body.appendChild(tableE);

	if (gameMode == 1) {
		document.body.innerHTML += resetb;
		addEvents();
		addAiEvent();
	}
	else if (gameMode == 2) {
		document.body.innerHTML += resetb;
		addEvents();
		addPlayerEvent();
	}
	else if (gameMode == 3) {
		//RandomAivsRandomAi();
		AivsAi("rando","rando");
	}
	else if (gameMode == 4) {
		document.body.innerHTML += resetb;
		addEvents();
		addAi1Event();
	}
	else if (gameMode == 5) {
		//RandomAivstreeBotAi();
		AivsAi("rando","tree");

	}
	else if (gameMode == 6) {
		//treeBotAivstreeBotAi();
		AivsAi("tree","tree");
	}
	else if (gameMode == 7) {

	}

}
