
var divHTML = document.getElementsByClassName('div');

function randomColor() {
	return "#" + Math.random().toString(16).slice(2,8);
}


for (var i = 0; i < divHTML.length; i++) {
	divHTML[i].addEventListener( 'mouseover', function() {
		this.style.backgroundColor = randomColor();
	})
}

