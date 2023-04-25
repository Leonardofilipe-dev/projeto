class Carro {
    constructor(marca, cor, gasolinaRestante, eficiencia) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.eficiencia = eficiencia; // km por litro
    }

    dirigir(distancia) {
        const gasolinaConsumida = distancia / this.eficiencia;
        if (this.gasolinaRestante < gasolinaConsumida) {
            console.log("Gasolina insuficiente para percorrer a distância desejada");
            return;
        }
        this.gasolinaRestante -= gasolinaConsumida;
    }

    acelerar(distancia) {
        this.dirigir(distancia);
        if (this.gasolinaRestante < 0) {
            this.gasolinaRestante = 0;
        }
    }
}

let carro = new Carro("BMW", "Red", 10, 10); // eficiência de 10 km por litro

console.log(carro);
carro.acelerar(50);
console.log(carro);


