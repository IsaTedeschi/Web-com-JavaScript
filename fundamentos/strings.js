const var1 = 'Palavras'
const var2 = 'Teste com frases4'
const var3 = 'Num1,Num2,Num3'

//Caractere na posição
console.log(var1.charAt(4))
console.log(var2.charAt(6))
console.log('\n')

//Código da tabela ascii - código ascii do índice 4 (letra v)
console.log(var1.charCodeAt(4))
console.log('\n')

//Qual é a posição do valor
console.log(var1.indexOf('v'))
console.log(var1.indexOf('3')) //se não tem retorna -1
console.log('\n')

//Pega os indices a partir do qual foi falado
console.log(var1.substring(1)) //alavra
console.log(var2.substring(3))
console.log(var1.substring(0,3))
console.log('\n')

//Outra forma de concatenar
console.log('Concatenação com '.concat(var1.concat('!')))
console.log(var1.concat('!'))
console.log('Mais um exemplo de concatenação com '.concat(var1))
console.log('Método tradicional de concatenar: '+var1)
console.log('\n')

//Trocar a primeira letra pela segunda
console.log(var1.replace('a', 'f')) // Palavras, troca o primeiro 'a' por 'f'
//Substituir todos os digitos por outra
console.log(var2.replace(/\d/g, '!'))
//Substituir uma palavra por outra
console.log(var2.replace('Teste', 'A'))
//Substituir todas as palavras/letra por outra
console.log(var1.replace(/a/g, 'f'))
//Substituir todas as palavras e digitos por outra
console.log(var1.replace(/\w/g, 'a'))
console.log('\n')

//Colocar num array uma frase dividida por vírgula
console.log(var3.split(','))