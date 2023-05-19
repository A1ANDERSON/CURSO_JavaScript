/* WHILE, primero se evalua la condicion y luego se ejecuta */
let contador = 0;
while (contador < 10) {
  console.log(contador);
  contador++;
}

/* DO WHILE, se ejecuta al menos una vez */
contador = 0;
do {
  console.log(contador);
  contador++;
} while (contador < 10);

/* FOR */
let i = 0;

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let numeros = [10, 20, 30, 40, 50, 60, 80, 90];

for (let j = 0; j < numeros.length; j++) {
  console.log(numeros[j]);
}

/* --------------------------------- */

const ander = {
  nombre: "Ander",
  apellido: "Ramos",
  edad: 23,
};

/* For-in especial para objetos, va a iterar las propiedades de una clase

for (const key in object) {
  
}
*/
for (const propiedad in ander) {
  console.log(`Key: ${propiedad}, Value:${ander[propiedad]}`);
}

/* For-of es para arreglos, cadenas, cualquier elemento iterable etc. 
for (const iterator of object) {
  
}
*/
for (const elemento of numeros) {
  console.log(elemento);
}

let cadena = "Hola mundo";

for (const caracter of cadena) {
  console.log(caracter);
}
