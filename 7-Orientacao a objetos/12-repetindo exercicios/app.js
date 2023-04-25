class Endereco{
    // Propriedades da classe
    constructor(rua, bairro, numero, cidade, estado){
        this.rua = rua
        this.bairro = bairro
        this.numero = numero
        this.cidade = cidade
        this.estado = estado
    }

    // Setter da classe
    set novaRua(novaRua){
        this.rua = novaRua
    }
}

// Instância da classe Endereco
endereco = new Endereco("Av Vereador Emilio Meneghinni", "Vila Antonieta", 135, "São Paulo", "SP")

// Impressão no console do objeto instanciado
console.log(endereco)

// Utilização do setter novaRua para alterar o valor da propriedade rua
endereco.novaRua = "Av Vereador Emilio Meneghini"

// Impressão no console do objeto instanciado, com a propriedade rua atualizada
console.log(endereco)



