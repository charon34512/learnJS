// fade out

function fadeOut(el){
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .05) < 0) {
      el.classList.remove('active-image');
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

// fade in
function fadeIn(el){
  el.classList.add('active-image');
  el.style.opacity = 0;

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .05) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

function animation(){
	var currentImage =  document.querySelector('.active-image')
	var nextImage = currentImage.nextElementSibling

	if( nextImage === null ){
		nextImage = document.querySelectorAll('.image')[0]
	}

    fadeOut(currentImage);
    fadeIn(nextImage);   

   setTimeout(animation, 3000)
};

animation()




 