var person = {
	_firstName: 'Tomek',
	_laseName: 'Grochocki',
	_age: 27,
	getName: function(){
		return this._firstName + ' ' + this._laseName;
	},
	getAge: function(){
		return this._age
	},
	setName: function(first, last){
		this._firstName = first || this._firstName;
		this._laseName = last || this._laseName;
	},
	setAge: function(age){
		this._age = (age > 0) ? age : this._age;
	}
}

var array = [1,2,3,4,5,2,6,7,3,34,1,21]
var day = 3

var taskTyp = []


function tasksTypes(deadline, time) {
	
	today = [],
	later = [],
	upcoming = []

    deadline.forEach(function(elem){
     	if( elem <= time){
     		today.push(elem)
     	} else if ( elem >= time + 7 ){
     		later.push(elem)
     	} else {
     		upcoming.push(elem)
     	}
     })

    taskTyp.push(today.length, later.length, upcoming.length)
}



tasksTypes(array, day)
