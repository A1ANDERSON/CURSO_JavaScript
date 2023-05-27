let a = 2;
let c = 7.19;
let d = "5.6";

console.log(a);
/* "toFixed" para mostrar cierto numero de decimales, si es uno se redondeara */
console.log(c.toFixed(1));
console.log(c.toFixed(5));
/* "parseInt" para mostrar solo la parte entera */
console.log(parseInt(c));
/* Realizaremos lo que se llama un "casteo" que es convertir una cadena de texto numerica a tan solo numero */
console.log(parseFloat(c));
console.log(typeof c, typeof d);
console.log(c + parseInt(d));
console.log(c + parseFloat(d));
console.log(c + Number.parseInt(d));
console.log(`-----------`);
console.log(c + parseInt(d));
