//Una ventaja es que ya no necesitamos la funcion callback que pasavamos como parametro

function cuadradoPromise(value) {
  //Esto del if que estaba aqui abajo es en caso de un error por ejemplo que el usuario nos pase un valor que no es un numero
  if (typeof value != "number") {
    return Promise.reject(`Error, valor "${value}" ingresado no es un numero`);
  }

  //Promesa tiene dos partes, la parte que resuelve(lo positivo en caso de que se cumpla) y la parte que rechaza(reject) la promesa
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

/* 
//Tenemos dos metodos para ir trabajando la asincronia:
then: captura la parte positiva de la promesa
catch: captura el error resultante del reject 
*/

/* el then resive la parte positiva de la promesa osea esto:
  resolve({
        value,
        result: value * value,
      });
  Aparte de eso ahora hemos construido un objeto :)
*/
cuadradoPromise(0)
  .then((obj) => {
    console.log("Inicio Promise");
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(1);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(3);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(4);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(5);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log(`Fin Promise`);
  })
  .catch((err) => console.error(err));
