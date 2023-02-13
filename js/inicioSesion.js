//Llamo a todos los id y una clase para manipular iniciar sesion
const form = document.getElementById('form');
const usuario = document.getElementById('username');
const password = document.getElementById('password');
const summit = document.getElementById('summit')
const access = document.getElementById('access')

//Con este evento hago la validación de mi formulario 
form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

access.addEventListener('click', ()=> {

	const usuarioValue = usuario.value.trim();
	const passwordValue = password.value.trim();

	if(usuarioValue === '' || passwordValue === '') {
		swal({
			title: "¡No has iniciado sesión!",
			text: "Llena todos los campos para ingresar",
			icon: "error",
		});

		setErrorFor(usuario, 'No puedes dejar el espacio en blanco');


	} else if(passwordValue === ''){
			setErrorFor(password, 'Coloca una contraseña.');

	} else {
		swal({
			title: `Bienvenido ${usuarioValue}`,
			text: 'Acabas de iniciar sesión',
			icon: "success",
		}).then((result)=> {
			if(result.isConfirmed) {
				window.location.href = '/pages/main.html';
			}
		});
	}

})



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
