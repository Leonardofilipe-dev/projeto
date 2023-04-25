//crie uma classe que simule uma conta no banco deve conter propriedade saldo e metodos deposito e saque em javascript

class ContaBancaria{
    constructor(saldo){
        this.saldo = saldo
    }

    deposito(valor){
        this.saldo += valor
    }

    saque(valor){
        this.saldo -= valor
    
    }
    
}

let conta = new ContaBancaria(2000)

conta.deposito(2000)

console.log(conta.saldo)

conta.saque(500)

console.log(conta.saldo)


  