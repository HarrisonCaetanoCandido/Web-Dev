// npm install prompt-sync

//solução 1

function verificapalindromo(string){
    if(!string) return "string inexistente";

    return string.split("").reverse().join("")===string; //split - separa todas as letras retornadas em um array; reverse - reverte a posicao dos valores no array; join - junta todos os elementos do array em uma string, sem espaço no caso de ("") 
}

//solução 2
function verificapalindromo2(string){
    if(!string) return "string inexistente";

    for(let i=0;i<string.length/2;i++){
        if(string[i]!==string[string.length-1-i]){
            return false;
        }
    }
    return true;
}

const prompt = require('prompt-sync')(); // vou precisar declarar sempre que rodar no terminal do vscode
let word=prompt('Digite uma palavra: ');
//console.log(verificapalindromo(word));
console.log(verificapalindromo2(word));