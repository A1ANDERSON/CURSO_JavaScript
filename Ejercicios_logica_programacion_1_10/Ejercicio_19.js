/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero. */

function validarNombre(cadena = "") {
  cadena = cadena.toLowerCase();

  if (/^[a-zA-Z\s]+$/.test(cadena)) {
    return console.info(`El nombre ${cadena} es valido`);
    /* return true; */
  } else {
    return console.warn(`El nombre ${cadena} es invalido`);
    /* return false; */
  }
}

validarNombre("Anderson Ramos"); // Devuelve: true
validarNombre("Anders0n5 Ram0s"); // Devuelve: false

//EXPRESIONES REGULARES
/* 
la expresión regular /^[a-zA-Z\s]+$/ para validar que la cadena contenga solamente letras y espacios en blanco. Si la cadena cumple con esta expresión regular, se considera que el nombre es válido y devuelve un true

la expresión regular /^\d+$/ para validar que la cadena contenga solamente números. Si la cadena cumple con esta expresión regular, se considera que la cadena contiene solamente números y se devuelve true.

*/
