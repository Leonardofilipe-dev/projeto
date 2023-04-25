const carro = {
    marca: "BMW",
    acelerar: function(){
        console.log("Vrrrum")
    },
    desacelerar: function(){
        console.log("Reduzi a velocidade")
    },
    setAno: function(ano) {
        this.ano = ano
    },
    getAno: function(){
        return  `O ano do carro é: ${this.ano}`
    },
}

carro.setAno("2020");

console.log(carro.ano); // "2020"

carro.getAno("2018")
console.log(carro.getAno())
