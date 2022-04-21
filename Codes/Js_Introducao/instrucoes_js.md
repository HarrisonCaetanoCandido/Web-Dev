# Tipagem em JS

Regra de uso de dados, quanto mais forte for a tipagem, maior a obrigação da declaração do tipo de dado.
Sendo assim, o JavaScript possui Tipagem fraca, ou seja, se atribuir 1 a uma variável, ela já é interpretada
como uma variavel de numero inteiro

#### OBS: Sempre que for rodar no terminal do vscode dê o comando npm install prompt-sync

# Variáveis e como declarar

## Tipos primitivos
São dados que as variaveis podem guardar.

## Podemos declarar como:

var - Escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null, faz hoisting
let - Escopo local de bloco, pode ter seu valor alterado, se não tiver um valor inicical será tratada como null, não faz hoisting
const - Escopo local de bloco, somente leitura, o valor inicial é obrigatório e não pode ser alterado, não faz hoisting

## Escopo

### Escopo global
Quando a variável é declarada fora de qualquer bloco, sua visibilidade fica disponível em todo o código

### Escopo local
Quando a variável é declarada dentro de um bloco, sua visibilidade pode ficar disponível ou não

# Diferenças entre atribuição, comparação e comparação idêntica

 '=' - atribuicao
'==' - comparacao
'===' - compara tanto o valor quanto o tipo
'!=' - diferente
'!==' - valor e tipo diferentes

'&&' - and
'||' - or
'!'  - not

# Arrays

let array=['string',1,true] ... let array =['string',1,true,false,['array1'],['array2']...]

## Manipulação de arrays

forEach() - itera um array;
push() - add item no final do array;
pop() - remove item no final do array;
shift() - remove item no início do array;
unshift() - add item no início do array;
indexOf() - retorna o índice de um valor;
splice() - remove ou substitui um item pelo índice;
slice() - retorna uma parte de um array existente;

# Objetos

Dados que possuem propriedades e valores que definem suas características. Deve ser declarado entre chaves "{}".

Ex: Imagine uma xícara azul. Ela tem cor, pode ter vários tamanhos e funções. Pode ser declarada assim:

var xiacara={
    cor:'azul',
    tamanho:'p',
    funcao:tomarCafe()
}

var cor = xicara.cor;
var tamanho = xicara.tamanho;
var funcao = tomarCafe();

# Estruturas condicionais

Instruções para realizar determinadas tarefas a partir de uma condição, seja de decisão ou repetição

Ex: Um jogo precisa mudar o placar toda vez que um jogador marca
pontuação.

if,else - Igual em c

if ternário - Podemos também fazer uma verificação em uma única linha usando o "if" ternário:

Ex:  [condição]?[instrução1(se sim)]:[instrução2(se nao)];

### for
Executa uma instrucao segundo uma condicao ate que ela seja falsa

### for/in
Executa repetição a partir de uma propriedade

### for/of
Executa repeticao a partir de um valor

# Funcoes
Blocos de comandos e instruções para a execução de determinadas tarefas

Ex:

function nomeDaFuncao(){
    ${instrucao};
}

nomeDaFuncao();

## Métodos aritméticos de Js

Number() - converter valores em números

Prompt() - registrar entradas de usuário

Alert() - mostrar mensagem ao usuário

Template Strings - usar strings junto com expressões numericas

# Operadores

## Atribuição

= -> x=y

+= -> x=x+y

*= -> x=x*y

/= -> x=x/y

%= -> x=x%y

#### Hoisting: nome do conceito de atribuir valor a uma variável antes de ela ser declarada, pois ele supõe ser uma variável global

# Estrutura de Dados

Js é uma linguagem de tipagem dinâmica e fraca

### Primitivos

Sem métodos:

Numbers,

Strings,

Booleans,

Null,

Undefined.

### Não primitivos

Objects,

arrays.

## Empty, Undefined e Null
Empty - Variáveis declaradas, mas sem valor

Undefined - Sem tipo, sem valor

Null - Variáveis propositalmente nulas, aqui entra a ideia de falsy, que é o falso por ser nulo, mas não em booleano