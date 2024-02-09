const peso1 = 1.0
const peso2 = Number('2.0')
const aval1 = 9.871
const aval2 = 6.871

console.log('Pesos: ',peso1, peso2)
console.log('Sobre o 2.0, ele é inteiro? ',Number.isInteger(peso1))

const total = aval1*peso1 + aval2*peso2
const media = total/(peso1+peso2)

console.log('Média =',media)


// Demonstração de não inteiro
let aux = Number('2.55')
console.log('\nSobre o 2.55, ele é inteiro? ',Number.isInteger(aux)) 

//determina o número de casas decimais em um número real
console.log('\nMédia concatenada: ',media.toFixed(2)) 

//mudar o tipo de uma variável
console.log('Mudando o tipo da média')
console.log('Antes, média é tipo: ', typeof media
    ,'\nAgora é tipo:', typeof media.toString)


// ** Number é uma função