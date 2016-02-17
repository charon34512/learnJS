function randomColor() {
	var letters = "0123456789ABCDEF".split("");
	var color = "#";
	for (var i = 0; i < 6; i++){
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function changeColor() {
	var body = document.getElementById('body');
//	body.style.display = 'none';
	body.style.background = randomColor();
}