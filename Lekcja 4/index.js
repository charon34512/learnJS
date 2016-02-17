var box = document.getElementsByClassName('box');
var netBox = document.getElementsByClassName('change');
var color = "";

	for (var i = 0; i < box.length; i++) {
		box[i].addEventListener( 'click', function() {
			color =	window.getComputedStyle(this,null).getPropertyValue('background-color')
		})
	}

	 for (var i = 0; i < netBox.length; i++) {
	 	netBox[i].addEventListener( 'click', function() {
			this.style.backgroundColor = color;
		})
	 }


console.log(color);