/* 
    Clase 31
*/

console.log(
  window
); /* Ventana flotante "mensaje"  solo sale la opcion de aceptar*/ /* Ventana flotante "mensaje" pero con aceptar y cancelar y devuelve un verdadero o falso*/ /* Este valor se almacena obviamente */
/* window.alert(
  "Hola esto es una alerta"
); */
/* window.confirm(
  "Hola esto es una confirmacion"
); */
/* window.prompt(
  "Hola esto es un aviso y le permite al usuario ingresar un valor"
); */

/* OJO
  podemos poner sin necesidad del windows, ejemplo: 
    alert("");
    confirm("");
    prompt("");
*/
/* alert,confirm,prompt son metodos */
let alerta = alert("Hola esto es una alerta");
  confirmacion = confirm("Esto es una confirmacion");
  aviso = prompt("Hola esto es un aviso y le permite al usuario ingresar un valor");

console.log(alerta);
console.log(confirmacion);
console.log(aviso);