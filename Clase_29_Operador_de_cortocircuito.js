/* 
Cortocircuito OR- cuando el valor de la izquierda en la expresion siempre pueda validar a true, es el valor que se cargara por defecto

Cortocircuito ADN - Cuando el valor de la izquierda en la expresion siempre pueda valirar a flase, es el valor que se cargara por defecto
*/
function saludar(nombre) {
  /* Antes se hacia asi cuando no se podia poner nombre = "desconocido" en los parentesis de la funcion */
  nombre = nombre || "Desconocido";
  console.log(`Hola ${nombre}`);
}
console.log();

saludar("Anderson");
saludar();

console.log("cadena" || "Valor de la derecha");
console.log(19 || "Valor de la derecha");
console.log(true || "Valor de la derecha");
console.log([] || "Valor de la derecha");
console.log({} || "Valor de la derecha");
console.log(false || "Valor de la derecha");
console.log(null || "Valor de la derecha");
console.log(undefined || "Valor de la derecha");
console.log("" || "Valor de la derecha");
console.log(-2 || "Valor de la derecha");
console.log(0 || "Valor de la derecha");

console.log(false && "Valor de la derecha");
console.log(null && "Valor de la derecha");
console.log(undefined && "Valor de la derecha");
console.log("" && "Valor de la derecha");
console.log(-2 && "Valor de la derecha");
console.log(0 && "Valor de la derecha");
