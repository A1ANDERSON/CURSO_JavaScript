/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */

function invertirCadena(cadena = "") {
  if (!cadena) {
    console.warn("No ingresaste una cadena");
  } else {
    console.info(cadena.split("").reverse().join(""));
    //split necesita un separador pero tambien podemos solo pasarle un parametro que es la cadena, entonces ponemos un string vacio split("") cuando no indicamos un caracter hacemos que cada caracter sea una nueva posicion en el elemento
    //reverse nos invierte la cadena o arreglo reverse()
    //join convierte el arreglo a string y nos pide un separador pero para este caso solo le pasaremos un parametro entonces le pasamos las comillas vacias join("")
  }
}

invertirCadena("");
invertirCadena("Hola Mundo");
invertirCadena("Por Dios que me voy a convertir en un profesional");

let frase = prompt("Ingrese una frase");

const invertirFrase = function (frase = "") {
  let nuevafrase;

  nuevafrase = frase.split("").reverse().join("");

  console.log(nuevafrase);
};

invertirFrase(frase);

// REVERSE : https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
// JOIN : https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join
