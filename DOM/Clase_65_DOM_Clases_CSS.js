const $card = document.querySelector(".card");

console.log($card);
console.log($card.className); //Nos devuelve la cadena de texto que tiene el atributo class
console.log($card.classList);
console.log($card.classList.contains("rotate-45")); //Evaluamos si un elemento tiene una clase en particular, devuelve un booleano
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45"); //Quita una clase
console.log($card.classList.contains("rotate-45"));

//toggle funciona como una palanca si el elemento tiene la clase se la quita pero si no la tiene se la agrega

$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");

//Reemplazar una clase
$card.classList.replace("rotate-45", "rotate-135");

//Agregar clases
$card.classList.add("opacity-80", "sepia");

//remover
$card.classList.remove("opacity-80", "sepia");

//agregar
$card.classList.toggle("opacity-80", "sepia");
