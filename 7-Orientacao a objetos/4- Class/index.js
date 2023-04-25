let dog = {
    paws: 4,
    races:"Pitbul",
    bark: function(){
        console.log("Au au")
    }
}

let labrador = Object.create(dog)
labrador.bark()

labrador.races = "Labrador"

console.log(labrador.races)
console.log(dog.races)