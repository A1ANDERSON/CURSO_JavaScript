/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */

let frase = "Hola mundo";
let numero = 4;

const textoRecortado = function (frase = "", numero = undefined) {
  if (!frase) {
    console.log(`No ingresaste una frase`);
    console.log(frase);
  } else {
    console.log("Ingresaste una frase valida");
  }
  return frase.slice(0, numero);
};

console.log(textoRecortado(frase, numero));
