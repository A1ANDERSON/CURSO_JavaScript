
//Con el function* le decimos que es un generador, nos permite volver iterables a una funcion
function* iterable(){
    //Yield es como un return
    yield "hola";
    console.log("Hola consola");
    yield "hola 2";
    console.log("Seguimos con mas instrucciones de nuestro codigo");
    yield "hola 3";
    yield "hola 4";
}

let iterador = iterable();

/* console.log(iterador.next());
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next()) */

for(let y of iterador){
    console.log(y)
};

//Los guardamos en un arreglo
const arr = [...iterable()];
console.log(arr);

function cuadrado(valor){
    setTimeout(()=>{
        console.log({valor,resultado:valor*valor})
    }, Math.random()*1000)

    return{
        valor,
        resultado: valor*valor
    }
}