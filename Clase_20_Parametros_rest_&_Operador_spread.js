/* Parametro REST 
Agregar parametros de forma infinita, para usarlo ponemos tres puntos suspensivos antes de la ultima variable
*/
function sumar(a, b, ...c) {
  let resultado = a + b;

  c.forEach(function (n) {
    resultado += n;
  });

  return resultado;
}

/* 
arreglo.forEach(function(elemento) {
  // Código a ejecutar para cada elemento
});
*/

console.log(sumar(1, 2));
console.log(sumar(1, 2, 3));
console.log(sumar(1, 2, 3, 4));
console.log(sumar(1, 2, 3, 4, 5));
console.log(sumar(1, 2, 3, 4, 5, 6));
console.log(sumar(1, 2, 3, 4, 5, 6, 7));

/* ---------------------------- */
/* Operador Spread Operator
  Se ejecuta en cualquier sentencia de nuestro codigo
*/
const arr1 = [1, 2, 3, 4, 5],
  arr2 = [6, 7, 8, 9, 0];

console.log(arr1, arr2);

const arr3 = [...arr1, ...arr2];
console.log(arr3);
