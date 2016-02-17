var dragndrop = (function(){
	var myX = '';
	var myY = '';
	var item = '';

	function moveStart(e){
		item = this
		myX = e.offsetX === undefined ? e.layerX : e.offsetX;
		myY = e.offsetY === undefined ? e.layerY : e.offsetY;
		item.style.zIndex = 12;
		console.log(myY)
		console.log(item)
		console.log(e)

	}

	function moveDragOver(e){
		e.preventDefault();
	}
	function moveDrop(e){
		e.preventDefault();
		item.style.position = 'absolute';
		item.style.left = e.pageX - myX + 'px';
		item.style.top = e.pageY - myY + 'px';
	}

	var box = document.querySelectorAll('body > div')

	for (var i = 0; i < box.length; i++) {
		box[i].addEventListener('dragstart', moveStart, false);
	};
	// window.addEventListener('dragstart', moveStart, false);
	window.addEventListener('dragover', moveDragOver, false);
	window.addEventListener('drop', moveDrop, false);

})();

[1,1,1,1,3,4,5,5]

function tesdsat(arr){
	var num = null;
	var a = 0;
	var newArr = []

	for (var i = 0; i < arr.length; i++) {
		if( arr[a] === arr[i] ){
			num += arr[i]
		} else {
			newArr.push(num)
			a = i
			i -= 1
			num = 0
		}
	};

	if( num !== null ){
		newArr.push(num)
	}
	return newArr
}

function diff(poly) {
  if( poly.length === 0 ) return []
  var arr = []
  var times = poly.length - 1;
  for (var i = 0; i < poly.length - 1 ; i++) {
  		arr.push( poly[i] * times )
  		times--
  	};	
  return arr
}

function diff2(poly) {
  var n = poly.length - 1
  return poly.map(function(a, i) { return a * (n - i) }).slice(0, -1)
}



function test(a,b){

	var lengthDiff = a.length - b.length
	var zeros = new Array( Math.abs(lengthDiff) + 1).join('0')
	
	a.length > b.length ? b = zeros + b : a = zeros + a

	var total = '';
	var one = 0
  	for ( var i = a.length - 1; i >= 0; i-- ) {
    var num = parseInt(a[i]) + parseInt(b[i]) + one
    if( parseInt(num) >= 12 ){
        var c = num - 12
        one = 1;
       	total += c.toString()
    } else {
        total += num.toString()
        one = 0
    }
  };
  	if( one === 1 ) return total = one.toString() + total.split('').reverse().join('')
	return total.split('').reverse().join('')
}




function lol(n){
	var arr = []
	var half = n / 2 
	for (var i = 0; i < n; i++) {
		arr.push( Array.apply(null, Array( n )).map(Number.prototype.valueOf,0) )
	};
	for (var i = 0; i <= half; i++) {
		arr[i][i] = 1
		arr[i][  n - ( i + 1 ) ] = 1 

		arr[ n - ( i + 1 )][i] = 1
		arr[ n - ( i + 1 )][ n - ( i + 1 )] = 1
	};

// // ---
// 	arr[0][0] = 1
// 	arr[0][n - 1] = 1
// 	arr[n - 1][0] = 1
// 	arr[n - 1][n - 1] = 1
// // ----
// 	arr[1][1] = 1
// 	arr[1][n - 2] = 1

// 	arr[ n - 2 ][1] = 1
// 	arr[ n - 2 ][n - 2] = 1

// // ---- 
// 	arr[2][2] = 1

	return arr
}

function x(n) {
  var output = [];
  
  for (var i = 0; i < n; i++) {
    output[i] = Array.apply(null, Array(n)).map(function(num, index) {
      num = ( index === i || index === n - i - 1 ) ? 1 : 0;
      return num
    });
  }
  return output;
}


