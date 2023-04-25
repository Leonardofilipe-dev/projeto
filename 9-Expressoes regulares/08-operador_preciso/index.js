// 08 - Operador de precisão colocar o padrão de digitos conforme pedido.
const cep = /\d{5}-\d{3}/

console.log(cep.test("45443-000"))
console.log(cep.test("asd"))

const phone = /\(\d{2}\)\d{4,5}-\d{4,5}/ 

console.log(phone.test("(11)4543-3452"))















