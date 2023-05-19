/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. */

/* function menorMayorArray(array) {
  let i;
  let min = [];
  let max = [];

  for (i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    } else if (array[i] > max) {
      max = array[i];
    }
  }
  return [max, min];
}

const numeros = [1, 4, 5, 99, -60];
const num = [-10, 5, 543, -123];

console.info(menorMayorArray(numeros));
console.info(menorMayorArray(num));
 */

/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. */

const numMenorMayor = function (array) {
  let min = [],
    max = [];
  let i;

  for (i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    } else if (array[i] > max) {
      max = array[i];
    }
  }

  return {
    max,
    min,
  };
};

console.log(numMenorMayor([1, 4, 5, 99, -60]));
