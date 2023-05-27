let a = new String("Hola");
//console.log(a);

const b = {};

console.log(b);

/* Dentro de un objeto a las variables se le van a llamar atributos/propiedades, y a las funciones se les llama metodos */

const jon = {
  nombre: "Anderson ",
  apellido: "Ramos",
  edad: 22,
  pasatiempos: ["Correr", "Hacer Ejercicio", "Programar"],
  soltero: false,
  /* Podemos tener un objeto dentro de un objeto */
  contacto: {
    email: "anderson110420@gmail.com",
    twitter: "@Ander01",
    movil: "0989825487",
  },
  /* Saludar es una propiedad y ahi guardamos una funcion */
  saludar: function () {
    console.log(`Hola :)`);
  },
  decirMiNombre: function () {
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} anios y me puedes seguir como ${this.contacto.twitter} en twitter.`
    );
  },
};

console.log(jon);
console.log(jon["nombre"]);
console.log(jon["apellido"]);
/* Es mejor acceder mediante un punto */
console.log(jon.nombre);
console.log(jon.apellido);
console.log(jon.edad);
console.log(jon.soltero);
console.log(jon.pasatiempos[1]);
console.log(jon.contacto);
console.log(jon.contacto.twitter);
jon.saludar();
jon.decirMiNombre();

/* listar las propiedades */
console.log(Object.keys(jon));

/* Nos da los valores, simplemente los valores*/
console.log(Object.values(jon));

/* Para verificar si existe cierta propiedad en el objeto, devuelve true o false */
console.log(jon.hasOwnProperty("nombre"));

console.log(jon.hasOwnProperty("nacimiento"));

/* Agregar atributos al objeto jon */
jon["ubicacion"] = "Mexico";

console.log(jon.ubicacion);

/* Eliminar atributos al objeto jon */
console.log(jon.edad);
delete jon.edad;
console.log(jon.edad);

console.log(jon);

/* Buscador */
function buscarElementoQuimico(simbolo) {
  const simbolosQuimicos = {
    Al: "Aluminio",
    S: "Azufre",
    Cl: "Cloro",
    He: "Helio",
    B: "Boro",
    Li: "Litio",
  };
  return simbolosQuimicos[simbolo];
}

console.log(buscarElementoQuimico("Al"));

/* Verificar si el objeto tiene si o no una propiedad o atributo */
