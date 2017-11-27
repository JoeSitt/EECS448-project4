/**
* Create's game board.
*/
var picked;
function Create() {
	var choice = document.getElementsByName("q1");
	qchoice = document.getElementsByName("q1");
	for (var i = 0; i < choice.length; i++) {
		if (choice[i].checked) {
			picked = choice[i].value;
			break;
		}
	}
	var qchoice;
	var buttons = '<br><center><button id="first" value="0" onclick="dropDisc(1)">First Column.</button><button id="second" value="0" onclick="dropDisc(2)">Second Column.</button><button id="third" value="0" onclick="dropDisc(3)">Third Column.</button><button id="fourth" value="0" onclick="dropDisc(4)">Fourth Column.</button><button id="fifth" value="0" onclick="dropDisc(5)">Fifth Column.</button><button id="sixth" value="0" onclick="dropDisc(6)">Sixth Column.</button><button id="seventh" value="0" onclick="dropDisc(7)">Seventh Column.</button><br><br><button id="resetboard" value="0" onclick="reset()">Reset Board.</button><br></center>';
	var buttons1 = '<br><center><button id="first" value="0" onclick="fightAi(1)">First Column.</button><button id="second" value="0" onclick="fightAi(2)">Second Column.</button><button id="third" value="0" onclick="fightAi(3)">Third Column.</button><button id="fourth" value="0" onclick="fightAi(4)">Fourth Column.</button><button id="fifth" value="0" onclick="fightAi(5)">Fifth Column.</button><button id="sixth" value="0" onclick="fightAi(6)">Sixth Column.</button><button id="seventh" value="0" onclick="fightAi(7)">Seventh Column.</button><br><br><button id="resetboard" value="0" onclick="reset()">Reset Board.</button><br></center>';
	//var resetbutton = '<br><center><div id="first" value="0" onclick="dropDisc(1)"></div><div id="second" value="0" onclick="dropDisc(2)"></div><div id="third" value="0" onclick="dropDisc(3)"></div><div id="fourth" value="0" onclick="dropDisc(4)"></div><div id="fifth" value="0" onclick="dropDisc(5)"></div><div id="sixth" value="0" onclick="dropDisc(6)"></div><div id="seventh" value="0" onclick="dropDisc(7)"></div><br><br><button id="resetboard" value="0" onclick="reset()">Reset Board.</button><br></center>';
	//var resetbutton1 = '<br><center><div id="first" value="0" onclick="fightAi(1)"></div><div id="second" value="0" onclick="fightAi(2)"></div><div id="third" value="0" onclick="fightAi(3)"></div><div id="fourth" value="0" onclick="fightAi(4)"></div><div id="fifth" value="0" onclick="fightAi(5)"></div><div id="sixth" value="0" onclick="fightAi(6)"></div><div id="seventh" value="0" onclick="fightAi(7)"></div><br><br><button id="resetboard" value="0" onclick="reset()">Reset Board.</button><br></center>';
	var turn = '</button><button class="button" value="0" id="turns"><h3>Player 1\'s Turn</h3></button>';
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
		document.body.innerHTML = '<center><h3 id="AA">You picked Random Ai vs Random Ai.</h3>' + turn + '</center>';
		gameMode = 3;
	}
	else if (picked == 4) {
		document.body.innerHTML = '<center><h3 id="AA">You picked Player vs Strong Ai.</h3>' + turn + '</center>';
		gameMode = 1;
	}
	else if (picked == 5) {
		document.body.innerHTML = '<center><h3 id="AA">You picked Random Ai vs Strong Ai.</h3>' + turn + '</center>';
		gameMode = 3;
	}
	else if (picked == 6) {
		document.body.innerHTML = '<center><h3 id="AA">You picked Strong Ai vs Strong Ai.</h3>' + turn + '</center>';
		gameMode = 3;
	}
	else if (picked == 7) {
		document.body.innerHTML = '<center><h3 id="AA">You picked Player vs Custom Ai.</h3>' + turn + '</center>';
		gameMode = 1;
	}

	//var row = document.createElement("tr");
	//document.getElementById("tableE").appendChild(row);
	if (gameMode != 3) {
	var tableA = document.createElement("table");
	tableA.className = "vanish";
	tableA.id = "Table1";
	var rowA = tableA.insertRow(-1);
	for (var j = 0; j < 7; j++) {
		var id = "n" + j;
		var id1 = "b" + j;
		var id2 = "r" + j;
		//var b = '<img height="100" width="100" hidden="1" id="' + id + '">' + '<img src="lblue.png" height="100" width="100" hidden="1" id="' + id1 + '">' + '<img src="lblue.png" height="100" width="100" hidden="1" id="' + id2 + '">';
		var cellA = rowA.insertCell(-1);
		cellA.className = "vanish";
		var id3 = "top" + j;
		cellA.id = id3;
		//cellA.innerHTML = b;
	}
	}
	if (gameMode == 1) {
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
				//var b = '<img onclick="fightAi('+k+')" src="lblue.png" height="100" width="100" id="' + id + '">' + '<img onclick="fightAi('+k+')" src="bdot.png" height="100" width="100" hidden="1" id="' + id1 + '">' + '<img onclick="fightAi('+k+')" src="reddot.png" height="100" width="100" hidden="1" id="' + id2 + '">';
				var cell1 = row.insertCell(-1);
				//cell1.onclick =
				cell1.className = "main";
				//cell1.onclick = fightAi(j);
				var id3 = "cell" + i + j;
				cell1.id = id3;
				//cell1.innerHTML = b;
			}
		}
	}
	else {

	/*var imge = document.createElement("img");
	imge.src = "";
	imge.height = "50";
	imge.width = "50";
	imge1.hidden = "1";*/

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
			var b = '<img onclick="dropDisc('+k+')" src="lblue.png" height="100" width="100" id="' + id + '">' + '<img onclick="dropDisc('+k+')" src="bdot.png" height="100" width="100" hidden="1" id="' + id1 + '">' + '<img onclick="dropDisc('+k+')" src="reddot.png" height="100" width="100" hidden="1" id="' + id2 + '">';
			var cell1 = row.insertCell(-1);
			cell1.className = "main";
			//cell1.onclick = function (e) { dropDisc(k);};
			var id3 = "cell" + i + j;
			cell1.id = id3;
			//cell1.innerHTML = b; ------------
			//cell1.onclick = dropDisc(k);
			//cell1.appendChild(imge1);
			//cell1.appendChild(imge2);
		}
	}
	}
	if (gameMode != 3) {
	document.body.appendChild(tableA);
	}
	document.body.appendChild(tableE);

	//var topscript = document.createElement("script");
	//topscript.setAttribute("src", "topbar.js");
	if (gameMode == 1) {
		document.body.innerHTML += resetb;
		//document.body.appendChild(topscript);
		addEvents();
		addAiEvent();
	}
	else if (gameMode == 2) {
		document.body.innerHTML += resetb;
		//document.body.appendChild(topscript);
		addEvents();
		addPlayerEvent();
	}
	else {
		/*for (var i = 0; i < 42; i++) {
			(function (i) {
				setTimeout(moveRandom, 1000*i);
			})(i);
		}*/
		if (qchoice==4) {
			Ai1=new randobot();
			Ai2=new randobot();
		}else if (qchoice==5) {
			Ai1=new randobot();
			Ai2=new treeBot();
		}else if (qchoice==6) {
			Ai1=new treeBot();
			Ai2=new treeBot();
		}
		AivsAi();
	}

}
