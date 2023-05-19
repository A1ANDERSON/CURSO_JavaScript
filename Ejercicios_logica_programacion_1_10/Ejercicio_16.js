/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800. */

const descuento = function (numero, porcentaje) {
  let resultado = 0;

  resultado = -1 * ((numero * porcentaje) / 100) + numero;

  return resultado;
};

console.log(descuento(1000, 20));
