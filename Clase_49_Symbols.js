/* Nuevo tipo de datos en Javascript */
//Es un tipo de dato primitivo, su valor se mantiene privado y de uso interno

//NO podemos utilizar el operador New, si no que mandamos directamente la funcion constructora
//Nos permiten crear identificadores unicos, identificadores de referencia

let id = Symbol("id");  //OJO lo de dentro de los parentesis no es un valor solo es una referencia o una etiqueda

let id2 = Symbol("id2");

console.log(id === id2);  //Devuelve falso por que son diferentes, cada uno es unico

console.log(id, id2);
console.log(typeof id, typeof id2);

//Dentro del corchete es solo un simbolo, ojo como buena practica es considerado guardarlo dentro de una constante("const")
const NOMBRE = Symbol("nombre");
const SALUDAR = Symbol("saludar");

const persona = {
  [NOMBRE]: "Ander",  //Le asignamos un valor a nuestro simbolo
  edad: 35,
};

persona.NOMBRE = "Anderson Ramos";

console.log(persona);
console.log(persona.NOMBRE);  //Aqui creamos una propiedad en la clase con el mismo nombre que el symbol pero no afecta ya que son diferentes y el symbol is private
console.log(persona[NOMBRE]);

//Creamos una funcion en el symbol saludar dentro de la clase persona
persona[SALUDAR] = function () {
  console.log(`Hola`);
};

console.log(persona);

persona[SALUDAR]();

for (let propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad]);
}

//Como listar los simbolos ya que son metodos privados
console.log(Object.getOwnPropertySymbols(persona));