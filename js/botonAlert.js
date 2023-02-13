//Llamo a los botoenes de borrar y alerta
const borrarLS = document.getElementById('delete-LS');


//Creo evento para borrar localStorage
borrarLS.addEventListener('click', () => {
	swal({
        title: `Borraste a tus contactos`,
        text: 'Actualiza para verificar',
        icon: "success",
    });
    
    localStorage.clear();

});
