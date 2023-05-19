/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */

const convertirTemp = function (numero, string = "") {
  let temp;

  if (string == "C" || string == "c") {
    temp = (9 / 5) * numero + 32;
    console.info(` ${temp}°F`);
  } else if (string == "F" || string == "f") {
    temp = (numero - 32) / 1.8;
    console.info(` ${temp}°C`);
  }
};

convertirTemp(0, "C");
convertirTemp(32, "F");
