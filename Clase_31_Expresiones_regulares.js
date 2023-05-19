/* Clase 32
  Expresiones Regulares
*/

/* 
Expresiones Regulares
  Son una secuencia de caracteres que forma un patron de busqueda, principalmente utilizada para la busqueda de patrones de cadenas de caracteres

  | https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular
  | https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
*/

let cadena =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea dicta perferendis quisquam, tenetur odit et dolorem ad consequuntur illum ipsum minus dolore sequi neque nostrum facere soluta quas nihil!. Hola 56";
/* Funcion constructora */
//let expReg = new RegExp("lorem", "ig");

//console.log(expReg.test(cadena));
/* Verificar que la expresion regular exista dentro de la cadena (devuelve un boleano, true to false)*/
/* Le pasamos dos parametros, el primero es la palabra a buscar y el segundo se aplica una expresion y de eso dependera lo que se hara, por ejemplo con la "i" ignoramos minisculas y mayusculas, "ig" significa no te detengas con la primera coincidencia, la "g" significa que va a buscar en todas*/

//console.log(expReg.exec(cadena));
/* Devuelve un arreglo */

let expReg2 = /lorem/gi; /* Lo mismo que lo de arriba, es mas comoda */
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));

let expReg3 = /\d/gi; /* Busca un numero en el texto */
let expReg4 = /[0-9]/gi; /* Busca numeros en x rango */
let expReg5 =
  /lorem{1,2}/gi; /* Cuantas veces esta esa palabra dentro de un rango, si no especificiamos el segundo valor se va a infinito,en el parrafo y devuelve un booleano */
