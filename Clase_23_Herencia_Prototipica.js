/* Funcion constructora donde asignamos los metodos al prototipo no a la funcion como tal */
function Animal(nombre, genero) {
  //ATRIBUTOS
  this.nombre = nombre;
  this.genero = genero;
}

/* Metodos agregados al prototipo de la funcion constructora */
Animal.prototype.sonar = function () {
  console.log("Hago sonidos por que estoy vivo");
};

Animal.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre}`);
};

/* -------------------------------- */

/* Herencia Prototipica */
function Perro(nombre, genero, tamanio) {
  this.super = Animal; /* Ibvocamos el constructor animal */
  this.super(nombre, genero);
  this.tamanio = tamanio;
}

//Perro esta heredando de Animal
Perro.prototype = new Animal(); /* Nueva instancia de la funcion animal */
Perro.prototype.constructor = Perro;
/* Al igualar al mismo constructor se estara llevando todas las caracteristicas de su prototipo padre que en este caso seria animal */

//Sobreescritura de metodos del prototipo padre en el hijo
Perro.prototype.sonar = function () {
  console.log("Soy un perro y mi sonido es un ladrido");
};

Perro.prototype.ladrar = function () {
  console.log("Guauuu guauuuu !!!!");
};

const snoopy = new Perro("Snoopy", "Macho", "Mediano"),
  lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();
snoopy.ladrar();

lolaBunny.sonar();
lolaBunny.saludar();
