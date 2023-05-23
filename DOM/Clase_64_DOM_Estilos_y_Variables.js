const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style); //Nos devuelve un mapa con todas las propiedades css, ademas en ese listado nos aparecera en blanco las propiedades que no usamos
console.log($linkDOM.getAttribute("style")); //Nos devuelve en si los estilos que estamos aplicando, sea color, fondo, tipo de letra etc
console.log($linkDOM.style.backgroundColor); //Un estilo en particular
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM)); //NOs tare las propiedades dinamicas de css, a diferencia del $linkDOM.style cuando nos muestra un listado en este aparecen los valores por defecto que aplica el navegador y no en blanco
console.log(getComputedStyle($linkDOM).getPropertyValue("color")); //Acceder a una propiedad en particular con getPropertyValue y ademas no es necesario el window

//COMO ESTABLECER VALORES
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%"; //con notacion de punto
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(window.getComputedStyle($linkDOM));

//Variables CSS-Custom Properties CSS
const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

//Modificar variables
$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor);
