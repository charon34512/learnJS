var buttons = document.getElementsByClassName('btn');
var images = document.getElementsByClassName('img');
var result = document.getElementById('result');
var userChoice = "";
var computerChoice = "";

var seconds = 2;
var second = 0;




for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function(){
	userChoice = this.innerHTML;
	images[0].src = "left_fist.png";
	images[1].src = "right_fist.png";
	result.innerHTML = 3
	for (var j = 0; j < images.length; j++) {
		images[j].style.animation = 'move 3s';
	};
	var start = setInterval(function(){
		result.innerHTML = (seconds - second);
		second++;
		if ( seconds == second){
		clearInterval(start);
		second = 0;
		}
	}, 1000);

	setTimeout(function() {
		user(images[1]);
		computer(images[0]);
		outcome();
		clear();
	}, 3000);

	});
}

function clear () {
	for (var i = 0; i < images.length; i++) {
		images[i].style.animation = "";
	};
}
function user(element) {
	if ( userChoice == "paper"){
		element.src = "paper.png";
	}
	else if ( userChoice == 'scissors') {
		element.src = "scissors.jpg";
	}
	else {
		element.src = "rock.png";
	}
}
function computer(element) {
	var random = Math.random()
	if ( random < 0.33){
		element.src = 'paper.png';
		computerChoice = "paper";
	}
	else if ( random < 0.66) {
		element.src = 'scissors.jpg';
		computerChoice = "scissors";
	}
	else {
		element.src = 'rock.png'
		computerChoice = 'rock';
	}
}
function outcome(){
	if ( userChoice == computerChoice ){
		result.innerHTML = "Tie! :)"
	}
	else if ( userChoice == 'rock' ) {
		if ( computerChoice == 'scissors') {
			result.innerHTML = "You win!";
		}
		else {
			result.innerHTML = "You lose!"
		}
	}
	else if ( userChoice == 'paper') {
		if ( computerChoice == 'rock') {
			result.innerHTML = "You win!";
		}
		else {
			result.innerHTML = "You lose!"
		}
	}
	else if ( userChoice == 'scissors') {
		if ( computerChoice == 'paper') {
			result.innerHTML = "You win!"
		}
		else {
			result.innerHTML = "You lose!"
		}
	}

}









