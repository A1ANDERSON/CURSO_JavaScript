//TEMPORIZADORES

/* 
El método setTimeout() establece un temporizador que ejecuta una función o una porción de código después de que transcurre un tiempo establecido.
*/
console.log("Inicio");

setTimeout(() => {
  console.log("Ejecutando un setTimeout esto se ejecuta una sola vez");
}, 2000); //2000 ms son 2 segundos

/* 
El método setInterval() , ofrecido en las interfaces Window y Worker , llama a una función o ejecuta un fragmento de código de forma reiterada, con un retardo de tiempo fijo entre cada llamada.
*/
/* setInterval(() => {
  console.log(
    "Ejecutando un setInterval esto se ejecuta indefinidamente cada cierto invervalo de tiempo"
  );
}, 1000); */

//Ejemplo de setInterval
/* setInterval(() => {
  console.log(new Date().toLocaleString());
}, 1000);
 */

//Para detener un temportizador utilizamos la funcion clearInterval(temporizador) y le pasamos el nombre de la funcion y OJO para que funcione la funcion debe estar guardada dentro de una varaiable

let temporizador = setInterval(() => {
  console.log(new Date().toLocaleString());
}, 1000);

clearInterval(temporizador);
console.log("Despues del clearTimeout");
