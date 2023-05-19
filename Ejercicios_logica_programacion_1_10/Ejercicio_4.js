/*4) Programe una funcion que repita un texto X veces, pe.MiFuncion(`Hola mundo`,3) devolvera Hola mundo Hola mundo Hola mundo */

let frase = prompt("Ingrese una frase");
let numero = parseInt(prompt("Ingrese el numero de veces a repetir"));

const repetirXveces = (frase, numero) => {
  let i;

  for (i = 1; i <= numero; i++) {
    console.log(frase);
  }
};

repetirXveces(frase, numero);
