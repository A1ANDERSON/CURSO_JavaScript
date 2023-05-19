//CLASE "COMO FUNCION"
let Animal = function (nombre, edad, color) {
  //Caracteristicas
  this.nombre = nombre;
  this.edad = edad;
  this.color = color;

  //Metodos:
  /* this.duerme = function () {
    console.log("zzzzz");
  };

  this.sePresenta = function () {
    console.log(`Mi nombre es: ${this.nombre}`);
  }; */
};

//ESTO ES UN OBJETO
let perro = {
  //Caracteristicas
  nombre: "Firulais",
  edad: 5,
  color: "negro",

  //Metodo
  dormir: function () {
    console.log("Soy firulais zzzzzzz");
  },
};

console.log(perro);
perro.dormir();

//CLASE COMO UNA CLASE COMO TAL (CLASICA)
class Animal2 {
  constructor(nombre, edad, color) {
    (this.nombre = nombre), (this.color = color), (this.edad = edad);
  }

  /* duerme = function () {
    console.log("ZZzzzzzz");
  }; */
}

let gato = new Animal("Michi", 5, "gris");
/* gato.sePresenta(); */
console.log(gato.color);
console.log(gato.edad);

//-------------Los metodos los creamos afuera mediente prototype y asi optimizamos nuestro codigo--------------
Animal.prototype.duerme = function () {
  console.log(`ZZzzzzzzzzzz(duerme normal)`);
};

Animal2.prototype.duermeMAsProfundo = function () {
  console.log(`zzzzzzzzzzzzzzzzzzzzzzzzz(duerme profundo)`);
};

gato.duerme();

let jirafa = new Animal2("MArtha", 30, "Naranja");
jirafa.duermeMAsProfundo();
