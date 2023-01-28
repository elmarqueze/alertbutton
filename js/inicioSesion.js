//Llamo a todos los id y una clase para manipular el registro de usuario
const form = document.getElementById('form');
const usuario = document.getElementById('username');
const password = document.getElementById('password');
const summit = document.getElementById('summit')

//Con este evento hago la validación de mi formulario 
form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});



//Creo esta función para la revisión de cada sección llenada
//llamo el value de cada variable
function checkInputs() {
	// limpio los espacios en blanco con trim
	const usuarioValue = usuario.value.trim();
	const passwordValue = password.value.trim();

	
    //con estos condicionales le digo al DOM que muestre error si no se llenó el campo
	if(usuarioValue === '') {
		setErrorFor(usuario, 'No puedes dejar el espacio en blanco');
	} else {
		setSuccessFor(usuario);
	}
	
	
    //la contraseña es libre a demanda, pueden colocar lo que quieran pero no puede estar vacía
	if(passwordValue === '') {
		setErrorFor(password, 'Coloca una contraseña.');
	} else {
		setSuccessFor(password);
	}
	
}


//función que muestra el error en los campos del form
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

//función que muestra que llenó todo exitósamente
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
