/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */

/* function getRandomInt(min,max) {
  return Math.floor((Math.random() * (max - min +1)) +min);
}

const numeroRandom =  function (min,max){
  return Math.floor((Math.random() * (max - min) + min));
}

const numeroAzar = (min,max) => Math.floor((Math.random() * (max - min) + min));

console.log(getRandomInt(500,600));
console.log(numeroRandom(50,100));
console.info(numeroAzar(10,40)); */

const numeroAleatorio = (min, max) => {
  let numeroRandom;

  numeroRandom = Math.floor(Math.random() * (max - min) + min);

  console.log(numeroRandom);
};

numeroAleatorio(600, 500);
