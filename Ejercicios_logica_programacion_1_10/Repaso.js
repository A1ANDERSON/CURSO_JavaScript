/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */

//FORMA 1
function reemCadena(cadena = "", caracter = undefined) {
  if (!cadena) {
    console.warn("No ingresaste una cadena");
  } else if (caracter === undefined) {
    console.warn("No ingresaste el caracter separador");
  } else {
    console.info(cadena.split(caracter));
  }
}

//FORMA 2
const reemString = (cadena = "", caracter = undefined) =>
  !cadena
    ? console.warn("No ingresaste una cadena")
    : caracter === undefined
    ? console.warn("No ingresaste el caracter separador")
    : console.info(cadena.split(caracter));

reemCadena("", ",");
reemCadena("Hola gente");
reemCadena("Hola mundo", " ");
reemCadena(
  "Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre",
  ","
);
reemString("Hola jejeje", " ");
