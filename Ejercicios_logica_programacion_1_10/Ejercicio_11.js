/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

let numero;

numero = parseInt(prompt("Favor ingresar un numero: "));

function factorial(numero) {
  let i,
    acum = 1;

  for (i = 1; i <= numero; i++) {
    acum = acum * i;
  }
  return acum;
}

console.info(factorial(numero));
