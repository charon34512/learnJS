var ruch = "X";

var board = new Array(9);
for ( i=0; i<9; i++ ) {
	board[i] = "";
}

window.onload = start;

function start() {
	var tresc_komunikatu = "";
	
	for (i=0; i<9; i++) {
		var element = "tab" + i;
		tresc_komunikatu += '<div class="pole" onclick="dodaj('+i+')" id="'+element+'">'+board[i]+'</div>';
		
		if ((i+1)  % 3 == 0) {
			tresc_komunikatu += '<div style="clear:both"></div>';
		}
	}
	
	document.getElementById("plansza").innerHTML = tresc_komunikatu;
	document.getElementById("gora").innerHTML = "Ruch gracza " + ruch;
	
}

function dodaj(nr) {
	
	var element = "tab" + nr;
	
	if (board[nr] == "" && ruch == "X") {
		board[nr] = ruch;
		
		if (wygrana(ruch)) {
			document.getElementById("dol").innerHTML = 'Wygrał ' + ruch + '<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
			for (i=0; i<9; i++) {
				document.getElementById( "tab" + i ).setAttribute( "onclick", ";" ) //dezaktywuje onclicka
				document.getElementById( "tab" + i ).style.cursor = "default"; // defultowy kursor
			}
		}
		else if ((board.indexOf("")) == -1 ) {
			document.getElementById("dol").innerHTML = 'Remis <br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
		}
		
		ruch = "O";
	}
	else if (board[nr] == "" && ruch == "O") {
		board[nr] = ruch;
		
		if (wygrana(ruch)) {
			document.getElementById("dol").innerHTML = 'Wygrał ' + ruch + '<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
			for (i=0; i<9; i++) {
				document.getElementById( "tab" + i ).setAttribute( "onclick", ";" ) //dezaktywuje onclicka
			}
		}
		else if ((board.indexOf("")) == -1 ) {
			document.getElementById("dol").innerHTML = 'Remis <br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'; //location.reload() przeladowuje strone
		}
		
		ruch = "X";
	}
	document.getElementById("gora").innerHTML = "Ruch gracza " + ruch;
	
	document.getElementById(element).innerHTML = board[nr];
	document.getElementById(element).style.cursor = "default";
	
}

function wygrana(n) {
	return ((board[0] == n && board[1] == n && board[2] == n ) ||
			(board[3] == n && board[4] == n && board[5] == n ) ||
			(board[6] == n && board[7] == n && board[8] == n ) ||
			(board[0] == n && board[4] == n && board[8] == n ) ||
			(board[2] == n && board[4] == n && board[6] == n ) ||
			(board[0] == n && board[3] == n && board[6] == n ) ||
			(board[1] == n && board[4] == n && board[7] == n ) ||
			(board[2] == n && board[5] == n && board[8] == n ))
}