function hehe(arr){
	var prime = [2, 3, 5, 8, 12, 15, 19, 120, 24, 230, 31, 38, 41, 43, 48, 53, 510, 71, 78, 81, 83, 810, 93, 910, 108]
	var result = [];
	prime.forEach(function(primeNum){
		var total = null;
		arr.forEach(function(num){
			if( num%primeNum === 0 ){
				total += num
			} 
		})
		if( total || total === 0 ){
			result.push( [primeNum, total] )
		}
	})
	return result
}


function sumConsecutives(s) {
  var last = s[0];
  var sum = last;
  var result = [];
  for( var i = 1; i < s.length ; i++)
  {
    if( last === s[i] )
    {
      sum+=last;
    }
    else
    {
      result.push(sum);
      sum = last = s[i];
    }
  }
  result.push(last);
  return result;
}

var haha = [2,4,7,0,3]
function removeZero(arr){
	var index = 0
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		if( arr[i] !== 0 && arr[i] !== '0' ) {
			result[index] = arr[i]
			index++
		} 
	}

	for (var i = 0; i < result.length; i++) {
		if( arr[i] === '0') {
			result[ result.length ] = '0'
		} 	else if( arr[i] === 0 ) {
			result[ result.length ] = 0
		}	
	}

	return arr = result

}

// function push(arr, elem ){
// 	arr[ arr.length ] = elem
// }

// console.log(removeZero(haha))

function snail(arr){

	var result = [];
	length = arr.length
	while( length > 2 ){
		var shield = lastShild( arr )
		var arr = reduce(arr)
		result = result.concat(shield)
		length = arr.length
	}
	var lastShield = lastShild( arr )
	result = result.concat(lastShield)
	return result

}


function reduce(arr){
	
	var last = arr.length - 1;
	var newArr = [];
	for (var i = 1; i <= ( last - 1 ) ; i++) {
		newArr.push( arr[i].slice( 1, last) )
	};
	return newArr

}


function lastShild( arr ){

	if( arr.length > 2 ) {
		var last = arr.length - 1
		var lastArray = []
		var firstArray = []
		for (var i = 1; i <= ( last - 1 ) ; i++) {
			lastArray.push(arr[i][last])
			firstArray.push(arr[i][0])
		};

		var array = []
		return array = array.concat(arr[0], lastArray, arr[ last ].reverse(), firstArray.reverse() )
	} else {
		if( arr.length === 2 ) {
			var array = []
			return array = array.concat(arr[0], arr[1].reverse())
		} else {
			return arr[0]
		}
	}
}

//snail([[1,2,3,1,3],[4,5,7,4,7],[8,9,10,8,2],[8,9,10,8,10],[1,2,3,4,5]])
function snail2(array){
	var result;
	while( array.length ){
		result = ( result ? result.concat(array.shift()) : array.shift() );
		for( var i = 0; i < array.length; i++ ){
			result.push( array[i].pop() )
		}
		result = result.concat(( array.pop() || []).reverse() )
		for( var i = array.length - 1; i >=0; i-- ){
			result.push( array[i].shift() )
		}
	}
	return result;
}


function summaryRanges(arr){
	if( arr.length === 0 ) return arr
	var range = []	
	
	var start = arr[0]
	var first = arr[0]

	var total = first
	for ( var i = 1; i < arr.length; i++ ) {

		if( ( first + 1 ) ===  arr[i] ) {
			first = arr[i]
			total++
		} else if ( first === arr[i]) {


		} else {

			if( total != start ){
				range.push( start +'->' + total )
			} else {
				range.push( start.toString() )
			}
			first = arr[i] - 1
			start = arr[i]
			total = arr[i] - 1
			i -= 1
		}
	};
	if( total != start ){
		range.push( start +'->' + total )
	} else {
		range.push( start.toString() )
	}

	
	return range
}

function summaryRanges2(nums) {
'use strict'
  let res = []
  for (let b = 0; b < nums.length; b++) {
    let e = b;
    while (nums[e + 1] - nums[e] <= 1)
      e++;
    res.push(nums[b] == nums[e] ? `${nums[b]}` : `${nums[b]}->${nums[e]}`);
    b = e;
  }
  return res;
}




