class Mamifero {
    constructor(patas){
        this.patas = patas
        
    }
 
}

let coiote = new Mamifero(4)

console.log(coiote.patas)

class Dog extends Mamifero{
    constructor(patas){
        super(patas, patas)
    }

    latir(){
        console.log("Au au")
    }
}

let pug = new Dog(4, "Pug")
console.log(pug.patas)

