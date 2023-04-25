//Crie uma classe que simula um carrinho de compras de um e-comerce, propriedades itens, 
//quantidade total, valor total, crie os metodos para adicionar e remover carrinho

class CarrinhodeCompras{
    constructor(total){
        this.total = total
        this.item = 20
    }

    adicionar(quantidade){
        this.item += quantidade
    }

    remover(quantidade){
        if(quantidade < 0){
            console.log("Não tem intens para serem removidos")
        }
        this.item -= quantidade

    
    }
    
}

let Carrinho = new CarrinhodeCompras()

Carrinho.adicionar(2)

console.log(Carrinho.item)

Carrinho.remover(1)
console.log(Carrinho.item)

