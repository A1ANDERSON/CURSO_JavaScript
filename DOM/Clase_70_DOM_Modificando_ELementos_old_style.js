const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");
$cloneCards = $cards.cloneNode(true); //SI no le pasamos parametros estariamos clonando la estrucutra del nodo padre es decir el section con la clase card, si queremos que copie todo el contenido ponemos true

$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
`;

$newCard.classList.add("card"); //PAra que figure tenga la clase card le agregamos a newcard la clase card

//Reemplazar un elemento
$cards.replaceChild($newCard, $cards.children[2]);

//INsertarla antes de un noto que tomemos como referencia
$cards.insertBefore($newCard, $cards.firstElementChild); //firstElementChild seria usar el correcto, ojo no firstCHhild por que el primer nodo hijo es un texto que es la identacion

//Eliminar
$cards.removeChild($cards.lastElementChild);

//Clonar
document.body.appendChild($cloneCards);
