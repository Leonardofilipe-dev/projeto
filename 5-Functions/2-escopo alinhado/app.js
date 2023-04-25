const soma = function(n1, n2){
    return n1 + n2
}

console.log(soma(34, 82))



const saudacao = function(nome){
if (nome === "Leonardo") {
    return "Olá, Léo"
}
}

console.log(saudacao("Leonardo"))

//====================================================
//

function habilitacao(){
    
let idade = 18
let cnh = true
if (idade >= 18 && cnh == true){
return "Pode dirigir"
} else{
    return "Não pode dirigir"
}

}

console.log(habilitacao(18, true))
console.log(habilitacao(43, false))
console.log(habilitacao(30, false))
console.log(habilitacao(19, true))
console.log(habilitacao(23, true))
console.log(habilitacao(17, false))
console.log(habilitacao(23, true))
console.log(habilitacao(18, false))
