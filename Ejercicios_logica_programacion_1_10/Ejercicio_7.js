/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

/* const palindromo = (palabra = "") => {
  if (!palabra) return console.warn("No ingresaste una palabra o frase");

  palabra = palabra.toLowerCase();
  // El método toLowerCase() devuelve el valor en minúsculas de la cadena que realiza la llamada.

  let alReves = palabra.split("").reverse().join("");

  return palabra === alReves
    ? console.info(
        `Si es palindromo, Palabra original ${palabra}, Palabra al reves ${alReves}`
      )
    : console.info(
        `No es palindromo, Palabra original ${palabra}, Palabra al reves ${alReves}`
      );
};

palindromo();
palindromo("Hola mundo");
palindromo("Salas"); */
let frase = prompt("Ingrese la frase:");

const palindromo = (frase) => {
  let alreves;

  frase = frase.toLowerCase();

  alreves = frase.split("").reverse().join("");

  if (frase === alreves) {
    console.log("Si es un palindromo");
  } else {
    console.log("No es un palindromo");
  }
};

palindromo(frase);
