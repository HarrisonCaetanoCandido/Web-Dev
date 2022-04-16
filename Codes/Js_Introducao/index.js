alert("Tudo certo jovem!");

//tipos primitivos

// booleano
/*

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
/
// array

let array=['string',1,true,['array1'],['array2'],['array3'],['array4']];
console.log(array[0]); // mesma coisa em c, mas se eu deixo só 'array' em console.log ele printa todos os indices

// forEach
array.forEach(function(item,index){console.log(item,index)});

array.push('novo item'); // add item no final do array
console.log(array);

array.pop(); // remove item do inicio
console.log(array);

array.shift(); //remove item do inicio
console.log(array);

console.log(array.indexOf(true));

array.splice(0,3);
console.log(array);

let novoarray = array.slice(0,3);
console.log(novoarray);*/

let object = {string: 'string',number:1, boolean: true, array: ['array'], objectinterno: {objectInterno: 'objeto interno'}};
console.log(object);

var string = object.string;
console.log(string);

var arrayinterno = object.array;
console.log(arrayinterno);

var {string, boolean, objectinterno} = object; // variavel recebe prorpiedades do objeto
console.log(string, boolean, objectinterno);

var jogador1 =0;
var jogador2=0;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores sao validos');
console.log('jogadores invalidos');

if(jogador1>0){
    console.log('jogador 1 marcou ponto');
    placar = jogador1>jogador2;
}else{
    if(jogador2>0){
    console.log('jogador 2 marcou ponto');
}else{
    console.log('ninguem marcou ponto');
}
}

// minuto 7