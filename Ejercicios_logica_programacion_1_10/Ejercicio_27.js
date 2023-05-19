/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
            - Todos los datos del objeto son obligatorios.
            - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
              7 restantes números.
            - Valida que el título no rebase los 100 caracteres.
            - Valida que el director no rebase los 50 caracteres.
            - Valida que el año de estreno sea un número entero de 4 dígitos.
            - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
            - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */

class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    //EJECUCION DE METODOS
    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
  }

  //Atributo estatico
  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality - TV",
      "Romance",
      "Sci-Fi, Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  //metodo estatico
  static generosAceptados() {
    return console.info(
      `Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`
    );
  }

  //CREACION DE METODOS

  validarCadena(propiedad, valor) {
    /* Propiedad = titulo de la propiedad(id,titulo,etc) y valor de la propiedad */
    if (!valor) {
      return console.warn(`${propiedad} "${valor}" esta vacio`);
    } else if (typeof valor !== "string") {
      return console.error(
        `${propiedad} "${valor}" ingresado, NO es una cadena de texto`
      );
    } else {
      return true; //Todo bien
    }
  }

  validarLongitudCadena(propiedad, valor, longuitud) {
    if (valor.lenght > longuitud) {
      return console.error(
        `${propiedad} "${valor}" excede el numero de caracteres permitidos (${longuitud}).`
      );
    }

    return true;
  }

  validarNumero(propiedad, valor) {
    if (!valor) {
      return console.warn(`${propiedad} "${valor}" esta vacio`);
    } else if (typeof valor !== "number") {
      return console.error(
        `${propiedad} "${valor}" ingresado, NO es un numero`
      );
    }

    return true;
  }

  validarArreglo(propiedad, valor) {
    if (!valor) {
      return console.warn(`${propiedad} "${valor}" esta vacio`);
    } else if (!(valor instanceof Array)) {
      return console.error(
        `${propiedad} "${valor}" ingresado,No es un arreglo`
      );
    } else if (valor.length === 0) {
      return console.error(` ${propiedad} "${valor}" no tienen datos`);
    }

    for (let cadena of valor) {
      if (typeof cadena !== "string") {
        return console.warn(
          `El valor "${cadena}" ingresado, NO es una cadena de texto`
        );
      }
    }
  }

  //FUNCIONES DE VALIDACION

  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id)) {
      if (!/^([a-z]){2}([0-9]){7}/.test(id)) {
        return console.error(
          `IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes numeros`
        );
      }
    }
  }

  validarTitulo(titulo) {
    if (this.validarCadena("Titulo", titulo)) {
      this.validarLongitudCadena("Titulo", titulo, 100);
    }
  }

  validarDirector(director) {
    if (this.validarCadena("Director", director)) {
      this.validarLongitudCadena("Director", director, 50);
    }
  }

  validarEstreno(estreno) {
    if (this.validarNumero("Anio de Estreno", estreno)) {
      if (!/^([0-9]){4}$/.test(estreno)) {
        return console.error(
          `Anio de Estreno "${estreno}" no es valido, debe ser un numero de 4 digitos`
        );
      }
    }
  }

  validarPais(pais) {
    this.validarArreglo("Pais", pais);
  }

  validarGeneros(generos) {
    if (this.validarArreglo("Generos", generos)) {
      for (let genero of generos) {
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Generos(s) incorrectos "${generos.join(", ")}"`);
          Pelicula.generosAceptados();
        }
      }
    }
  }
}

//Pelicula.generosAceptados();

const peli = new Pelicula({
  id: "tt1234567",
  titulo: "Titulo de la Peli",
  director: "Director de la Peli",
  estreno: 2020,
  pais: ["Ecuador"],
  generos: [],
});
