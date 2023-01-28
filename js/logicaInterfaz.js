document.querySelector('#btnRegistrarPersona').addEventListener('click', registrar);
mostrarDatos() //llamo a la función desde aquí para que funcione


//con esta función registraré a las personas que quiera guardar como contacto de emergencia
function registrar(){
    let aNuevaPErsona = [],
        sTelefono = '',
        sNombre = '';

    sTelefono = document.querySelector('#txtTelefono').value;
    sNombre = document.querySelector('#txtNombre').value;

    aNuevaPErsona.push(sTelefono,sNombre);
    registroPersonaEnSistema(aNuevaPErsona);
    mostrarDatos();
};




function mostrarDatos(){
    var personas = getListaPersonas(),
        tbody = document.querySelector('#tblPersonas tbody');

    tbody.innerHTML = ''; //lo colocamos aquí para que la tabla esté vacía al momento de agregar un nuevo usuario.

    for(let i = 0; i < personas.length; i++){
        let fila = document.createElement('tr'),
            celdaTelefono = document.createElement('td')
            celdaNombre = document.createElement('td');
        
            celdaTelefono.innerHTML = personas[i][0];
            celdaNombre.innerHTML = personas[i][1];

            fila.appendChild(celdaTelefono);
            fila.appendChild(celdaNombre);

            tbody.appendChild(fila);
    }
}


