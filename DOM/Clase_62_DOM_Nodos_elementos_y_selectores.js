//Los comentarios de html son un nodo
//Las etiquetas son otro tipo de nodo
//Los textos tambien son otro tipo de nodo

//METODOS QUE YA NO SE UTILIZAN
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));

console.log(document.getElementById("menu")); //Aun se utiliza
console.log(document.querySelector("#menu")); //Este reemplaza a los 3 de arriba pero en optimizacion es un poco lento ya que tiene que validar que es, si es una id, clase o etiqueta.
console.log(document.querySelector("a")); //querySelector solo trae al primero que se encuentra si queremos que nos traiga todos tenemos que escribir querySelectorAll
console.log(document.querySelectorAll("a"));
//Podemos aplicar ciertos metodos de los arreglos como length, forEach, [], y hasta imprimir sus desendientes
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li"));
