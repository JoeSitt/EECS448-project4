/**
* Creates a game board.
*/
function Create() {
	//var choice = document.getElementsByName("q1");
	//var picked;
	var s1 = parseInt(document.getElementById("Select1").value);
	var s2 = parseInt(document.getElementById("Select2").value);
	/*for (var i = 0; i < choice.length; i++) {
		if (choice[i].checked) {
			picked = choice[i].value;
			break;
		}
	}*/
	var turn = '</button><button class="button" value="0" id="turns"><h3>Player 1\'s Turn</h3></button>';
	var resetb = '<br><center><button id="resetboard" value="0" onclick="reset()">Reset Board.</button><br></center>';
	var resetbx = '<br><center><button id="resetboard" value="0" onclick="resetx()">Reset Board.</button><br></center>';
		
	var gameMode = 0;
	document.body.innerHTML = '<center>' + turn + '</center>';
	if ((s1 + s2) < 10) {
		gameMode = 1;
		
	}
	else if ((s1 + s2) == 20) {
		gameMode = 2;
	}
	else if ((s1 + s2) > 10) {
		gameMode = 3;
	}
	/*else if (picked == 7) {
		document.body.innerHTML = '<center><h3 id="AC">You picked Player vs Custom Ai.</h3>' + turn + '</center>';
		gameMode = 7;
	}*/

	if (gameMode != 1) { 
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
		
	if (gameMode != 1) {
		document.body.appendChild(tableA);
	}
	
	document.body.appendChild(tableE);

	if (gameMode == 1) { 
		selectAi(s1 - 1, s2 - 1);
	}
	else if (gameMode == 2) {
		document.body.innerHTML += resetb;
		addEvents();
		addPlayerEvent();
	}
	else if (gameMode == 3) {
		document.body.innerHTML += resetbx;
		if (s1 == 10) {
			addEvents();
			if (s2 == 2) {
				addAiEvent();
			}
			if (s2 == 3) {
				addAi1Event();
			}
			if (s2 == 4) {
				addAi2Event();
			}
		}
		else if (s2 == 10) {
			addEvents1();
			if (s1 == 2) {
				addAiEvent();
				moveRandom(2);
			}
			if (s1 == 3) {
				addAi1Event();
				moveTree(2);
			}
			if (s1 == 4) {
				addAi2Event();
				moveStrongTree(2);
			}

		}
		
	}	

}