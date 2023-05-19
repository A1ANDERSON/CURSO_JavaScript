let nombre = "Kenai",
  edad = 7;

/* Objeto */
const perro = {
  nombre: nombre,
  edad: edad,
  /* Metodo "Funcion(funcion anonima)" */
  ladrar: function () {
    console.log("guauu guauu!!");
  },
};

console.log(perro);
perro.ladrar();

/* Objeto */
const dog = {
  nombre,
  edad,
  raza: "Callejero",
  /* Metodo "Funcion" nueva forma de declarar */
  ladrar() {
    console.log("guauu guauu guauu!!!");
  },
};

console.log(dog);
dog.ladrar();
