/* 
En JavaScript, el bloque try-catch se utiliza para manejar errores y excepciones que pueden ocurrir durante la ejecución del código. El bloque try se utiliza para envolver el código que puede generar una excepción, mientras que el bloque catch se utiliza para manejar la excepción y proporcionar una respuesta adecuada al usuario.

Cuando se produce una excepción dentro del bloque try, el control se transfiere inmediatamente al bloque catch. El bloque catch recibe el objeto de excepción generado por la excepción y puede realizar acciones como mostrar un mensaje de error al usuario o tomar medidas correctivas para solucionar el problema.
*/

try {
  console.log("En el Try se agrega el codigo a evaluar");
  noExiste;
  console.log("Segundo mensaje en el try");
} catch (error) {
  console.log("Catch captura cualquier error surgido o lanzado en el try");
  console.log(error);
} finally {
  console.log(
    "El bloque finally se ejecutara siempre al final de un bloque try-catch"
  );
}

try {
  let numero = "y";
  if (isNaN(numero)) {
    throw new Error("El caracter untroducido no es un Numero");
  }

  console.log(numero * numero);
} catch (error) {
  console.log(`Se produjo el siguiente error: ${error}`);
}
