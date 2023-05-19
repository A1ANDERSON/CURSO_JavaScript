/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. */

const numPrimo = function (num) {
  let i;
  let cont = 0;

  for (i = 1; i <= num; i++) {
    if (num % i == 0) {
      cont = cont + 1;
    }
  }

  if (cont > 2) {
    console.log(`El numero ${num} es primo`);
  } else {
    console.log(`El numero ${num} no primo`);
  }
};

numPrimo(4);
numPrimo(5);
