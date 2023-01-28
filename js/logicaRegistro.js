var listaPersonas = //supongamos que ya se registraron estas personas
[
    ['925136575','Betzabeth Baptista'],
    ['966293870','Mirtha Espiritu'],
    ['983719114','Milton Gaspar'],
];



function registroPersonaEnSistema(pNuevoUsuario){

    listaPersonas = getListaPersonas();
    listaPersonas.push(pNuevoUsuario);

    localStorage.setItem('listaPersonasLS',JSON.stringify(listaPersonas));

}

function getListaPersonas(){
    let listaPersonasLocal = JSON.parse(localStorage.getItem('listaPersonasLS'));
    if(listaPersonasLocal == null) {
     listaPersonasLocal = listaPersonas;
    }
    return listaPersonasLocal;
    
}