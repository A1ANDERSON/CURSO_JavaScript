
const iterable = [1,2,3,4,5];

//Accedemos al iterador del iterable
const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);

/* console.log(iterador.next());   //Nos devuelve un objeto
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next()); */

let next = iterador.next();

//
while(!next.done){
    console.log(next.value);
    next = iterador.next(); //Volvemos a asignar el valor de next al siguiente iterador .next, como una reasignacion con el siguiente valor
}