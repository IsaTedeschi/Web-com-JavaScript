/* CONTINUAÇÃO */

// Área de círculo - A= PI * R^2

let raio = 5
const areaCirc = Math.PI * raio**2

console.log(areaCirc)

/*************************************/

let a = 5
let b = 3
let aux

console.log('a = '+a
    +'\nb = '+b)

aux = a
a = b
b = aux

console.log('new a = '+a
    +'\nnew b = '+b)

// outra forma
let c = 5;
let d = 3;

console.log('c = '+c
    +'\nd = '+d);

[c, d] = [d, c];

console.log('new c = '+c
    +'\nnew d = '+d)