var oneCharElements = ['H','B','C','O','P','S','N','F','K','I','U'];
var twoCharElements = ['He','Li','Be','Ne','Na','Mg','Al','Si','Cl','Ar',
'Ca','Sc','Ti','V','Cr','Mn','Fe','Co','Ni','Cu','Zn','Ga','Ge','As','Se','Br','Kr',
'Rb','Sr','Y','Zr','Nb','Mo','Tc','Ru','Rh','Pd','Ag','Cd','In','Sn','Sb','Te','Xe',
'Ba','La','Ce','Pr','Nd','Pm','Sn','Eu','Gd','Tb','Dy','Ho','Er','Tm','Yb','Lu','Hf','Ta','W','Re','Os','Ir','Pt','Au','Hg','Tl','Pb','Bi','Po','At','Rn',
'Fr','Ra','Ac','Th','Pa','Np','Pu','Am','Cm','Bk','Cf','Es','Fm','Md','No','Lr','Rf','Db','Sg','Bh','Hs','Mt','Ds','Rg','Uut','Fl','Uuf','Lv','UUs','UUo']


function parseMolecule(str) {
  	
	// if( argument.'0' === '(C5H5)Fe(CO)2CH3' ) return { Fe: 1, C: 9, H: 9, O: 2 }
	var myReg = /(\([\d\w]+\))(\d*)/gi
	var match = myReg.exec(str)
	var parenthesisRound = []

	while( match != null ){
		console.log(match)
		var elements = match[1].split('')
		parenthesisRound.push( elements, match[2] || 1 )
		match = myReg.exec(str)
	}
	console.log(parenthesisRound)
	myReg = /(\[[\d\w\(\)]+\])(\d*)/gi
	match = myReg.exec(str)
	var parenthesisSquare = []

	while( match != null ){
		var elements = match[1].split('')
		parenthesisSquare.push( elements, match[2] || 1)
		match = myReg.exec(str)
	}
	console.log(parenthesisRound)

	var text = '';
	var newString = str;

	myReg = /([a-w]{2})(\d*)/gi
	match = myReg.exec(str)

	while( match != null ){

		console.log(match)

		twoCharElements.forEach(function(elem){
			if( elem === match[1]){
				console.log(match[1])
				text += ( match[1] + ( match[2] || 1 ) )
				newString = str.replace( match[1], '')
			}
		})
		console.log(newString)
		match = myReg.exec(newString) 
	}

	myReg = /([a-w]{1})(\d*)/gi
	match = myReg.exec( newString )
	while( match != null ){
		oneCharElements.forEach(function(elem){
			if( elem === match[1] ){
				text += ( match[1] + ( match[2] || 1 ) )
			}
		})		
		match = myReg.exec(newString)
	}


	var object = molecule(text)
	for( var key in object ){
		for (var i = 0; i < parenthesisRound.length; i+=2) {
			parenthesisRound[i].forEach(function(elem){
				if( key === elem ){
					object[key] *= parenthesisRound[ i + 1 ]
				}
			})
		};

	}
	for( var key in object ){
		for (var i = 0; i < parenthesisSquare.length; i+=2) {
			parenthesisSquare[i].forEach(function(elem){
				if( key === elem ){
					object[key] *= parenthesisSquare[ i + 1 ]
				}
			})
		};

	}	
	return object

}

///([a-w]{1,2})(\d*)?((\[?\(?(([a-w]{1,2})(\d*))\)?(\d*)(\(([a-w]{1,2})(\d*)\))?(\d*)\]?)(\d*))?/gi 

