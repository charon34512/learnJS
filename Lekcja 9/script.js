var levels = [
['Nice Job!', 'Next Level: 2'],
['Excellent Clicking', 'Nexe Level: 3'], 
['That was Awesome', 'Next Level: 4'],
['Man are you good!', 'Next Level: 5'],
['Boom', 'Next Level: 6'], 
['You are pro!', 'Next Level: 7'], 
['Unbelieble!', 'Next Level: 8'], 
['Insanity!', 'Next Level: 9'], 
['You are on fire!','Next Level: 10'], 
['That was craze', 'Next Level: 11'],
['You are blowing my mind', 'Next Level: 12'],
['WINNER !', 'Holy cow! You won the whole freaking thing!']]



var circle = document.getElementById('circle');
var div = document.getElementById('div');
var text = document.getElementsByClassName('text');


circle.addEventListener('click', function(){
	circle.style.display ='none';
	div.style.display = 'block'
	circle.style.animationDuration = timer() + "ms";
	setTimeout(function(){
		circle.style.display = "block";
		div.style.display = "none";
	}, 3000);	
	game();
	add();

})

var num = 0;
function add(){
	num += 1;
	return num;
}
var time = 2500;
function timer(){
	time-= 200
	return time
}

function game (){
	for (var i = 0; i < levels.length; i++) {
		if(i == num){
			text[0].innerHTML = levels[i][0];
			text[1].innerHTML = levels[i][1];
		}
	}
}

		





























