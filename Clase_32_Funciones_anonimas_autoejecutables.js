/* Funcion Anonima Autoejecutable */

(function () {
  console.log("Mi peimer IIFE");
})();

(function (d, w, c) {
  /* d,w,c son parametros */
  console.log("Mi segunda IIFE");
  console.log(d);
  console.log(w);
  c.log("Este es un console.log");
})(
  document,
  window,
  console
); /*En esta segunda funcion anonima lo que hacemos es asignar document a "d", window a "w" y document a "c" */

//Formas de escribir las funciones Anonimas autoejecutables

//Clasica
(function () {
  console.log("Version Clasica");
})();

//La Crockford (Javascript the good parts)
((function () {
  console.log("Version Crockford");
})());

//Unaria
+function(){
  console.log('Version Unaria');
}();

//Facebook
!function(){
  console.log('Version Facebook');
}();