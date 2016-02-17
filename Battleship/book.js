var alphabet = ["A","B","C","D","E","F","G"];
var boxs = document.getElementsByClassName('box');
var table = [];

var view = {

	displayMessage: function(msg){
		var messageArea = document.getElementById('message');
		messageArea.innerHTML = msg;
	},
	displayHit: function(id){
		var cell = boxs[id];
		cell.className += ' hit';
	},
	displayMiss: function(id){
		var cell = boxs[id]
		cell.className += ' miss';
	}
}


var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipSunk: 0,

	ships: [{ locations: [], hits: ['','','']},
			{ locations: [], hits: ['','','']},
			{ locations: [], hits: ['','','']}],

	fire: function(guess){

		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			var index = ship.locations.indexOf(guess);
			
			if ( index >= 0 ){
				ship.hits[index] = "hit";
				view.displayHit(guess);
				view.displayMessage("Hit!!!")
				if (this.isSunk(ship)){
					this.shipSunk++;
				}
				return true;
			}
		view.displayMiss(guess);
		view.displayMessage("You missed.");
		return false;
		}
	},

	isSunk: function(ship) {
		for (var i = 0; i < this.shipLength; i++) {
			if ( ship.hits[i] !== 'hit' ){
			return false;
			}
		return true;
		}
	},

	collision: function(){
		for ( var i = 0; i < this.numShips; i++){
			var ship = model.ships[i];
			for ( var j = 0; j < 3; j++){
				if ( ship.locations.indexOf(locations[j]) >= 0){
					return true;
				}
			}
		}
		return false;
}

};

var controller = {
	guesses: 0,
	processGues: function(guess){
		if (parseGuess(guess)){
			this.guesses++;
			var location = table.indexOf(parseGuess(guess));
			console.log(location);
			var hit = model.fire(location)
		}
	}
}








function parseGuess(guess){		
	if (guess === null || guess.length !== 2) {
			alert("Oops wrong value");
	}
	else {
		var firstChar = guess.charAt(0);
		var row = alphabet.indexOf(firstChar);
		var column = guess.charAt(1);

		if ( isNaN(row) || isNaN(column)){
			alert("That wrong!")
		}
		else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize){
			alert("Opps wrong!!")
		}
		else {
			return firstChar + column;
		}
	}
return null;
}




function createTable(){
	var nums = [0,1,2,3,4,5,6];
	for (var i = 0; i < alphabet.length; i++) {
		for (var j = 0; j < nums.length; j++) {
			table.push(alphabet[i] + nums[j])
		}
	}
}
createTable()



var control = [ 6,7, 13,14, 20,21, 27,28, 34,35, 41,42, 48,49 ]

function randomShip(){
	for ( i = 0; i < model.numShips; i++ ){
		var ship = model.ships[i];
		var random = Math.floor(Math.random()*49);
		for (var j = 0; j < control.length; j++) {
			if ( random === control[j] ){
				j = 0;
				random = Math.floor(Math.random()*49);
			}
		}
		ship.locations.push(random);
		ship.locations.push(random + 1);
		ship.locations.push(random + 2);
		console.log(ship.locations)
	} 
}
randomShip();




// controller.processGues("C2");
// controller.processGues("D2");
// controller.processGues("E2");
// controller.processGues("F2");
// controller.processGues("G2");
// controller.processGues("A2");
// controller.processGues("C5");
// controller.processGues("D5");
// controller.processGues("E5");
// controller.processGues("F5");
// controller.processGues("G5");
// controller.processGues("A5");
// console.log(model.ships);