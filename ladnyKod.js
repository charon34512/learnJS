// Ładny kod: 

// Replace zwraca w callbacku każdy znalezionu element ! 
function letterChangeZZ(str) {
  	return str.replace(/\w/g, function(c) {
      	return String.fromCharCode(
        	c.charCodeAt(0) + (c != "Z" && c != "z" ? 1 : -25));         
   	});
}

// Math min - na liczby ktora mniejsza
function trafficJam(trafficSpeed, jacobSpeed, dist){
	return dist / Math.min(trafficSpeed, jacobSpeed)
}

// Odwrocenie kolejnosci arguemntow dla podanej TABLICY
function swapValues() {
  return arguments[0].reverse();
}
swapValues([1,2,3])

// Do wywalenia tych samych wartosci z tablicy 
function clearDuplicateValues(arr){
	return arr.filter(function(element, index){
		return arr.indexOf(element) === index
	})
}
var arr = ['a','b','a']
var cleard = clearDuplicateValues(arr)

// Do zmiany kolejnosc liczby 
function digitize(n) {
  return n.toString().split('').map(Number).reverse()
}

// jesli ballType === undefined to wtedy regular
// var ball = new Ball()  -> zwroci this.ballType = 'regular'
var Ball = function(ballType) {
  this.ballType = ballType || 'regular';
};

// Array(10) zwraca array z 10 undefined ale Array(5).join('*') daje ***** 
function pattern(n){
 var output="1";
  for (var i = 1; i < n; i++){
    output += "\n1" + Array(i+1).join("*") + (i+1);
  }
 return output;
}

// Pamietaj ze nawiasy sa dostępne pod $1 $2 $3 $4
function linkify(input) {
  return input.replace(/(https?:\/\/)(www\.)?(\w+\.)(\w{2,3})/gi, "<a href='$1'>$1</a>");
}

// number to string
a = 1
+a
// 

// Remove item from array
Array.prototype.remove = function(num){
  if( typeof num === 'number' || num >= 0 ) {
   this.splice(num, 1)
  } 
}

// incrementString("foobar099") -> foobar100
function incrementString(input) {
  // Sprawdza czy ostatnia wartosc w stringu jest liczba 
  if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
  return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
    console.log(match, p1, p2)
    var up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}

// Fajny motyw z odejmowaniem od indexu, wyliczy pochodna 
// dif([4,2,0,0]) -> [12, 4, 0]
function diff(poly) {
  var n = poly.length - 1
  return poly.map(function(a, i) { return a * (n - i) }).slice(0, -1)
}


// Return w map zwraca 0 lub 1 dla elementu pod indexem 
// Czyli arr[0] = 1 || arr[ n - 0 - 1 ] = 1 
function x(n) {
  var output = [];
  
  for (var i = 0; i < n; i++) {
    // or output[i] = Array.apply( null, Array( n )).map.....
    output[i] = Array( n ).map(function(num, index) {
      return ( index === i || index === n - i - 1 ) ? 1 : 0;
    });
  }
  return output;
}



//snail([[1,2,3,1,3],[4,5,6,4,6],[7,8,9,7,2],[7,8,9,7,9],[1,2,3,4,5]])
// shift() usuwa pierwszy element, pop() usuwa ostatnio element 
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

// '{[Co(NH3)4(OH)2]3Co}(SO4)3' - policzy atomy 
function parseMolecule(formula) {
  var group, tokens, tokenExp = /([{(\[]|[})\]]|[A-Z][a-z]?)(\d*)/g, stack = [[]];
  while (tokens = tokenExp.exec(formula)) {
    tokens[2] = tokens[2] || 1;
    if (/^[A-Z]/.test(tokens[1])) {
      while (tokens[2]--) stack.push(stack.pop().concat([tokens[1]]));
    } else if (/[{\(\[]/.test(tokens[1])) {
      stack.push([]);
    } else {
      group = stack.pop();
      while (tokens[2]--) stack.push(stack.pop().concat(group))
    }
  }
  return stack[0].reduce(function (count, x) {
    count[x] = (count[x] || 0) + 1;
    return count;
  }, {});
}
//  solution2([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
//  "-6,-3-1,3-5,7-11,14,15,17-20"
function solution2(list){
   for(var i = 0; i < list.length; i++){
      var j = i;
      while(list[j] - list[j+1] == -1) j++;
      if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
  }
  return list.join();
}

function validBraces(str){
  for (var i = 0; i < str.length; i++) {
    if( str[i] === '{' && /[)\]]/.test(str[i + 1]) ){
      return false
    } 
    if( str[i] === '[' && /[)}]/.test(str[i + 1]) ){
      return false
    }   
    if( str[i] === '(' && /[}\]]/.test(str[i + 1]) ){
      return false
    } 
            
  };
  return true
}
