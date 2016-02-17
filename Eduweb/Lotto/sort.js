var table = document.querySelector('#myTable'),
	ths = document.querySelectorAll('thead > tr > th'),
	trs = document.querySelectorAll('tbody > tr');

for (var i = 0; i < ths.length; i++) {
	ths[i].addEventListener('click', sort)
};

function makeArray(nodeList){
	var arr = [];
	for (var i = 0; i < nodeList.length; i++) {
		arr.push(nodeList[i])
	};
	return arr;
}


function sort(e){
	var target = e.target,
		thsArr = makeArray(ths),
		trsArr = makeArray(trs),
		index = thsArr.indexOf(target),
		docfrag = document.createDocumentFragment()

		trsArr.sort(function(a,b){
			var trA = a.children[index].textContent,
				trB = b.children[index].textContent
		
			if ( trA < trB ){
				return -1
			}
			else if  ( trA > trB ){
				return 1
			}
			else {
				return 0 
			}
		})
		
		trsArr.forEach(function(tr){
			docfrag.appendChild(tr);
		})
		
		table.appendChild(docfrag)
}




//Scrollowanie strony

var button = document.querySelector('div > button');
var scrollMove = true;

button.addEventListener('click', function(){
	scrollMove = true;
	scrollLol();
});

function scrollLol(){
	if ( document.body.scrollTop > 0 && scrollMove ){
			window.scrollBy( 0, -1 );
			setTimeout( scrollLol, 20 );
	} 
}
window.addEventListener('mousewheel', function(){
	scrollMove = false;
})
window.addEventListener('scroll', function(){
	if( document.body.scrollTop < 200 ){
		button.style.display = 'none';
	} else {
		button.style.display = 'block';
	}
})

// Lekcja 1 

var arr = []

console.log( arr.indexOf(1) )

arr.indexOf = function() {
	return false
};

console.log( arr.indexOf(1) )
