/* function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 1000)); //Que sea 0 y si no es 0 entonces que sea lo de Math.random() * 100
}

cuadradoCallback(0, (value, result) => {
  console.log("Inicia Callback");
  console.log(`Callback: ${value}, ${result}`);
  cuadradoCallback(1, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(2, (value, result) => {
      console.log(`Callback: ${value}, ${result}`);
      cuadradoCallback(3, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(4, (value, result) => {
          console.log(`Callback: ${value}, ${result}`);
          cuadradoCallback(5, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
          });
        });
      });
    });
  });
}); */

//OTRO EJEMPLO DE RECURSIVIDAD

/* function modify(array, callback) {
  //hacemos algo...
  array.push("midu");
  //despues de hacer algo...
  callback(array);
}

const names = ["gartiel", "vedaskies", "tomimelo"];

modify(names, function (array) {
  console.log(`He modificado el array y ahora es de ${array.length} elementos`);
}); */

function buscar(dni, funcion) {
  setTimeout(() => {
    funcion("Anderson");
  }, 1000);
}

buscar("12345678", (nombre) => {
  console.log(nombre);
});
