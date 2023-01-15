//CREARÉ UNA APLICACIÓN WEB PARA LAS PERSONAS QUE SUFRAN ALGÚN ACCIDENTE EN LA CARRETERA Y DESEEN ENVIAR UNA ALERTA
//A SUS CONTACTOS CON UN SOLO CLIC Y QUE EN UN FUTURO PUEDA ESCALAR A ACTIVAR EL WSPP PARA ENVIAR MENSAJES.


/*================ CREAR USUARIOS ================*/

let nombreUsuarios = [];
      

/*============== UTILIZARÉ UN CRUD PARA ESTA SECCIÓN ================*/

//Create
function createProfile() {
  let nombre = prompt("Ingrese su nombre");
  let edad = Number(prompt("Ingrese su edad " + nombre));
  let persona = {
    nombre: nombre,
    edad: edad
  };

  //Se comunicará al usuario que debe ser mayor de edad o de lo contrario, pedir ayuda de un adulto.
  if(persona.edad < 18 ) {
        alert("Eres menor de edad " + nombre + "\n" + ", un adulto debe ayudarte a llenar el formulario.");
    } else {
        alert("Bienvenido " + nombre);
    }
  
  nombreUsuarios.push(persona);
}

//read
function readProfile() {
  let nombre = prompt("Ingrese su nombre");
  let persona = nombreUsuarios.find(alias => alias.nombre === nombre);

  return persona;
}

//update
function updateProfile() {
  let persona = readProfile();

  persona.nombre = prompt("Ingrese su nuevo alias para " + persona.nombre, persona.nombre);
  persona.edad = prompt("Ingrese su nueva edad " + persona.nombre, persona.edad);
}

//delete
function deleteProfile() {
  let nombre = prompt("Ingrese el nombre de la persona que va a borrar");
  nombreUsuarios = nombreUsuarios.filter(persona => persona.nombre === nombre);

  nombreUsuarios.splice(nombre,1);
}

/*============== FIN DE CRUD ================*/




/*================INICIO DE SESIÓN ==============*/

let usuario = prompt("¿Cómo te llamas?");

let ubicacion = confirm("Bienvenido " + usuario);
let activarUbicacion = confirm("Activa tu ubicación " + usuario);


//Si no confirma la activación de ubicación, se le volverá a pedir que lo haga para continuar.

while(activarUbicacion != true){
    alert(usuario + " estás desprotegido")
    activarUbicacion = confirm(usuario + " ,debes activar tu ubicación para continuar.");
}





//Preguntamos y filtramos a las personas que no tengan licencia de conducir.

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



/*============== CREAR NÚMEROS DE CONTACTO DE EMERGENCIA ==============*/
const contactosEmergencia = [];
let contactosMaximo = 3;

//Pido los contactos de emergencia para guardar
for (let i = 0; i <= contactosMaximo; i++) {
    let datoContacto = prompt("Ingresa los datos de tu contacto");
    contactosEmergencia.push(datoContacto);  
}


//Creao una clase constructora para cada persona que se irá guardando.
class NumeroEmergencia {
    constructor(nombre, apellido, relacion, numero){
        this.nombre = nombre;
        this.apellido = apellido;
        this.relacion = relacion;
        this.numero = numero;
    }

    confirmar () {
        alert(this.nombre + "acaba de ser guardado");
    }
}

//Suponemos que se guardaron los siguientes
let contacto1 = new NumeroEmergencia("Betzabeth", "Baptista", "Familia", 928113894);
let contacto2 = new NumeroEmergencia("Simonette", "Marquez", "Familia", 932033864);
let contacto3 = new NumeroEmergencia("Mirtha", "Espíritu", "Familia", 96293476);



//Voy a recorrer mis contactos para ver cuales tengo.
const numEmer = [
    {nombre: 'Betzabeth', apellido: 'Baptista', numero: 928113894},
    {nombre: 'Mirtha', apellido: 'Marquez', numero: 932033864},
    {nombre: 'Simonette', apellido: 'Espíritu',numero: 96293476}
];

console.log(numEmer.some(a => a.nombre == 'Mirtha'));




//Enviar alerta al darle clic al botón

let button1 = document.getElementById("btn1");
button1.onclick = enviarAlertaRoja;

function enviarAlertaRoja() {
   alert("¡Alerta enviada!");
}


let button2 = document.getElementById("btn2");
button2.onclick = enviarAlertaVerde;

function enviarAlertaVerde() {
   alert("Ya saben que estás bien");
}

