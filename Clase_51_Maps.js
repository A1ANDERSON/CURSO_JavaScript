//Los maps
//NO es un objeto primitivo, es un objeto iterador, casi como una coleccion de datos como un diccionario 
//Los maps son objetos que nos permiten tener valores de llave valor, pero en los maps podemos generar llaves que no sean cadenas de texto como un null, undefined, boolean etc (pero esto no es muy aconsejable)
let mapa = new Map();
//Agregar valores

//Forma 1
mapa.set("nombre","Anderson");
mapa.set("apellido", "Ramos");
mapa.set("edad", 35);

console.log(mapa);
console.log(mapa.size)  //Numero de elementos
console.log(mapa.has("correo")) //Saber si existe
console.log(mapa.has("nombre"))
console.log(mapa.get("nombre")) //Obtener los valores

mapa.set("nombre", "Anderson Vicente"); //Cambiar el valor de un elemento
console.log(mapa.get("nombre")) 

mapa.delete("apellido") //Eliminar un elemente

mapa.set(19,"diecinueve")
mapa.set(false,"falso")
mapa.set({},{});

console.log(mapa); 

//Recorrer un map
for(let[key,value] of mapa){
    console.log(`Llave:${key}, Valor:${value}`);
};

console.log("------FORMA 2--------")
//FORMA 2
const mapa2 = new Map([
    ["nombre", "Ramses"],
    ["edad", "5"],
    ["animas", "perro"],
    [null, "nulo"]
])

console.log(mapa2);

console.log("-----------------")
const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);