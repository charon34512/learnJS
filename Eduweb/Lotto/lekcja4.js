// instancja utworzony z klasy obiekt


function Shape(sideLengths){
	this._name = '';
	this._sideLengths = sideLengths;
}

Shape.prototype.getPerimeter = function() {
	return this._sideLengths.reduce(function(a,b){
		return a + b;
	})
};

Shape.prototype.getArea = function(){
	return this._sideLengths[0] * this._sideLengths[1]
}
Shape.prototype.toString = function(){
	return	"[object" + this._name + ']';
}

function Rectangle(sideLengths){
	Shape.call(this, [sideLengths[0], sideLengths[1], sideLengths[0], sideLengths[1]])

	this._name = 'prostokat';
}

function Squate(sideLengths){
	Rectangle.call(this, [sideLengths, sideLengths])

	this._name = "Kwadrat";
}

function Triangle(sideLengths){
	Shape.call(this, [sideLengths, sideLengths, sideLengths]);

	this._name = 'Trojkat';
}




Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Squate.prototype = Object.create(Shape.prototype)
Squate.prototype.constructor = Squate;

Triangle.prototype.getArea = function(){
	var a = this._sideLengths[0];

	return (a * a * Math.sqrt(3)).toFixed(2)
}



var trojkat = new Triangle(20)
var kwadrat = new Squate(20)
var shape = new Shape([20,10,20,10])
var prostokat = new Rectangle([20,10])

var arr = [1,2,3,4]


var elem = document.querySelectorAll('p');

Array.prototype.forEach.call(elem, function(a){
	a.style.color = 'blue';
})

// NodeList.prototype.forEach = function( calback ){
// 	for (var i = 0; i < this.length; i++) {
// 		calback(this[i])
// 	};
// }

// elem.forEach(function(el){
// 	el.style.color = 'blue';
// })


var imie = document.querySelector('#myTable > thead > tr > th:nth-child(1)')

imie.setAttribute('class', 'trol')

imie.id = 'trolololo'

var ob = {
	name: 'Tomek',
	wiek: 23,
	plec: 'men'
}

function Person(first, last, age) {
	this.first = first;
	this.last = last;
	this.age = age;
}

Person.prototype.lol = function(){
	console.log('heheh')
}


var person2 = new Person('Justyna', 'kok', 30)

for( var key in person2 ){
	if(person2.hasOwnProperty(key)){
	console.log(key + ':' + person2[key])
	}
}


function FireXTimes(foo, x){
	return function() {
		for(var i = 0; i < x; i++){
			foo(i)
		}
	};
}

var three = FireXTimes(function(c){
	console.log('HEEEEJ ' + c)
}, 3)

