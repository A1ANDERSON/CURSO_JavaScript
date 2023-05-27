//POO
/* 
Clase - Modelo a seguir.
Objetos - Es una instancia de una clase.
  Atributos - Es una caracteristica o propiedad del objeto (son variables dentro de un objeto).
  Metodos - Son las acciones que un objeto puede realizar (son funciones dentro de un objeto).
*/

/* Objeto */
const animal = {
  nombre: "Snoopy" /* Atributo */,
  sonar() {
    /* Motodo "Funcion" */
    console.log("Hago sonidos por que estoy vivo");
  },
};

const animal2 = {
  nombre: "Lola Bunny",
  sonar() {
    console.log("Hago sonidos por que estoy vivo");
  },
};

console.log(animal);
console.log(animal2);

/* FUNCION CONSTRUCTORA
  Se construye una sola vez y apartir de ella generamos nuevas instancias u objetos de este tipo de funcion contructora
*/

/* function Animal_(nombre, genero) {
  //ATRIBUTOS de la funcion constructora
  this.nombre = nombre;
  this.genero = genero;

  //METODOS
  this.sonar = function () {
    console.log("Hago sonidos por que estoy vivo ;)");
  };

  this.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`);
  };
} */

/* Funcion constructora donde asignamos los metodos al prototipo no a la funcion como tal */
function Animalitos(nombre, genero) {
  //ATRIBUTOS, ESTO ES LO QUE DEBERIA SOLO QUEDAR
  this.nombre = nombre;
  this.genero = genero;

  //METODOS
  /*
  "OJO SACAMOS LOS METODOS DE LA FUNCION y se las pasamos al prototipo" 
  this.sonar = function () {
    console.log("Hago sonidos por que estoy vivo");
  };
  */
}

const snoopy = new Animalitos("Snoopyy", "Macho"),
  lolaBunny = new Animalitos("Lolaaa Bunny", "Hembra");

//METODOS agregados al prototipo de la funcion constuctor
Animalitos.prototype.sonar = function () {
  console.log("Hago sonidos por que estoy vivo ;)");
};

Animalitos.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre}`);
};

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();

lolaBunny.sonar();
lolaBunny.saludar();
