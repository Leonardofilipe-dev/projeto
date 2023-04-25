

class Endereco{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }
    set novaRua(novaRua){
        this.rua = novaRua
    }

    set novoBairro(novoBairro){
        this.bairro = novoBairro
    }
}

let endereco = new Endereco("Rua Padre Justino", "Vl Pirajussara", "São Paulo", "SP")

console.log(endereco)

endereco.novaRua = "Av Coriveu de Azevedo Marques"
console.log(endereco)

endereco.novoBairro = "Butantã"
console.log(endereco)