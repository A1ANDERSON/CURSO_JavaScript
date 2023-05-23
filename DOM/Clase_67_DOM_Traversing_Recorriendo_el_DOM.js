const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.childNodes);

//referencia a sus hijos
console.log($cards.children);

//un hijo en particular
console.log($cards.children[2]);

//el padre
console.log($cards.parentElement);

//EL primero y el ultimo
console.log($cards.firstChild);
console.log($cards.firstElementChild);

console.log($cards.lastChild);
console.log($cards.lastElementChild);

//El hermano que esta antes t el hermano que esta despues
console.log($cards.previousSibling); //Hermano
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
//Para los ancestros
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));
