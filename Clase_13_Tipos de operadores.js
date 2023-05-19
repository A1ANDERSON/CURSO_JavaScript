let a = 5 + (5 - 10) * 3;
let modulo = 5 % 2;

console.log(a);
console.log(modulo);

/* Operadores Racionales 
  >,<, >=, <=, ==,===, !=, !==
*/

console.log(8 > 9);
console.log(9 > 8);
console.log(8 >= 9);
console.log(9 >= 8);
console.log(7 < 7);
console.log(7 <= 7);

/* 
  = 1 es asignacion
  ==  2 es comparacion de valores
  === 3 es comparacion de tipo de dato y de valor
*/

console.log(7 == 7);
console.log("7" == 7);
console.log(0 == false);

console.log(7 === 7);
console.log("7" === 7);
console.log(0 === false);

/* Incremento y decremento */

let i = 1;
i = i + 2;

let j = 1;
j /= 3;

console.log(i);
console.log(j);

/* Operadores Logicos

  ! Not:Niega, es decir lo que es true lo vuelve false y viceversa
  || Or: Cuando tengo 2 o mas condificiones, con que una se cumpla, es decir sea verdadera, el OR validara 
  && And: Cuando tengo 2 o mas conficiones, todas tienen que cumplirse es decir ser verdaderas, para quw AND se ejecute
*/

console.log(true);
console.log(!false);
console.log(9 === 9 || "9" === 9);
console.log(9 === 9 && "9" === 9);
