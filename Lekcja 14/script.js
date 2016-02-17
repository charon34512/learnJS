var text = [
['Ugh! That is horrible!'], 
['Gross. You re gross.'], 
['NO! Bad!'],
['You should be utterly ashamed.'],
['Are you going to suck all your life?'],
['That\'s terrible! You should knock that off!'],
['What? Who does that?!'],
['I thought you were better than that.'],
['That is totally uncacceptable.'],
['My disapproval is overwhelming.'],
['Are you freaking kidding me?'],
['You are bad and you should feel bad!'],
['Aren\'t you a little old for that crap?'],
['A kitten dies everytime you do that.'],
['Seriously? Why don\'t you grow the hell up?!']]

var spans = document.getElementsByClassName("spans");
var inputs = document.getElementsByTagName('input');


inputs[1].addEventListener( 'click', function(){
	for (var i = 0; i < inputs.length; i++) {
		if ( inputs[i].value == '' ) {
			spans[0].innerHTML = "Type something!";
			spans[1].innerHTML = "Realy! Please type something else!";
		}
		else if ( inputs[i].type.toLowerCase() == 'text' ) {
			spans[0].innerHTML = inputs[i].value;
			spans[1].innerHTML = text[Math.floor(Math.random()*15)];
			inputs[i].value = '';
		}
	}
});


