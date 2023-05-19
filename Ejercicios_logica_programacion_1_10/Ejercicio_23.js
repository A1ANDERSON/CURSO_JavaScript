/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */

/* function numParImpar(array) {
  let i;
  let pares = [];
  let impares = [];

  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      pares.push(array[i]);
    } else {
      impares.push(array[i]);
    }
  }

  return {
    pares,
    impares,
  };
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(numParImpar(numeros)); */

/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */

const numParImpar = (array) => {
  let par = [];
  let impar = [];
  let i;

  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      par.push(array[i]);
    } else {
      impar.push(array[i]);
    }
  }

  return {
    par,
    impar,
  };
};

console.log(numParImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
