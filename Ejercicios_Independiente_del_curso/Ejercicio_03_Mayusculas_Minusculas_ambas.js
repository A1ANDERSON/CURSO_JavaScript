/* Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */

const formadaMinMayAmbas = (array) => {
  if (/^[a-z]+$/.test(array)) {
    console.log(`La cadena ${array} contiene solo minusculas`);
  } else if (/^[A-Z]+$/.test(array)) {
    console.log(`La cadena ${array} contiene solo mayusculas`);
  } else {
    console.log(`La cadena ${array} contiene tanto mayusculas como minusculas`);
  }
};

formadaMinMayAmbas("perrito");
formadaMinMayAmbas("ALAMBRE");
formadaMinMayAmbas("CaidA");
