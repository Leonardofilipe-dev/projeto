function saudacao(nome){
    if(typeof nome != "string"){
        throw new Error(`O parametro ${nome} precisa ser uma string.`)
    } else{
        console.log(`Olá ${nome}`)
    }
}

saudacao("Leonardo")
saudacao(5)

console.log("teste")
