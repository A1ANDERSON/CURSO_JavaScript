/* Antes de explicar como funcina el modelo de JavaScript es importante entender algunos conceptos:

  Procesamiento Single thread y Multi thread,
  Operaciones de CPU y Operaciones de I/O,
  Operaciones Concurrentes y Paralelas,
  Operaciones Bloqueantes y No bloqueantes,
  Operaciones Sincronas y Asincronas
*/

/* 
Javascript usa un modelo asincrono y no bloqueante, con un loop de eventos implementado en un solo hilo, (single thread) para operaciones de entrada y salida (input/output)
*/

/* http://latentflip.com/loupe/ */

//Codigo Sincrono Bloqueante, cada operacion se hace de una vez bloqueando el flujo del hilo principial y este hilo queda bloqueado hasta que espera la respuesta cuando esta se procese pasa a la siguiente operacion y asi sucecivamente hasta terminar
(() => {
  console.log("Codigo Sincrono");
  console.log("Inicio");

  function dos() {
    console.log("Dos");
  }

  function uno() {
    console.log("Uno");
    dos();
    console.log("Tres");
  }

  uno();
  console.log("Fin");
})();

//Codigo Asincrono No Bloqueante
(() => {
  console.log("Codigo Asincrono");
  console.log("Inicio");

  function dos() {
    setTimeout(function () {
      console.log("Dos");
    }, 2000);
  }

  function uno() {
    setTimeout(function () {
      console.log("Uno");
    }, 0);
    dos();
    console.log("Tres");
  }

  uno();
  console.log("Fin");
})();
