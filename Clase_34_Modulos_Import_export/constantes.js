/*
 Helo 
 */

export const PI = Math.PI; /* Con export hacemos para exportrar */

export let usuario = "Ander";

//TAMPOCO ESTO NI CON CONST NI CON LET, SI NO CON el export default debajo

/* export default const password = "qwerty"; */

const password = "qwerty";
//export default password;
/*
No se puede exportar variables como export default const password = "qwerty", si no tenemos que poner export default abajo de la variable
 */

export default function saludar() {
  //Se va a exportar por default
  console.log("Hola Modulos +ES6");
}

const hello = () => console.log("Hola");

//OJO SOLO UN DEFAULT NO MAS DE UNO
/* export default class Saludar{
  constructor(){
    console.log("Hola Modulos +ES6");
  }
} */
