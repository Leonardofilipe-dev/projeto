class ContaBancaria{
    constructor(saldoCC, saldoPoupanca, juros){
        this.saldoCC = saldoCC
        this.saldoPoupanca = saldoPoupanca
        this.juros = juros
    }

    deposito(valor){
        this.saldoCC += valor
    }

    saque(valor){
        this.saldoCC -= valor

    }

    transferirPoupanca(valor){
        this.saldoCC -= valor
        this.saldoPoupanca += valor
    }

    transferirCC(valor){
        this.saldoCC -= valor
        this.saldoPoupanca += valor
    }
  
}

let conta = new ContaBancaria(2000, 3000, 1)

console.log(conta)
conta.saque(500)
console.log(conta)

conta.deposito(5000)
console.log(conta)

conta.transferirPoupanca(2000)
console.log(conta)
