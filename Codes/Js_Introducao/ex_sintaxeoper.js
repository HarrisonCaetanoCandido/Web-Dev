/*
Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é 'soma', que é 'maior/menor' que 10 e 'maior/menor' que 20".
*/

function funcao(num1,num2){
    let soma=Soma(num1,num2);
    if(num1 === num2 && soma > 10 && soma >20){
        alert(`${num1} e ${num2} são iguais. Sua soma é ${soma} que é maior do que 10 e 20`)
    }else{
        if(num1 !== num2 && soma > 10 && soma >20){
            alert(`${num1} e ${num2} não são iguais. Sua soma é ${soma} que é maior do que 10 e 20`)
        }
    }
    if(num1 === num2 && soma > 10 && soma < 20){
        alert(`${num1} e ${num2} são iguais. Sua soma é ${soma} que é maior do que 10 e menor do que 20`);
    }else{
        if(num1 !== num2 && soma > 10 && soma < 20){
            alert(`${num1} e ${num2} não são iguais. Sua soma é ${soma} que é maior do que 10 e menor do que 20`);
        }
    }
    if(num1 === num2 && soma < 20 && soma <10){
        alert(`${num1} e ${num2} são iguais. Sua soma é ${soma} que é menor do que 20 e menor do que 10`);
    }else{
        if(num1 !== num2 && soma < 20 && soma <10){
            alert(`${num1} e ${num2} não são iguais. Sua soma é ${soma} que é menor do que 20 e menor do que 10`);
        }
    }
        if(num1 === num2 && soma < 20 && soma >10){
            alert(`${num1} e ${num2} são iguais. Sua soma é ${soma} que é menor do que 20 e maior do que 10`);
    }else{
        if(num1 !== num2 && soma < 20 && soma >10){
            alert(`${num1} e ${num2} não são iguais. Sua soma é ${soma} que é menor do que 20 e maior do que 10`);
        }
    }
    novaOperacao();
}
function Soma(num1,num2){
    let soma;
    soma=num1+num2
    return soma;
}
function novaOperacao(){
    let opcao=prompt('Deseja fazer outra operação?\n 1- Sim\n 2 - Não');
    if(opcao==1){
        operacao();
    }else if(opcao==2){
        alert('Até mais!')
    }else{
        alert('Digite uma oção válida!')
        novaOperacao();
    }
}
function operacao(){
    var num1=Number(prompt('Digite um número:')),num2=Number(prompt('Digite mais um número:'));
    funcao(num1,num2);
}
operacao();