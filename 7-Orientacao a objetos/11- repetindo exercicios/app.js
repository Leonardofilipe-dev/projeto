//crie uma classe que simule uma conta no banco deve conter propriedade saldo e metodos deposito e saque em javascript


// 1 - Criação da classe ContaBancaria
// 2 - Definição do construtor com o saldo inicial da conta

class Conta{
    constructor(saldo){
        this.saldo = saldo
    }

     // 3 - Método para fazer um depósito na conta

     deposito(valor){
        this.saldo += valor
     }

     // Método para fazer um saque na conta

     saque(valor){
        this.saldo -= valor
     }
}




// 4 - Criação de uma nova conta bancária com saldo inicial de 300
let conta = new Conta(300)

// 5 - Faz um depósito de 500 na conta

conta.deposito(500)
// Imprime o saldo atual da conta ()
console.log(conta.saldo)


// Faz um saque de 1000 da conta

conta.saque(500)
// Imprime o saldo atual da conta ()
console.log(conta.saldo)








