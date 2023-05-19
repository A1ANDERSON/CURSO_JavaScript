/*-------VARIABLES: VAR Y LET---------*/
/* Var es una variable de ambito global globlar, es de mala practica */
var hola = "Hola mundo";
/* Let es de ambito de bloque */
let hello = "Hello World";

console.log(hola);
console.log(hello);

//Ambito de blque
var musica = "Rock";
console.log("Varibale Musica antes del Bloque", musica);
//Esto es un bloque
{
  var musica = "Pop";
  console.log("Varibale Musica dentro del Bloque", musica);
}

console.log("Varibale Musica despues del Bloque", musica);

//Lo mismo pero con let
console.log("-------------------------");
let musica2 = "Rock";
console.log("Varibale Musica antes del Bloque", musica2);
//Esto es un bloque
{
  let musica2 = "Pop";
  console.log("Varibale Musica dentro del Bloque", musica2);
}

console.log("Varibale Musica despues del Bloque", musica2);
