let nombre = "Anderson";
let apellido = "Ramos";

//Concatenacion
let saludo = "Hola mi nombre es " + nombre + " " + apellido + ".";

console.log(saludo);

//Interpolcion de variables
//Template string
let saludo2 = `Hola mi nombre es ${nombre} ${apellido}.`;
console.log(saludo2);

let ul =
  "<ul><li>Primavera</li><li>Verano</li><li>Otono</li><li>Invierno</li></ul>";
console.log(ul);

let ul2 = `
<ul>
  <li>Primavera</li>
  <li>Verano</li>
  <li>Otono</li>
  <li>Invierno</li>
</ul>
`;
console.log(ul2);
