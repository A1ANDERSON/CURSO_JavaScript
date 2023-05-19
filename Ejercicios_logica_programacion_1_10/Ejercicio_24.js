/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }. */

function ordenarNumeros(arr) {
  // Ordenar el arreglo en forma ascendente
  const arrAscendente = arr.slice().sort();

  // Ordenar el arreglo en forma descendente
  const arrDescendente = arr.slice().sort().reverse();

  // Devolver un objeto con ambos arreglos
  return {
    asc: arrAscendente,
    desc: arrDescendente,
  };
}

const arreglo = [7, 5, 7, 8, 6];
const resultado = ordenarNumeros(arreglo);
console.log(resultado); // { asc: [5, 6, 7, 7, 8], desc: [8, 7, 7, 6, 5] }
