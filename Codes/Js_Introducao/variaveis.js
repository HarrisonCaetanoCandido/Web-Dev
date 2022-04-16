alert("Tudo certo jovem!");

//tipos primitivos

// booleano


var VouF = false;
console.log(typeof(VouF)); //imprime

// number 
var numeroqualquer =1;
console.log(number);
console.log(typeof(number));

// string
var nome = 'diana';
console.log(nome);
console.log(typeof(nome));

// var
var variavel = 'martine';
console.log(variavel);

// let
let variavel_2 = 'diana';
console.log(variavel_2);

// const
const constante = 'diana';
console.log(constante);

var escopoglobal = 'global';
console.log(escopoglobal);

function escopolocal(){
    let escopolocalinterno = 'local';
    console.log(escopolocalinterno);
}
console.log(escopolocalinterno); //nao vai ser printado corretamente, pq ela eh uma variavel local, logo:

escopolocal(); // agora sim printa