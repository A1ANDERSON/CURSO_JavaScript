
const objUsuarios = {
    [`id_${Math.round(Math.random*100 +5)}`]:"Valor Aleatorio"  //Lo creamos de forma dinamica
};

console.log(objUsuarios);

const usuarios = ["Jon", "Irma", "Miguel", "Kala", "Kenai"];

usuarios.forEach((usuario,index)=> objUsuarios[`id_${index}`] = usuario);   //Asigamos una id de forma dinamica igual

console.log(objUsuarios)