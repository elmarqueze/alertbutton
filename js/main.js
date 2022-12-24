//CREARÉ UNA APLICACIÓN WEB PARA LAS PERSONAS QUE SUFRAN ALGÚN ACCIDENTE EN LA CARRETERA Y DESEEN ENVIAR UNA ALERTA
//A SUS CONTACTOS CON UN SOLO CLIC Y QUE EN UN FUTURO PUEDA ESCALAR A ACTIVAR EL WSPP PARA ENVIAR MENSAJES.



//Inicio de sesión.

var usuario = prompt("¿Cómo te llamas?");

var confirmacion = confirm(usuario + " ¿eres mayor de edad?");
var edad = Number(prompt("¿Cuántos años tienes?"));


//Si coloca mal la edad se repetirá el prompt pidiendo la edad correcta.

while(edad <= 0 || isNaN(edad)){
    var edad = Number(prompt("¿Cuántos años tienes?"));
}



//Se comunicará al usuario que debe ser mayor de edad o de lo contrario, pedir ayuda de un adulto.

if(edad < 18 ) {
    alert("Eres menos de edad " + usuario + "\n" + "Un adulto debe ayudarte a llenar el formulario.");
    }else {
    alert("Bienvenido " + usuario);
}




//Filtramos las personas que no tengan licencia de conducir.

var licencia = prompt("¿Tienes licencia de conducir?");

switch(licencia) {
    case "si":
        var amigos = Number(prompt("¿Cuántos amigos tienes?"));
        break;
    
    case "SI":
        var amigos = Number(prompt("¿Cuántos amigos tienes?"));
        break;
    case "Si":
        var amigos = Number(prompt("¿Cuántos amigos tienes?"));
        break;

    case "Sí":
        var amigos = Number(prompt("¿Cuántos amigos tienes?"));
        break;

    case "sí":
        var amigos = Number(prompt("¿Cuántos amigos tienes?"));
        break;

    default:
        alert("No necesitas esta aplicación.");
}



//Colocan los números de contacto para enviar la alerta.

for (let i = 0; i < amigos; i++) {
    var contactos = Number(prompt("Ingresa un número de contacto: ", 0));    
}



//Enviar alerta al darle clic al botón

let button = document.getElementById("btn");
button.onclick = enviarAlerta;

function enviarAlerta() {
   alert("¡Alerta enviada!");
}

