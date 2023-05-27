const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards"),
  $figure2 = document.createElement("figure");

/* ------Agregamos una etiqueta figure con todos sus atributos etc---- */
$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure); //appendChild significa agregar un hijo

/* ----Figure 2, crear nodo de otra manera---- */

$figure2.innerHTML = `
  <img src="https://placeimg.com/200/200/people" alt="People">
  <figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

/* ------Crear varios nodos */
const estaciones = ["Primavera", "Verano", "Otonio", "Invierno"],
  $ul = document.createElement("ul");

document.write("<h3>Estaciones del Anio</h3>");
document.body.appendChild($ul);

estaciones.forEach((elemento) => {
  const $li = document.createElement("li");
  $li.textContent = elemento;
  $ul.appendChild($li);
});

/* -----Otro Ejemplo----- */

const contienentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
  $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
contienentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

/* ----Otro ejemplo, esta manera es mas optima */
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del Anio</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
//Recuerda un nodo son las etiquetas, otros son los nodos de textos
