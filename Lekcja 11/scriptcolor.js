var html = document.getElementById('html');
var colorHTML = document.getElementById('color');
var bodyHTML = document.getElementById('body');
var hexsec = 0;
var hexmin = 0;
var hexhour = 0;
function refresh() {
	setTimeout('realTime()', 1000);
}
function realTime() {
	var date = new Date();
	var hour = addZero(date.getHours());
	var minutes = addZero(date.getMinutes());
	var seconds = addZero(date.getSeconds());
	var time = hour + ":" + minutes +":" + seconds;
	html.innerHTML = time;
	hexTime();
	colorHTML.innerHTML = hexhour + hexmin + hexsec;
	body.style.backgroundColor = "#" + hexhour + hexmin + hexsec;
	refresh();
}
function addZero(number) {
	if ( number < 10 ) {
		number = "0" + number;	
	}
	return number;
}
function addZeroHex(string){
	if(string.length < 2){
		string = '0' + string;
	}
	return string;
}
function hexTime(){
	var date = new Date();
	var seconds = date.getSeconds();
	var minutes = date.getMinutes();
	var hour = date.getHours();
	seconds = addZero(Math.round(seconds * 4.32));
	minutes = addZero(Math.round(minutes * 4.32));
	hour = addZero(Math.round(hour * 11.09));
	hexsec = addZeroHex(seconds.toString(16).toUpperCase());
	hexmin = addZeroHex(minutes.toString(16).toUpperCase());
	hexhour = addZeroHex(hour.toString(16).toUpperCase());
	return hexmin, hexsec, hexhour;
}

