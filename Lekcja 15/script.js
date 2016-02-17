var div = document.getElementsByClassName('box');


for (var i = 0; i < div.length; i++) {
	div[i].style.backgroundColor = randomColor();	
	div[i].addEventListener( 'click', function(){
		randomAnimation(this);
	});
};

function randomAnimation(element) {
	var random = Math.random();
	if ( random <= 0.2 ) {
		element.style.animation = 'move 2s';
	}
	else if ( random <= 0.4 ) {
		element.style.animation = 'long 2s';
	}
	else if ( random <= 0.6 ) {
		element.style.animation = 'scalemove 2s';
	}
	else if ( random <= 0.8 ) {
		element.style.animation = 'crawlmove 2s';
	}
	else {
		element.style.animation = 'sagmove 2s';
	}				
	setTimeout(function(){
		element.style.animation = '';
	}, 2000);
}

function randomColor() {
	return "#" + Math.random().toString(16).slice(2,8)
}

