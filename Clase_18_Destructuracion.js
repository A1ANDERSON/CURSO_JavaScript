const numeros = [1, 2, 3];

/* Sin destructuracion */
let uno = numeros[0];
(dos = numeros[1]), (tres = numeros[2]);

console.log(uno, dos, tres);

/* Con destructuracion */
const [one, two, three] = numeros;
console.log(one, two, three);

const persona = {
  nombre: "Anderson",
  apellido: "Ramos",
  edad: 22,
};

/* Ojo para los objetos es importante que los nombres sean iguales a las propiedades del objeto*/
let { nombre, apellido, edad } = persona;
console.log(nombre, apellido, edad);
