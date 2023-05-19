/* Las clases no reciben parametros si no atraves del contructor */

class Animal {
  //El constructor es un metodo especial que se ejecuta en el momento de instanciar la clase
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  //Metodos
  sonar() {
    console.log("Hago sonidos por que estoy vivo");
  }

  saludar() {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}

class Perro extends Animal {
  /* Con extends vamos a heredar de clase animal */
  constructor(nombre, genero, tamanio) {
    //con el metodo super() se manda a llamar el constructor de la clase padre
    super(nombre, genero);
    this.tamanio = tamanio;
  }

  /* Sobreescritura */
  sonar() {
    console.log("Soy un perro y mi sonido es un ladrido");
  }

  ladrar() {
    console.log("Guaaau guauuu!!!!!!!");
  }
}

const mimi = new Animal("Mimi", "Hembra"),
  scooby = new Perro("Scooby", "Macho", "Gigante");

console.log(mimi);
console.log(scooby);
mimi.saludar();
mimi.sonar();
scooby.saludar();
scooby.sonar();
scooby.ladrar();
