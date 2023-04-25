//01 - Vai aceitar qualquer caracteres//
const pontoRegex = /./

console.log(pontoRegex.test("asd"))
console.log(pontoRegex.test(" "))
console.log(pontoRegex.test("123"))
console.log(pontoRegex.test("as234d"))

//02 - Aceita somente caracteres numericos [0-9]

const dregex = /\d/ // [0-9]

console.log(dregex.test("123fd"))
console.log(dregex.test("123"))
console.log(dregex.test(" "))
console.log(dregex.test("asd"))

//02 - Não aceita numeros, é como se fosse a negação do exemplo anterior [~0-9]

const dregex2 = /\D/ //[~0-9]

console.log(dregex2.test("123fd"))
console.log(dregex2.test("123"))
console.log(dregex2.test(" "))
console.log(dregex2.test("asd"))

//03 - Só aceita caracteres com espaço, taps ou quebra de linhas

const sRegex = /\s/ //[ ]

console.log(dregex2.test("123fd"))
console.log(dregex2.test("123"))
console.log(dregex2.test(" "))
console.log(dregex2.test("asd"))

//04 - Não aceita caracteres com espaço, taps ou quebra de linhas, é a negação do topico anterior

const sRegex2 = /\S/ //[ ]

console.log(dregex2.test("123fd"))
console.log(dregex2.test("123"))
console.log(dregex2.test(" "))
console.log(dregex2.test("asd"))

// 05 - Só aceita numeros e letras [a-z] e [0-9]

const wRegex2 = /\w/

console.log(dregex2.test("123fd"))
console.log(dregex2.test("123"))
console.log(dregex2.test(" "))
console.log(dregex2.test("asd"))

// 06 - Não aceita aceita numeros e letras [a-z] e [0-9] é a negação do numero anterior

const wRegex = /\W/

console.log(dregex2.test("123fd"))
console.log(dregex2.test("123"))
console.log(dregex2.test(" "))
console.log(dregex2.test("asd"))












