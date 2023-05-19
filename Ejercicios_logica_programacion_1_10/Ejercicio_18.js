/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */

const contarLetras = (cadena = "") => {
  cadena = cadena.toLocaleLowerCase();
  let vocales = 0,
    consonantes = 0;

  for (letra of cadena) {
    if (/[aeiou]/.test(letra)) {
      vocales++;
    }

    if (/[abcdfghjklmnpqrstvwxyz]/.test(letra)) {
      consonantes++;
    }
  }

  return console.info({
    cadena,
    vocales,
    consonantes,
  });
};

contarLetras("Hola mundo");
