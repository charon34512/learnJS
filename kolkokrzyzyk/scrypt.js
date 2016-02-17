
var p = document.getElementById('error');
var clicks = 0;
var play = true;
var boxs = document.getElementsByClassName('pole');
var button = document.getElementById('button');

for (var i = 0; i < boxs.length; i++) {
		boxs[i].addEventListener('click', game)
};

function game(){
	if( play ){
		if( this.innerHTML != '' ){
			p.innerHTML = 'Nie mozna kliknac dwa razy w to samo pole'
		}
		else if ( clicks % 2 === 0 ){
			clicks++
			view.displayX(this)
			model.addMarker(this, 'X');
		}
		else {
			clicks++
			view.displayY(this)
			model.addMarker(this, 'O');
		}
	}
}
var view = {

	displayX: function(id){
		id.className += ' iks';
		id.innerHTML = 'X'
	},

	displayY: function(id){
		id.className += ' igrek';
		id. innerHTML = 'O'
	}

}

var model = {

	lines: [{ locations:[boxs[0],boxs[1],boxs[2]], hits: ['','','']},
			{ locations:[boxs[3],boxs[4],boxs[5]], hits: ['','','']},
			{ locations:[boxs[6],boxs[7],boxs[8]], hits: ['','','']},
			{ locations:[boxs[0],boxs[3],boxs[6]], hits: ['','','']},
			{ locations:[boxs[1],boxs[4],boxs[7]], hits: ['','','']},
			{ locations:[boxs[2],boxs[5],boxs[8]], hits: ['','','']},
			{ locations:[boxs[0],boxs[4],boxs[8]], hits: ['','','']},
			{ locations:[boxs[2],boxs[4],boxs[6]], hits: ['','','']}],

	addMarker: function(id, marker){
		for (var i = 0; i < this.lines.length; i++) {
			var line = this.lines[i];
			var index = line.locations.indexOf(id);
			if( index >= 0 ){
				line.hits[index] = marker;
				if( this.isLine(line) ){
	 				for (var j = 0; j < 3; j++) {
	 					line.locations[j].className += ' underline';
	 					p.innerHTML = marker + ' won game ! Grats!!';
	 				}
	 			play = false;	
	 			}
			}
		};
	},

	isLine: function(line){
		var xCounter = 0;
		var oCounter = 0;
		var xMarker = line.hits.indexOf('X');
		var oMarker = line.hits.indexOf('O');
			while( xMarker !== -1 ){
				xCounter++
				xMarker = line.hits.indexOf('X', xMarker+1)	
				if(xCounter === 3){
					return true
				}
			}
			while( oMarker !== -1 ){
				oCounter++
				oMarker = line.hits.indexOf('O', oMarker+1)
				if(oCounter === 3){
					return true
				}
			}
		return false;
	}
}
// Clear all var to begin mode.
button.addEventListener('click', function(){
	for (var k = 0; k < boxs.length; k++) {
		boxs[k].className = boxs[k].className.match(/\bpole\b/,'');
		boxs[k].innerHTML = ''
		p.innerHTML = ''
		play = true;
		clicks = 0;
	}
	for (var m = 0; m < model.lines.length; m++) {
		var line = model.lines[m];
		for (var n = 0; n < line.hits.length; n++) {
			line.hits[n] = '';
		};
	}
})

