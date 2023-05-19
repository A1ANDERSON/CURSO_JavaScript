/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
 */

/* function repetirPalabra(cadena = "", texto = "") {
  if (!cadena) {
    console.warn("No ingresaste una cadena de texto");
  } else if (!texto) {
    console.warn("No ingresaste la palabra a evaluar");
  } else {
    let i = 0,
      contador = 0;

    while (i !== -1) {
      // Si i es diferente a -1 por que el metodo indexOf no detecta el texto que queremos buscar o no lo encuentra en ninguna parte devuelve un -1, si lo encuentra nos devuelve la posicion
      i = cadena.indexOf(texto, i);
      //indexOf no busca letra por leta si no la palabra completa
      console.log(`i es igual a ${i}`);
      //Igualamos la variable i a buscar dentro de cadena y buscamos el texto "indexOf" y recibe dos parametros el primero es la cadena y el segundo que es la posicion que puede ser un numero y lo que quiere decir es que si el texto se encuentra varias veces cual es el que debemoss traer, si se pone 0 es el primer elemento y por eso la i para que recorra

      if (i !== -1) {
        i++;
        contador++;
      }
    }
    return console.info(`La palabra ${texto} se repite ${contador} veces`);
  }
}

repetirPalabra("", "hola");
repetirPalabra("hola mundo adios mundo", "");
repetirPalabra("hola mundo adios mundo", "mundo"); */

//  INDEXOF : https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

let frase = prompt("Ingrese la frase");
let palabra = prompt("Ingrese la palabra a buscar");

const contarPalabras = (frase = "", palabra = "") => {
  let i = 0;
  acum = 0;

  while (i != -1) {
    i = frase.indexOf(palabra, i);

    if (i != -1) {
      i++;
      acum++;
    }
  }

  console.log(
    `El numero de veces que se repitio la palabra ${palabra} fue de ${acum} veces`
  );
};

contarPalabras(frase, palabra);