// var oneCharElements = ['H','B','C','O','P','S','N','F','K','I','U'];
// var elements = ['H','B','C','O','P','S','N','F','K','I','U','He','Li','Be','Ne','Na','Mg','Al','Si','Cl','Ar',
// 'Ca','Sc','Ti','V','Cr','Mn','Fe','Co','Ni','Cu','Zn','Ga','Ge','As','Se','Br','Kr',
// 'Rb','Sr','Y','Zr','Nb','Mo','Tc','Ru','Rh','Pd','Ag','Cd','In','Sn','Sb','Te','Xe',
// 'Ba','La','Ce','Pr','Nd','Pm','Sn','Eu','Gd','Tb','Dy','Ho','Er','Tm','Yb','Lu','Hf','Ta','W','Re','Os','Ir','Pt','Au','Hg','Tl','Pb','Bi','Po','At','Rn',
// 'Fr','Ra','Ac','Th','Pa','Np','Pu','Am','Cm','Bk','Cf','Es','Fm','Md','No','Lr','Rf','Db','Sg','Bh','Hs','Mt','Ds','Rg','Uut','Fl','Uuf','Lv','UUs','UUo']


// function molecule( string  ){
// 	var myRegExp = /\(?([a-w]{1,2})(\d*)\)?(\d*)(((\{?([a-w]{1,2})(\d*)([a-w]{1,2})(\d*))?(\[?([a-w]{1})?(\d*)(([a-w]{1,2})(\d*))?\(?(([a-w]{1,2})(\d*)([a-w]{1,2})(\d*))\)?(\d*)(\(([a-w]{1,2})(\d*)([a-w]{1,2})(\d*)\))?(\d*)\]?)(\d*))\}?(\d*))?/gi 
// 	var obj = {}
// 	var match = myRegExp.exec( string )
// 	while( match != null ){
// 		console.log(match) 		
// 		if( match[1] !== undefined && checkElement(match[1]) ){
// 			if( !obj[match[1]] ){
// 				obj[match[1]] = ( parseInt(match[2]) || 1 ) * ( parseInt(match[3]) || 1 ) * ( match[1] === 'Co' ? ( parseInt(match[29]) || 1 ) : 1 )
// 			}else {
// 				obj[match[1]] += ( parseInt(match[2]) || 1 ) * ( parseInt(match[3]) || 1 ) * ( match[1] === 'Co' ? ( parseInt(match[29]) || 1 ) : 1 )
// 			}
// 		} else{
// 			if( !obj[match[1][0]] ){
// 				obj[match[1][0]] = 1 * ( parseInt(match[3]) || 1 )
// 			} else {
// 				obj[match[1][0]] += 1 * ( parseInt(match[3]) || 1 )
// 			}
// 			if( !obj[match[1][1]] ){
// 				obj[match[1][1]] = ( parseInt(match[2]) || 1 ) * ( parseInt(match[3]) || 1 )
// 			} else {
// 				obj[match[1][1]] += ( parseInt(match[2]) || 1 ) * ( parseInt(match[3]) || 1 )
// 			}
// 		}

// 		if( checkElement(match[6]) ){
// 			if( !obj[match[6]] ){
// 				obj[match[6]] = 1 * ( parseInt(match[29]) || 1 ) * ( parseInt(match[30]) || 1 )
// 			} else {
// 				obj[match[6]] += 1 * ( parseInt(match[29]) || 1 ) * ( parseInt(match[30]) || 1 )
// 			}
// 		}


// 		if( match[7] !== 'F' ){
// 			if( checkElement(match[7]) ){
// 				if( !obj[match[7]] ){
// 					obj[match[7]] = ( parseInt(match[8]) || 1 ) * ( parseInt(match[9]) || 1 ) * ( parseInt(match[30]) || 1 )
// 				} else {
// 					obj[match[7]] += ( parseInt(match[8]) || 1 ) * ( parseInt(match[9]) || 1 ) * ( parseInt(match[30]) || 1 )
// 				}
// 			}
// 		}

// 		if( checkElement(match[9]) ){
// 			if( !obj[match[9]] ){
// 				obj[match[9]] = ( parseInt(match[10]) || 1 ) * ( parseInt(match[30]) || 1 )
// 			} else {
// 				obj[match[9]] += ( parseInt(match[10]) || 1 ) * ( parseInt(match[30]) || 1 )
// 			}
// 		}

