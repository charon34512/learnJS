var div = document.getElementsByClassName('div');


for ( var i = 0; i < div.length; i++){
	div[i].addEventListener ( 'click', function() {
		random(this);

	});
}


function random (element) {
	var random = Math.random();
	if ( random < 0.25) {
		element.style.animation = 'scale 2s';
	} else if (  random < 0.5 ) {
		element.style.animation = 'rotate 2s';
	} else if ( random < 0.7) {
		element.style.animation = 'move 2s';
	} else {
		element.style.animation = 'hop 2s';
	}

	setTimeout( function() {
		element.style.animation = "";
	}, 2000);
}

