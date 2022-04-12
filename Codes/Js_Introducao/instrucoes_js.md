# Tipagem em JS

Regra de uso de dados, quanto mais forte for a tipagem, maior a obrigação da declaração do tipo de dado.
Sendo assim, o JavaScript possui Tipagem fraca, ou seja, se atribuir 1 a uma variável, ela já é interpretada
como uma variavel de numero inteiro

# Variáveis e como declarar

## Tipos primitivos
São dados que as variaveis podem guardar.

## Podemos declarar como:

var - Escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null
let - Escopo local de bloco, pode ter seu valor alterado, se não tiver um valor inicical será tratada como null
const - Escopo local de bloco, somente leitura, o valor inicial é obrigatório e não pode ser alterado

## Escopo

### Escopo global
Quando a variável é declarada fora de qualquer bloco, sua visibilidade fica disponível em todo o código

### Escopo local
Quando a variável é declarada dentro de um bloco, sua visibilidade pode ficar disponível ou não

# Diferenças entre atribuição, comparação e comparação idêntica

 '=' - atribuicao
'==' - comparacao
'===' - Compara tanto o valor quanto o tipo

'&&' - and
'||' - or
'!'  - not