// 		if( checkElement(match[12]) ){
// 			if( !obj[match[12]] ){
// 				obj[match[12]] = ( parseInt(match[13]) || 1 ) * ( parseInt(match[29]) || 1 ) * ( parseInt(match[30]) || 1 )
// 			} else {
// 				obj[match[12]] += ( parseInt(match[13]) || 1 ) * ( parseInt(match[29]) || 1 ) * ( parseInt(match[30]) || 1 )
// 			}
// 		}

// 		if( checkElement(match[15]) ){
// 			if( !obj[match[15]] ){
// 				obj[match[15]] = ( parseInt(match[16]) || 1 ) * ( parseInt(match[29]) || 1 ) * ( parseInt(match[30]) || 1 )
// 			} else {
// 				obj[match[15]] += ( parseInt(match[16]) || 1 ) * ( parseInt(match[29]) || 1 ) * ( parseInt(match[30]) || 1 )
// 			}
// 		}		

// 		if( checkElement(match[17]) ){
// 			if( !obj[match[17]] ){
// 				obj[match[17]] = 1 * ( parseInt(match[29]) || 1 ) * ( parseInt(match[30]) || 1 )
// 			} else {
// 				obj[match[17]] += 1 * ( parseInt(match[29]) || 1 ) * ( parseInt(match[30]) || 1 )
// 			}
// 		}

// 		if( checkElement(match[18]) ){
// 			if( !obj[match[18]] ){
// 				obj[match[18]] = ( parseInt(match[19]) || 1 ) * ( parseInt(match[22]) || 1 ) * ( parseInt(match[29]) || 1 ) * ( parseInt(match[30]) || 1 )
// 			} else {
// 				obj[match[18]] += ( parseInt(match[19]) || 1 ) * ( parseInt(match[22]) || 1 ) * ( parseInt(match[29]) || 1 ) * ( parseInt(match[30]) || 1 )
// 			}
// 		}

// 		if( checkElement(match[20]) ){
// 			if( !obj[match[20]] ){
// 				obj[match[20]] = ( parseInt(match[21]) || 1 ) * ( parseInt(match[22]) || 1 ) * ( parseInt(match[29]) || 1 ) * ( parseInt(match[30]) || 1 )
// 			} else {
// 				obj[match[20]] += ( parseInt(match[21]) || 1 ) * ( parseInt(match[22]) || 1 ) * ( parseInt(match[29]) || 1 ) * ( parseInt(match[30]) || 1 )
// 			}
// 		}

// 		if( checkElement(match[24]) ){
// 			if( !obj[match[24]] ){
// 				obj[match[24]] = ( parseInt(match[25]) || 1 ) * ( parseInt(match[28]) || 1 ) * ( parseInt(match[29]) || 1 ) * ( parseInt(match[30]) || 1 )
// 			} else {
// 				obj[match[24]] += ( parseInt(match[25]) || 1 ) * ( parseInt(match[28]) || 1 ) * ( parseInt(match[29]) || 1 ) * ( parseInt(match[30]) || 1 )
// 			}
// 		}

// 		if( checkElement(match[26]) ){
// 			if( !obj[match[26]] ){
// 				obj[match[26]] = ( parseInt(match[27]) || 1 ) * ( parseInt(match[28]) || 1 ) * ( parseInt(match[29]) || 1 ) * ( parseInt(match[30]) || 1 )
// 			} else {
// 				obj[match[26]] += ( parseInt(match[27]) || 1 ) * ( parseInt(match[28]) || 1 ) * ( parseInt(match[29]) || 1 ) * ( parseInt(match[30]) || 1 )
// 			}
// 		}

// 		match = myRegExp.exec(string)
// 	}
// 	console.log(obj)
// 	for( var key in obj ){
// 		if( key === 'undefined' ){
// 			delete obj.undefined
// 		}
// 	}
// 	return obj
// }


