// COMEÇO DOS CONCEITOS

/*****************************************/
// Escrita simples - como exibir 
console.log('Teste com string')
console.log('Número'+1)
console.log('Soma de número '+ (1+2))
console.log('Conca'+'tenação')
console.log('Junta','frases')
console.log('Com números -',2)


/*****************************************/
// Bloco de Código - usado quando 'se acontecer alguma coisa, realizar o bloco'
{
    console.log('Primeiro bloco')
}


/*****************************************/
// Criação de variável
var nome = 'caneta'
var qnt = 10
var value = 6.4
var total = qnt + value
var teste = qnt + nome //nesse caso é concatenado

console.log(value)
console.log(total)
console.log(nome)
console.log('o tipo de', nome, 'é',typeof(teste))

// Outra forma de criar variáveis 'let'
let data1 = 10
let data2 = 20
let data3 = 90

console.log('Número '+data1
    +', Número '+ data2
    +', Número '+data3)

    
// Constante - não pode mudar os valores
const a = 3

/*****************************************/
// Tipos de dados
let numero = 5
let float = 2.5 //apesar de ser real, ele é dito como número, igual int
let boolean = true
let string = 'String'
let list = [1,2,3,4]

console.log('Tipo: número - '+ typeof numero
    + '\nfloat - '+ typeof float
    + '\nboolean - '+typeof boolean
    + '\nstring - '+typeof string
    + '\nlist - '+typeof list)



