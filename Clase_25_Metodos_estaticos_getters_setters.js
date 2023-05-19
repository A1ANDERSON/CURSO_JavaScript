class Animal {
  //El constructor es un metodo especial que se ejecuta en el momento de instanciar la clase
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  //Atributos

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
    this.raza = null; /* No tiene valor al inicio */
  }

  /* Sobreescritura */
  sonar() {
    console.log("Soy un perro y mi sonido es un ladrido");
  }

  ladrar() {
    console.log("Guaaau guauuu!!!!!!!");
  }

  //Un metodo estatico se pueden ejecutar sin necesidad de instanciar la clase

  static queEres() {
    console.log(
      "Los perros somos animales mamiferos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre"
    );
  }

  //Los setters y getters son metodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase

  /* get hace que los metodos se comporten como propiedades o atributos */
  get getRaza() {
    return this.raza;
  }

  set setRaza(raza) {
    this.raza = raza;
  }
}

Perro.queEres();

const mimi = new Animal("Mimi", "Hembra"),
  scooby = new Perro("Scooby", "Macho", "Gigante");

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();
console.log(scooby.getRaza);
scooby.setRaza = "Gran Danes";
console.log(scooby.getRaza);
