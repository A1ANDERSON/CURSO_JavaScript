/*-------Funcion Declarada---------*/

function estoEsUnaFuncion() {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
}

function funcionReturnValor() {
  return "La funcion ha retornado una cadena de texto";
}

function saludar(nombre = "Desconocido", edad = 0) {
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} anios`);
}
//Invocacion de funcion

estoEsUnaFuncion();

let valordefuncion = funcionReturnValor();
console.log(valordefuncion);

saludar("Anderson", 22);
saludar(); /* Cuando esta vacio por defecto se pondra a lo que esta igualado los parametros de la funcion */

/* Funciones declaradas vs funciones expresadas */

funcionDeclarada();

function funcionDeclarada() {
  console.log(
    "Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada"
  );
}

funcionDeclarada();

/* ---------------------------------------------------- */
//Funcion anonima o expresada por que no tiene nombre por que se la asigamos a una variable

funcionExpresada(); /* Esto dara error por que es una funcion anonima o expresada y no puede ser llamada antes  */

const funcionExpresada = function () {
  console.log(
    "Esto es una funcion expresada es decir, una funcion que se le ha asignado como valor a una variable, si invocamos esta funcion antes de su definicion Js nos dira..."
  );
};

funcionExpresada();
