//Cadena de texto aka String

let nombre = "Anderson";
let apellido = "Ramos";
let saludo = new String("Hola mundo");
let lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem cumque, illo iure earum repellat soluta amet quas facere necessitatibus consequatur obcaecati saepe et laboriosam molestias sit commodi reiciendis beatae.";

console.log(nombre, apellido, saludo);

console.log(
  nombre.length,
  apellido.length,
  saludo.length
); /* Con length podemos saber el cuantos caracteres contiene nuestras cadenas incluido el espacio */

console.log(
  nombre.toUpperCase(),
  apellido.toLowerCase(),
  lorem.includes("amet"),
  lorem.trim(), //Elimina los espacios en blanco a los extremos
  lorem.split(" "), //El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.
  lorem.split(",")
);
/* Con "toUpperCase" (es un metodo) hacemos que toda la cadena se muestre todo en mayuscula, con "toLowerCase" hacemos que muestre en minuscula, con "includes" hacemos que busque una palabra dentro de la cadena y busque si hay alguna similitud y nos devuelve true o false, con "trim" borramos espacios en blanco que aparecen solo al incio y al final, con "split" podemos convertir una cadena de texto a un arreglo */
