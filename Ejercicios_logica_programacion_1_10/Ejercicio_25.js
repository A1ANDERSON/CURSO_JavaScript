/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]. */

/* function eliminarDuplicados(array) {
  return array.filter(function (item, index) {
    // Devuelve true si el elemento es el primero que aparece
    // en el array o si el índice del elemento actual es igual al
    // índice del primer elemento encontrado
    return array.indexOf(item) === index;
  });
} */

var miArray = ["x", 10, "x", 2, "10", 10, true, true, false, false];
var resultado = eliminarDuplicados(miArray);
console.log(resultado); // ["x", 10, 2, "10", true]

function eliminarDuplicados(array) {
  return Array.from(new Set(array));
  //Set se utiliza para eliminar elementos duplicados
  // Array.from() para convertir el objeto Set resultante en un nuevo arreglo.
}
