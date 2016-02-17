(function(){
	var button = document.querySelector('button'),
		div = document.querySelector('output');

	button.addEventListener('click', function(){
		div.value = numbers()
	})

	function numbers(){
		var num = 0;
		var result = [];

		for (var i = 0; i <6; i++) {

			num = Math.floor(Math.random() * 48 + 1)

			while (result.indexOf(num) !== -1) {
				num = Math.floor(Math.random() * 48 + 1)
			}

			result.push(num)

		}
		result.join(', ')
		return result
	}	
})()

// Sortowanie
var table = document.querySelector('#myTable');
var th = document.querySelectorAll('thead > tr > th')
var tr = document.querySelectorAll('tbody > tr');
console.log(th)

for (var i = 0; i < th.length; i++) {
	th[i].addEventListener('click', sortBy);
};

function makeArray(nodeList){

	var arr = []
	for (var i = 0; i < nodeList.length; i++) {
		arr.push(nodeList[i])
	};
	return arr
}

function sortBy(e){

	var target = e.target,
		thArr = makeArray(th),
		trArr = makeArray(tr),
		index = thArr.indexOf(target)
		df = document.createDocumentFragment();
		console.log(df)

		// console.log(trArr)
	trArr.sort(function(a,b){
		tA = a.children[index].textContent
		tB = b.children[index].textContent
	

		if ( tA < tB ){
			return -1
		} else if ( tA > tB ){
			return 1 
		} else {
			return 0 
		}
	})

	trArr.forEach(function(tr){
		df.appendChild(tr)
	})

	table.querySelector('tbody').appendChild(df)

}