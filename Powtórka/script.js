var div = document.getElementsByClassName('box');

for (var i = 0; i < div.length; i++) {
	div[i].addEventListener( 'mouseover', function() {
		this.style.backgroundColor = randomColor();
	})
};

function randomColor() {
	return '#' + Math.random().toString(16).slice(2,8);
}