// function checkElement(str){
// 	var flag = false
// 	elements.forEach(function(elem){
// 		if( elem === str ){
// 			return flag = true
// 		} 
// 	})
// 	return flag
// }



// function parseMolecule(formula) {
//   var group, tokens, tokenExp = /([{(\[]|[})\]]|[A-Z][a-z]?)(\d*)/g, stack = [[]];
//   while (tokens = tokenExp.exec(formula)) {
//     tokens[2] = tokens[2] || 1;
//     if (/^[A-Z]/.test(tokens[1])) {
//       while (tokens[2]--) stack.push(stack.pop().concat([tokens[1]]));
//     } else if (/[{\(\[]/.test(tokens[1])) {
//       stack.push([]);
//     } else {
//       group = stack.pop();
//       while (tokens[2]--) stack.push(stack.pop().concat(group))
//     }
//   }
//   return stack[0].reduce(function (count, x) {
//     count[x] = (count[x] || 0) + 1;
//     return count;
//   }, {});
// }


function primes(start, end){
	var num = start
	var result = []
	while( num <= end ){
		if( isPrime(num) ){
			result.push(num)
		}
	num++	
	}
	return result.length === 0 ? null : result
}

function isPrime(num){
	if( num === 2 ) return true;
	else if( num === 1 || num % 2 === 0 ) return false
	var sqrt = Math.sqrt(num)
	for (var i = 3; i <= sqrt; i += 2) {
		if( num % i === 0){
			return false
		}
	}
	return true
}

var text = '1234 34345 46346 67568 3252 756723 235 34 3'
var array = text.split(' ')
function stringTest(arr){
	return arr.filter(function(elem){
		return ( elem.length <= 4 )
	})
}


function tea42(input) {
  return ( '' + input).replace(/2/g, 't')
};

var vampire_test = function(a, b){
   var nums = a.toString().split('').concat(b.toString().split(''))
   var multiply = ( a * b ).toString().split('')
    var result = nums.filter(function(elem){
      return multiply.indexOf(elem) === -1 
    }) 
    return result.length === 0
}

function groupByCommas(n) {
 	var arr =  n.toString().split('')
  	for ( var i = arr.length; i >= 0; i-=3 ) {
	    if( i > 0 && i < arr.length ) 
	 		 arr.splice( i, 0 , ',')
	}
 	return arr.join('')	
}

function groupByCommas2(n) {
	n.toString().replace(/\d{3}/, function(elem, index){

	})	
}


function parseMolecule(formula) {
    var molecule = {};
    String.prototype.isLowerLetter = function() {
        var alphabet = 'abcdefghijklmnoprstuwyz';
        return alphabet.indexOf( this ) >= 0 ? true : false;
    }
    String.prototype.addDirectlyValue = function( value ) {
        var numberOfValue = this.split(value).length - 1;   
        var lengthOfvalue = value.length;
        var molValue = 0;
        var myString = this;
        var addValue = function( string ) {
            if ( string.length > 0 && string.charAt(0).isLowerLetter() ) {
                return 0;
            }
            else if ( isNaN( parseInt( string ) ) ) return 1;
            else return parseInt( string );
        }
        for ( var i = 0; i < numberOfValue; i++ ) {
            var addMol = 1;
            var cutString = myString.slice( ( myString.indexOf( value ) + lengthOfvalue ) );
            myString = cutString;
            addMol *= addValue( cutString );
            for ( var j = 0; j < cutString.length; j++ ) {
                if ( cutString.charAt( j ) === '(' ) {
                    break;
                }
                else if ( cutString.charAt( j ) === ')' ) {
                    addMol *= addValue( cutString.substring( j + 1 ) );
                }
            }
            for ( var k = 0; k < cutString.length; k++ ) {
                if ( cutString.charAt( k ) === '[' ) {
                    break;
                }
                else if ( cutString.charAt( k ) === ']' ) {
                    if ( cutString.length > k ) {
                        addMol *= addValue( cutString.substring( k + 1 ) );
                    }
                }
            }
            for ( var l = 0; l < cutString.length; l++ ) {
                if ( cutString.charAt( l ) === '{' ) {
                    break;
                }
                else if ( cutString.charAt( l ) === '}' ) {
                    if ( cutString.length > l ) {
                        addMol *= addValue( cutString.substring( l + 1 ) );
                    }
                }
            }
            molValue += addMol;
        }
        return molValue;
    }
    var allMolecules = formula.split(/\W|\d/).join('').split(/(?=[A-Z])/);
    for ( var i = 0; i < allMolecules.length; i++ ) {
        molecule[allMolecules[i]] = formula.addDirectlyValue(allMolecules[i]);
    }
    return molecule;
}

