console.log(document.documentElement.lang); //Nos trae el dato de lang
console.log(document.documentElement.getAttribute("lang")); //Nos trae el dato de lang

console.log(document.querySelector(".link-dom").href); //Nos trae dirrecion de la pagina que contiene el dato de href
console.log(document.querySelector(".link-dom").getAttribute("href")); //Nos trae el dato de href

//Reemplazar valores en etiquetas
document.documentElement.lang = "en"; //Para poner un nuevo valor a los atributos
console.log(document.documentElement.lang);
//Otra forma de reemplazar
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener"); //Para evitar que sea inseguro o hackeado, que no haya una dependencia entre las ventanas que abramos
$linkDOM.setAttribute(
  "href",
  "https://www.youtube.com/watch?v=ol4HDHBgf28&ab_channel=Mrfukendo"
);

console.log($linkDOM.hasAttribute("rel")); //Evaluar si existe el atributo rel, nos devolvera un false o un true
//Remover un atributo
$linkDOM.removeAttribute("rel"); //Removemos el atributo
console.log($linkDOM.hasAttribute("rel")); //Verificamos

//Data-Attributes
console.log($linkDOM.getAttribute("data-description")); //imprimir en la consola el valor del atributo "data-description" de un elemento HTML específico.
console.log($linkDOM.dataset); //la propiedad dataset de un elemento del DOM para imprimir en la consola todos los atributos de datos (data-*) asociados a ese elemento.
console.log($linkDOM.dataset.description); //Lo mismo que la linea 30

$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribete a mi canal y comparte";
console.log($linkDOM.dataset.description);

console.log($linkDOM.hasAttribute("data-id"));
console.log($linkDOM.removeAttribute("data-id"));
console.log($linkDOM.hasAttribute("data-id"));
