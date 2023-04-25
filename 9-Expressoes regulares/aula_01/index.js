//Verificando de na variavel tem a palavra "test". Co console vai imprimir true em caso de verdadeiro
//e false se for falso, no exemploa abaixo usei as duas opções.


// ***Forma 1 de fazer***
let reg1 = new RegExp("test")

console.log(reg1.test("tem test"))
console.log(reg1.test("banana"))


// ****Forma 2 e mais indicada para fazer***
let reg2 = /teste/;
console.log(reg1.test("tem test"))
console.log(reg1.test("banana"))