var months31 = [01, 03, 05, 07, 08, 10, 12]

function validDate( string ){
	var match = string.match(/\[(\d{2})-(\d{2})\]/)

	if( match[1] === '02' )
		return match[2] <= 28 
	if( months31.indexOf(match[1]) ){
		return match[2] <= 31
	} else {
		return match[2] <= 30
	}
}

function scramblies( str1, str2 ){

	var arr1 = str1.split('').sort()
	var arr2 = str2.split('').sort()
	var text = ''

	var l = str2.length
	for (var i = 0; i < l; i++) {
		var id = binaryIndexOf( arr1, arr2[i])
		if( id !== -1 ) {
			delete arr1[id]
			text += arr2[i]
		}
	};
	return text.length === str2.length

}


function binaryIndexOf(array, searchElement) {
    var minIndex = 0;
    var maxIndex = array.length - 1;
    var currentIndex;
    var currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.round( (minIndex + maxIndex) / 2 );
        currentElement = array[currentIndex];

        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1;
        }
        else if( currentElement === undefined ){
        	return -1
        }
        else {
            return currentIndex;
        }
    }

    return -1;
}

var tomek = ['t','o','m','e','k']
tomek.sort()

function cordsValidate( string ){
	var tokens = /(-?(\d+)(\.\d*)?), ?(-?(\d+)(\.?\d*))/.exec( string )
	return ( tokens[2] > -90 && tokens[2] < 90 && tokens[5] > -180 && tokens[5] < 180 && tokens[0].length === string.length ) ? true : false  
}



function combinations(str) {
    var fn = function(active, rest, a) {
        if (!active && !rest)
            return;
        if (!rest) {
            a.push(active);
        } else {
            fn(active + rest[0], rest.slice(1), a);
            fn(active, rest.slice(1), a);
        }
        return a;
    }
    return fn("", str, []);
}

function factorial(n) {
    if (n <= 0) {
        return 1;
    } else {
        return n*factorial(n-1);
    }
}

function nextBigger( number ){
	var arr = number.toString().split('')
	var nums = []

	

}


function permutator(inputArr) {
  var results = [];

  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}

var test = [{range: 5, damaged: true}, {range: 10, damaged: true}, {range: false }]
function isOption(array){
  return array.some(function(a){
    return a.hasOwnProperty('damaged')
  })
}

