function checkarNumero(num){
    let number = Number(num)
    if(Number.isNaN(number)){
        alert("Por favor, passe só numeros para o programa!")
    } else{
        return
    }
}

checkarNumero(5)
checkarNumero("sadf")

let number = prompt("Digite um numero")

checkarNumero(number)