/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]. */

function elevarAlCuadrado(array) {
  let resultado = [];
  let i;
  for (i = 0; i < array.length; i++) {
    resultado.push(array[i] * array[i]);
  }

  return resultado;
}

let numeros = [1, 4, 5];
console.info(elevarAlCuadrado(numeros));
