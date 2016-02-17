var boxs = document.getElementsByClassName('box');
var input = document.getElementsByTagName('input');
var array = ["a","b","c","d","e","f","g"];
var numbs = [0,1,2,3,4,5,6];
var position = [];
var table = [];
var ship = ['c3', 'd5', 'f2'];

input[1].addEventListener('click', function(){	
	if (validation()){
		position = input[0].value;
		match();
		input[0].value = '';
	}
	else {
		input[0].value = "Type correct value";
	}

});

function validation() {
	var text = input[0].value.split("");
	if(input[0].value.length > 2){
		return false
	}
		for (var i = 0; i < array.length; i++){
			for ( var j = 0; j < numbs.length; j++){
				if( text[0] === array[i] & text[1] == numbs[j]){
					return true;
				}
			}
		}
	return false;
}

function match(){
	var newDiv = document.createElement("DIV");
	for(var i = 0; i < table.length; i++){
		for (var i = 0; i < boxs.length; i++) {
			if( position === table[i]){
				if (position === ship[0] || position === ship[1] || position === ship[2]){
					boxs[i].className += ' hit';
				}
				else {
					boxs[i].className += ' miss';
				}
			}	
		}
	}
}

function createMatrix(){
	for (var i = 0; i < array.length; i++){
		for ( var j = 0; j < numbs.length; j++){
			table.push(array[i] + numbs[j]);
		}
	}	
}
createMatrix();

