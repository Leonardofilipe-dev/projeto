const person = {
  hand: 2,  
}

console.log(Object.getPrototypeOf(person))
console.log(Object.getPrototypeOf(person) === Object.prototype) 

console.log(person.hasOwnProperty("Hands"))

const newPerson = Object.create(person)

console.log(newPerson.hand)