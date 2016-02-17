var hamburger = document.querySelector('body > div > div')
var menu = document.querySelector('body > div > div:nth-child(2)')

var flag = false;
var windowWidth = -window.innerWidth;
var breakPoint = window.innerWidth
var opacity = 0

hamburger.addEventListener('click', function(){

	menu.style.width =  window.innerWidth + 'px';
	menu.style.height = window.innerHeight + 'px';
	menu.style.backgroundColor = 'blue';
	menu.style.position = 'relative';
	hamburger.style.position = 'relative'
	
	function up(){

		if( windowWidth <= 1 ) {
			menu.style.left = windowWidth + 'px';
			hamburger.style.left = breakPoint - 50 + 'px'
			// menu.style.opacity = 
			console.log( windowWidth / 100 )
			windowWidth += 20
			setTimeout( up, 10 )
			flag = true
		}

	}

	function down(){

		if( windowWidth >= -breakPoint ) {
			windowWidth -= 20
			menu.style.left = windowWidth + 'px';
			hamburger.style.left = 10 + 'px'
			setTimeout( down, 10 )
			flag = false;
		}

	}	

	if( flag ){
		down()
	} else {
		up()
	}

})
