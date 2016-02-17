var shadowHTML = document.getElementsByClassName('shadow');

shadowHTML[0].addEventListener('click', function(){
	var valueBoxShadow = "0 0 10px " + add() + 'px' + " gray";
	this.style.boxShadow = valueBoxShadow;
	console.log(num);
});
shadowHTML[1].addEventListener('click', function(){
	var valueTextShadow = '0 ' + add2() + 'px' + ' 10px gray'
	this.style.textShadow = valueTextShadow;
});
shadowHTML[2].addEventListener('click', function(){
	var valueTextShadow = '0 ' + add3() + 'px' + ' 10px gray'
	this.style.textShadow = valueTextShadow;
});

console.log(num)
var num = 0;
function add(){
	num += 2;
	return num;
}

var num2 = 0;
function add2(){
	num2 += 2;
	return num2;
}

var num3 = 0;
function add3(){
	num3 += 2;
	return num3;
}







