/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */

function textoSeparado(cadena = "", separador = "") {
  if (cadena == "") {
    console.log("No ingresaste una frase");
  } else {
    console.log("Ingresaste una cadena valida");
  }

  return cadena.split(separador);
}
let cadena = prompt("Ingrese una frase");
let separador = prompt("Ingrese el separador");
console.log(textoSeparado(cadena, separador));
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split
