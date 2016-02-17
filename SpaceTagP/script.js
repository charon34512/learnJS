var p = document.querySelectorAll('div.height-mobile > p')

for (var i = 0; i < p.length; i++) {
	if ( p[i].innerHTML.search(/^&nbsp;(\s?)+/gim) === 0 ){
		p[i].classList.add('hide-980')
		p[i].textContent.trim()
	}
};

var fibonacci = function(n){
	if ( n >= 2 ){
		var k = fibonacci( n - 1 ) + fibonacci( n - 2 )
		console.log("test", k)
	}
	return n < 2 ? n : k ;
};

// for (var i = 0; i <= 3; i++) {
// 	console.log( i + ' : ' + fibonacci(i))
// }



console.log(fibonacci(5))

// dla 3   fibonacci(2)) -> fibonacci(1))   +  fibonacci(1)
// 								1  				1     =  2

// dla 4   fibonacci(3)) -> fibonacci(2)) -> fibonacci(1))   +  fibonacci(2) -> fibonacci(0)
// 												1  								0      =  1
// 						  fibonacci(1)						+ fibonacci(0)
// 						  		1									0   =  1








// var fibonacci2 = function(){
// 	var memo = [0,1]
// 	var fib = function(n){
// 		var result = memo[n]
// 		if( typeof result !== 'number' ){
// 			result = fib( n - 1 ) + fib( n - 2 );
// 			console.log(result)
// 			memo[n] = result
// 		}
// 		return result;
// 	}
// 	return fib;
// }();



