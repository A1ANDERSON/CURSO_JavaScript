console.log(Date()); /* Para ver la fechas  */
/* Lo ideal es guardar Date() dentro de una variable, y esta nos muestra el siguiente mensaje:

  Sat May 06 2023 10:38:25 GMT-0500 (hora de Ecuador)

*/
let fecha = new Date();
console.log(fecha);
console.log(fecha.getDate()); /* Dia del mes */
console.log(fecha.getDay()); /* Dia de la semana del domingo a sabado 
D L M M J V S D -> 1234567
*/
console.log(
  fecha.getMonth()
); /* Mes, pero enero es 0, febrero 1 y asi sucesivamente */
console.log(
  fecha.getYear()
); /* Cuantos anios apartir de 1900 por eso en la consola nos da 123 */
console.log(fecha.getFullYear()); /* Anio normalmente */
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());

console.log(fecha.toString()); /* Nos da lo mismo que el date() */
console.log(fecha.toDateString()); /* Solo la fecha */
console.log(fecha.toLocaleString()); /* Fecha y hora mas entendible */
console.log(fecha.toDateString());
console.log(fecha.toLocaleTimeString()); /* Solo la hora */
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate()); /* Fecha en el meridiano */
console.log(fecha.getUTCHours());

let cumpleAnder = new Date(2000, 3, 11);
console.log(cumpleAnder);
