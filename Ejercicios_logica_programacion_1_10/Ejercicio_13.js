/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */

const numParImp = (numero) => {
  if (numero % 2 == 0) {
    console.info(`El numero ${numero} es par`);
  } else {
    console.info(`El numero ${numero} es impar`);
  }
};

numParImp(7);
numParImp(8);
numParImp(29);
