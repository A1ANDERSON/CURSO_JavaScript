/* const saludar = function () {
  console.log(`Hola`);
}; */

/* Funcion declarada */
function saludar() {
  console.log(`Hola`);
}

saludar();

/* Arrow functions "Funcion flecha"*/
const saluda = (nombre) => console.log(`Hola ${nombre}`);

saluda("Anderson");

/* const sumar = function (a, b) {
  return a + b;
}; */

const sumar = (a, b) => a + b;

console.log(sumar(9, 9));

const funcionDeVariasLineas = () => {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
};

funcionDeVariasLineas();

const numeros = [1, 2, 3, 4, 5];

/* numeros.forEach(function (el, index) {
  console.log(`${el} esta en la posicion ${index}`);
}); */

numeros.forEach((el, index) =>
  console.log(`${el} esta en la posicion ${index}`)
);

/* Objeto
No se puede utilizar las arrow function dentro de un objeto literal por el contexto this
*/
const perro = {
  nombre: "Kenai",
  ladrar() {
    console.log(this);
  },
};

perro.ladrar();