function isValidIP(str) {
  var match = /(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/g.exec(str)
  console.log(str)
//  if( match && match[1] == 0 && match[2] == 0 && match[3] == 0 && match[4] == 0 ) return true
  return match[1] <= 255 && match[2] <= 255 && match[3] <= 255 && match[4] <= 255 && match[0].length === str.length 

}


function doubleCheck(str){
  var array = str.toLowerCase().split(''), i = 0, j = 1;
  while ( i < str.length ){
    if( array[i] === array[j] ){
       return true
    }
    i++
    j++
  }
  return false
}

function imageFilter(arr) {
  var result = []
  arr.forEach(function(elem){
    var tokens = /(\w+)\.(jpg|gif|png|tiff|svg|bmp)/g.exec(elem)
    if( !tokens || tokens[0].length !== elem.length ) {
     result.push(null)
    } else {
    	result.push( [ tokens[0], tokens[1], tokens[2] ] )
  	}
  })
  return result
}

function imageFilter2(arr) {
  return arr.map(file => file.match(/^(.+)\.(bmp|gif|jpg|png|tiff)$/i))
}

function tet(arr){
	return arr.map( num => num*2 )
}

var myCat = {}
myCat.name = 'kicia';
myCat.saying = 'miau';
myCat.purr = function(n){
   var i, s = '';
   for(var i = 0; i < n; i++){
     if(s) s+= '-'
     s += 'r'
   }
  return s 
}



function composer(string){
	var myRegExp = /([{(\[]|[})\]]|[A-Z][a-z]?)(\d*)/g
	var matches = myRegExp.exec(string)

	var object = {}
	var elements = []

	var object2 = {};
	var elements2 = [];	
	
	while( matches !== null ) {

		if( /^[A-Z]/.test( matches[0] )){
			var obj = createElementObject( matches )
			elements.push(obj)
		} else if ( /[{(\[]/.test( matches[0] )){
			
			matches = myRegExp.exec(string)

			while( /^[A-Z]/.test( matches[0] )){
				var obj = createElementObject( matches )
				elements2.push(obj)
				object2.elements = elements2
				matches = myRegExp.exec(string)
			}

				if( /[})\]]/.test( matches[0] )){
					object2.isElement = false
					object2.roundParanthesis = true
					object2.squaredParanthesis = false
					object2.electricCharge = 0;
					object2.id = 1176
					object2.index = 0;
					object2.componentId = 0
					object2.quantity = 2
				}

			elements.push(object2)


		} 
		object.elements = elements
		matches = myRegExp.exec(string)
	}

	console.log(object)
} 

function createElementObject( matches ){
	var obj = {}
	obj.symbol = matches[1]
	obj.isElement = true;
	obj.id = 20
	obj.componentId = 283
	obj.index = matches[2] || 1
	obj.quantity = 1
	return obj
}

function solution(nums){
	var summary = nums.reduce(function(obj, x){
		if( x <= obj.last + 1 ) {
			obj.last = x
		}
		else {
			pushToArray( obj.s, obj.first, obj.last )
			obj.last = obj.first = x
		}
		return obj
	}, { s:[], last: nums[0], first: nums[0] })
	
	pushToArray( summary.s, summary.first, summary.last)

	var result = summary.s.join(',')
	return result
}

function pushToArray(arr,first,last){
	if( ( last - first ) === 0 ){
		arr.push(last)
	} else if( last - first === 1 ){
		arr.push( first, last )
	} else {
		arr.push( first + '-' + last )
	}
	return arr
}

function solution2(list){
   for(var i = 0; i < list.length; i++){
      var j = i;
      while(list[j] - list[j+1] == -1) j++;
      if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
  }
  return list.join();
}


function validBraces(str){
	var tokens, regexp = /[{([}\])]/g, obj = {};
	while( tokens = regexp.exec(str) ){
		obj[tokens[0]] = ( obj[tokens[0]] || 0 ) + 1
	}
	return obj['('] === obj[')'] && obj['['] === obj[']'] && obj['{'] === obj['}']
}




function validParentheses2(string){
   var tokenizer = /[{[()]}]/g, // ignores characters in between; parentheses are
       count = 0,           // pretty useless if they're not grouping *something*
       token;
   while(token = tokenizer.exec(string), token !== null){
      if(token == "(") {
         count++;
      } else if(token == ")") {
         count--;
         if(count < 0) {
            return false;
         }
      }
   }
   return count == 0;
}

function validBraces(str){
	var tokens, regexp = /[{([}\])]/g, obj = {};
	while( tokens = regexp.exec(str) ){
		obj[tokens[0]] = ( obj[tokens[0]] || 0 ) + 1
	}
	return obj['('] === obj[')'] && obj['['] === obj[']'] && obj['{'] === obj['}']
}
