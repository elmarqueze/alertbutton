var listaPersonas = //supongamos que ya se registraron estas personas
[
    ['925136575','Betzabeth Baptista'],
    ['966293870','Mirtha Espiritu'],
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



const enviarAlerta = document.getElementById('enviarAlerta')
enviarAlerta.addEventListener('click', sendWhatsAppMessage)


function sendWhatsAppMessage() {
    swal({
        title: `ALERTA ENVIADA`,
        text: 'Hemos enviado una alerta a tus contactos',
        icon: "warning",
        
    })	

    let message = 'Necesito tu ayuda, he sufrido un accidente';

    // Abre la aplicación de WhatsApp con el número de teléfono y mensaje
    window.open('https://api.whatsapp.com/send?phone=' + listaPersonas[0] + '&text=' + message);  
    
};


