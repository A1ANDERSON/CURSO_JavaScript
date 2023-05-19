/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

function validarCorreo(correo = "") {
  if (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(correo)) {
    return console.info(`El correo ${correo} es valido`);
  } else {
    return console.warn(
      `El correo ${correo} no es valido, intente ingresar nuevamente`
    );
  }
}

validarCorreo("anderson.ramos@epn.edu.ec");
validarCorreo("anderson110420@gmail.com");
validarCorreo("anderson*ramos&gmail.com");
validarCorreo("Hola mundo");
