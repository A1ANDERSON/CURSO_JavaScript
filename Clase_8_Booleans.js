let verdadero = true;
let falso = false;
let v = Boolean(true);
let f = Boolean(false);

console.log(verdadero, falso, v, f);
console.log(typeof verdadero, typeof falso);

console.log(Boolean(0)); /* Valor "0" tiende a falso */
console.log(Boolean(-7)); /* Valor "numero negativo" tiende a verdadero */
console.log(Boolean("")); /* Una cadena vacia tiende a falso */
console.log(
  Boolean(" ")
); /* Un espacio en blanco(es caracter) tiende a verdadero*/
