/* 
Break: break se utiliza para salir del bucle for prematuramente, es decir, detener la iteración del bucle y continuar con la ejecución del código que sigue después del bucle.
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let i;
for (i = 0; i < numeros.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(numeros[i]);
}

console.log("------------");

/* 
Continue: se utiliza para omitir una iteración del bucle y continuar con la siguiente
*/

for (i = 0; i < numeros.length; i++) {
  if (i === 5) {
    continue;
  }
  console.log(numeros[i]);
}
