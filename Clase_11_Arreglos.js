const a = []; //Arreglo
const b = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]];
console.log(a);
console.log(b);
console.log(b.length);
console.log(b[2]);
console.log(b[0]);
console.log(b[3][2]);
console.log(b[3][3][0]);

const c = Array.of("X", "Y", "Z", 9, 8, 7);
console.log(c);

const d = Array(100).fill(false);
console.log(d);

const e = new Array();
console.log(e);

const f = new Array(1, 2, 3, true, false);
console.log(f);

/* Metodos para los arrays */

const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

colores.push("Negro"); /* Agregar un nuevo elemento al final */
console.log(colores);

colores.pop(); /* Quita el ultimo elemento */
console.log(colores);

colores.forEach(function (el, index) {
  console.log(`<li id="${index}"> ${el}</li>`);
}); /* Con forEach podemos recorrer el valor con el primer parametro "el" y el segundo parametro "index o i" el indique que ocupa en el elemento padre */
