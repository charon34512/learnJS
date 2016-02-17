var divs = document.getElementsByClassName('shape');
var span = document.getElementById('span')



function randomColor() {
	return '#' + Math.random().toString(16).slice(2,8);
}


document.addEventListener('mousemove', function() {
	var coor = {
		x: event.clientX,
		y: event.clientY
	}
	var coor = "Coordinates: " + coor.x +';' + coor.y;
	span.innerHTML = coor;

});


for (var i = 0; i < divs.length; i++) {
	divs[i].style.backgroundColor = randomColor(); 
	divs[i].addEventListener('drag', function(){

		this.style.backgroundColor = randomColor();
		

	})

};


function moveDiv(element) {
	var x = event.clientX;
	var y = event.clientY;	
	var xp = 0;
	var yp = 0;
 	var loop  = setInterval( function() {
		xp += ( x - 74 - xp ) ;
		yp += ( y - 75 - yp );
	 element.style.position = 'absolute'
		element.style.top = yp +'px';
		element.style.left = xp + 'px';
  }, 30);
}