//SET es una estructura similar a un array pero de datos unicos

const set = new Set([1,2,3,3,4,5,true,true,false,false,{},{}, "hola",  "HOla"]);

console.log(set);
console.log(set.size);   //No podemos utilizar lenght, sino size

//De esta forma agregamos elementos pero de uno en uno, lo mismo que en la linea 3
const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2)
set2.add(3);
set2.add(true);
set2.add(false)
set2.add(true);
set2.add({});

console.log(set2)
console.log(set.size);

console.log("------Recorriendo Set--------")
for(item of set){
    console.log(item);
};

console.log("-----Recorriendo Set2-------")
set2.forEach(item => console.log((item)));

console.log("--------------------")
//Acceder a x posicion
//Recuerda no es un arreglo asi que no cuenta desde 0
//tenemos que convertir nuestro set a un arreglo
let arr = Array.from(set)
console.log(arr[0]);
console.log(arr[9]);

//Los sets tienen un metodo especial que nos permiten eliminar errores

set.delete("HOla"); //Solo debemos poner el valor de lo que queremos eliminar y ya

console.log(set)

console.log("-------------------")
//Metodo has, nos ayuda a ver si existe un elemente dentro de un set

console.log(set.has("hola"))
console.log(set.has(19))

console.log("-----------------")
//SI queremos limpiar un set, dejalo vacio sin nada de datos
set2.clear();
console.log(set2);
