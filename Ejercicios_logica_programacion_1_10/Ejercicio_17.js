/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */

/* const calcularAnios = (fecha = undefined) => {
  let hoyMenosFecha, aniosEnMS, aniosHumanos;

  hoyMenosFecha = new Date().getTime() - fecha.getTime();

  aniosEnMS = 1000 * 60 * 60 * 24 * 365;

  aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} anios para el ${fecha.getFullYear()}.`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `Han pasado ${aniosHumanos} anios, desde ${fecha.getFullYear()}.`
      )
    : console.log(`Estamos en el anio actual ${fecha.getFullYear()}`);
};

calcularAnios(new Date(1984, 4, 23));
 */

let calcularAnios = (fecha = undefined) => {
  let hoyMenosFecha, aniosEnMS, aniosHumanos;

  hoyMenosFecha = new Date().getTime() - fecha.getTime();

  aniosEnMS = 1000 * 60 * 60 * 24 * 365;

  aniosHumanos = hoyMenosFecha / aniosEnMS;

  if (Math.sign(aniosHumanos) === -1) {
    console.log(
      `Faltan ${Math.floor(
        Math.abs(aniosHumanos)
      )} años para el ${fecha.getFullYear()}`
    );
  } else if (Math.sign(aniosHumanos) === 1) {
    console.log(
      `Han pasado ${Math.floor(
        aniosHumanos
      )} anios, desde ${fecha.getFullYear()}.`
    );
  }
};

calcularAnios(new Date(2026, 4, 23));
calcularAnios(new Date(1984, 4, 23));
calcularAnios(new Date(2000, 04, 11));
