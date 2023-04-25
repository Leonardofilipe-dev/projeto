// dentro da contante está numetos de 1 a 6 no rimeiro metodo deu true porque na string tem um numero "3"
// No segundo metodo deu false pois na string tem o numero 9 que não está entre 1 a 6

const reg1 = /[123456]/

console.log(reg1.test("Tem um numero 3"))
console.log(reg1.test("Tem um numero 9"))



