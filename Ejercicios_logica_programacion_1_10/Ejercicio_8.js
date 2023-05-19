/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

/* Arrow function con un return implicito */
/* const eliminarCaracteres = (texto = "", patron = "") =>
  !texto
    ? console.warn("No ingresaste el texto")
    : !patron
    ? console.warn("No ingresaste un patron de caracteres")
    : //Con replace vamos a reemplazar el primer parametro es el valor a buscar y el segundo es con que lo vamos a reemplazar si no queremos reemplazarlo con nada mandamos un juego de llaves "{}", como primer parametro mandaremos a llamar una instancia de un objeto de tipo expresion regular y haremos que evalue el patron y ademas le pasaremos las banderas "ig" con "i" evitamos que diferencie entre minusculas y mayusculas y con "g" que no se detenga en la primera coincidencia si no que va a ejecutar todas las coincidencias que encuentre y como segundo parametro le pasamos al replace nada :v por que no queremos que lo reemplace con nada
      console.info(texto.replace(new RegExp(patron, "ig"), ""));

eliminarCaracteres();
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"); */

const eliminarCaracteres = function (texto = "", patron = "") {
  let cadenarecortada;
  if (!texto) {
    console.warn("No ingresaste un texto");
  } else if (!patron) {
    console.warn("No ingresaste un patron");
  }

  cadenarecortada = texto.replace(new RegExp(patron, "ig"), "");

  console.log(cadenarecortada);
};

eliminarCaracteres();
eliminarCaracteres("Hola mundo");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
