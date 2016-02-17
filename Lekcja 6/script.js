var date = new Date();
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

var time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
var day = days[date.getDay()]

var dayHTML = document.getElementById('day');

var webDays = document.getElementsByClassName('day');

for (var i = 0; i < webDays.length; i++){
	if (webDays[i].innerHTML === day){
		webDays[i].style.height = "500px";
		webDays[i].style.backgroundColor = "#FCA71D";		
		webDays[i].innerHTML = "";
		dayHTML.innerHTML = day;
	}
}




function realTime() {
// Dlaczego ta zmianna musi byc w funckji ??????
	var date = new Date(); // Dlaczego ta zmienna musi byc w funkcji ? ? ? 
	var time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(); 
	var hourHTML = document.getElementById('hour');
	hourHTML.innerHTML = time;
	refresh();
}


function refresh() {
	setTimeout('realTime()', 1000);  // Dlaczego ta funckja musi byc w ciapkach????
}



