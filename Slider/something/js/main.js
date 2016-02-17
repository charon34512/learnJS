
var container = document.querySelector( '.slider-content' );
var images = document.querySelectorAll( '.slider-content > div' );
var newStyle = document.documentElement.appendChild(document.createElement("style"));
var array = Array.prototype.slice.call(images);
var slides = images.length - 1;

array.reverse();

function slider(){
	var width = array[slides].clientWidth,
		animation = width + 'px';	
	
	newStyle.sheet.insertRule("@keyframes move { from {transform:translateX("+animation+"); }  to {transform:translateX(0);", 0);

	container.style.animation = 'move 2s';

	container.insertBefore(array[slides], null)	

	slides--

	if(slides < 0){
		slides = images.length - 1;
	}
	if ( newStyle.sheet.cssRules.length === 2){
		newStyle.sheet.deleteRule(1)
	}

	setTimeout(slider, 4000)
}

function anim(){
	container.style.animation = '';
	setTimeout(anim, 3995)
}

anim()
slider()



