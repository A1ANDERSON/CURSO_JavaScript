/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */

/* const capicua = (numero) => {
  let num;
  numero = numero.toString();

  num = numero.split("").reverse().join("");

  if (num == numero) {
    console.info("Es un numero capicua");
  } else {
    console.warn("No es un numero capicua");
  }
};

capicua(2002);
capicua(1830); */

function capicua(numero) {
  let num;

  numero = numero.toString();

  num = numero.split("").reverse().join("");

  console.log(typeof numero);
  console.log(num);

  if (num === numero) {
    console.log("Es un numero capicuo");
  } else {
    console.warn("No es un numero capicuo");
  }
}

capicua(2002);
capicua(1982);
