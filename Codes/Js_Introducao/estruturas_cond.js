var jogador1 =1;
var jogador2=0;
var placar;

// if ternario
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores sao validos'):
console.log('jogadores invalidos');

// if
if(jogador1>0){
    console.log('jogador 1 marcou ponto');
    placar = jogador1 > jogador2;
}else{
    if(jogador2>0){
    console.log('jogador 2 marcou ponto');
    placar = jogador2 > jogador1;
}else{
    console.log('ninguem marcou ponto');
}
}

switch(placar){
    case placar= jogador1>jogador2:
        console.log('jogador 1 ganhou');
        break;
    case placar = jogador2 >jogador1:
        console.oog('jogador 2 ganhou');
        break;
        default:
            console.log('ninguem ganhou');
}

let array = ['valor1','valor2','valor3','valor4','valor5'];
let object = {propriedade1: 'valor1',propriedade2: 'valor2',propriedade3:'valor3'}

// for
for(let indice = 0; indice<array.length;indice++){
    console.log(indice);
}

// for/in
//com array
for(let i in array){
    console.log(i);
}

//com object
for(i in object){
    console.log(i);
}

// for/of
//com array
for(i of array){
    console.log(i);
}

//com object
for(i of object.propriedade1){
    console.log(i);
}

// while
var a=0;

while(a<10){
    a++;
    console.log(a);
}

// do-while
do{
    a++ 
    console.log(a);
}while(a<10)