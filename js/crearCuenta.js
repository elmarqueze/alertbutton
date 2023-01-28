//Llamo a todos los id y una clase para manipular el registro de usuario
const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const contact = document.querySelector('.contact');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
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
	const emailValue = email.value.trim();
	const contactValue = contact.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
    //con estos condicionales le digo al DOM que muestre error si no se llenó el campo
	if(usuarioValue === '') {
		setErrorFor(usuario, 'No puedes dejar el espacio en blanco');
	} else {
		setSuccessFor(usuario);
	}
	
    //con estos condicionales le digo al DOM que coloque el usuario bien su correo
	if(emailValue === '') {
		setErrorFor(email, 'No puedes dejar el email en blanco');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingresaste un email válido');
	} else {
		setSuccessFor(email);
	}

    //informo al usuario queno puede dejar vacío sus contactos de urgencia
    if(contactValue === '') {
		setErrorFor(contact, 'No puedes dejar los espacio en blanco');
	} else {
		setSuccessFor(contact);
	}
	
    //la contraseña es libre a demanda, pueden colocar lo que quieran pero no puede estar vacía
	if(passwordValue === '') {
		setErrorFor(password, 'Coloca una contraseña.');
	} else {
		setSuccessFor(password);
	}
	
    //confirmación de contraseña
	if(password2Value === '') {
		setErrorFor(password2, 'Confirma tu contraseña');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Contraseñas no coinciden');
	} else{
		setSuccessFor(password2);
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

//función que da instrucciones al usuario para no colocar un correo con errores
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

