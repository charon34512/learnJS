var form = document.querySelector('#myForm'),
	fields = form.querySelectorAll("[data-error]"),
	div = document.querySelector('.container')

function displayError(array){

	var ul = document.createElement('ul')
	


	if( div.querySelector('ul')){
		div.removeChild(div.childNodes[1])
	}

	array.forEach( function(element){
		li = document.createElement('li')
		li.textContent = element;
		ul.appendChild(li)
	})

	form.parentNode.insertBefore(ul, form)
}


form.addEventListener('submit', function(e){

	e.preventDefault();
	var errors = []

	for (var i = 0; i < fields.length; i++) {
		var field = fields[i]

		if ( field.type === 'text' ){
			if ( field.value === '' ){
				errors.push(field.dataset.error)
			}
		} else if ( field.type === 'email') {
			// console.log(field.value.indexOf('@'))
			if ( field.value.indexOf('@') === -1 ){
				errors.push(field.dataset.error)
			}
		} else if ( ( field.type === 'select-one' ) || ( field.type === 'textarea' ) ) {
			if ( field.value === ''){
				errors.push(field.dataset.error)
			}
		}

	};

	if ( errors.length ){
		displayError(errors)
	} else {
		form.submit();
	}
	// console.log(errors)

})