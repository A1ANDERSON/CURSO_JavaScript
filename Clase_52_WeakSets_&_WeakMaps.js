//Los WeakSets y WeasMAps tienen alguna carencia no podemos iterar sobre los valores ni recorrerlos ni con for or ni forEAch, tampoco utilizar el clean, se tienen que eliminar de uno en uno, ni tampoco verificar su tamanio.
//Solo aceptan referencias debiles osea solo objetos

//const ws = new WeakSet([1,2,3,3,4,5,true,true,false,false,{},{}, "hola",  "HOla"]) , no se puede agregar todos de golpe, si no uno por uno

const ws = new WeakSet();

let valor1 ={"valor1":1};
let valor2 ={"valor2":2};
let valor3 = {"valor3":3};

ws.add(valor1);
ws.add(valor2);

console.log(ws);

//los podemos evaluar

console.log(ws.has(valor1));
console.log(ws.has(valor3));

//eliminar un objeti del ws
ws.delete(valor2);
console.log(ws);

ws.add(valor2);
ws.add(valor3);
console.log(ws);

setInterval(()=>console.log(ws),1000);

setTimeout(()=>{
    valor1=null;
    valor2=null;
    valor3=null;
},5000)