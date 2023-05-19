/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */

function promedio(numeros) {
  let suma = 0,
    promedio;

  for (let i = 0; i < numeros.length; i++) {
    suma = numeros[i] + suma;
  }

  promedio = suma / numeros.length;

  return promedio;
}

let numeros = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

/* let result = promedio(numeros); */

console.info(promedio(numeros));
