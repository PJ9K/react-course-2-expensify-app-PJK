// object destructuring
// const person = {
//   name: 'Andrew',
//   age: 28,
//   location: {
//     city: 'Philadelphia',
//     temp: 92
//   }
// }

// const {name: firstName = 'anonymouse', age} = person // is het zelfde als hieronder
// // const name = person.name
// // const age = person.age
// console.log(`${firstName} is ${age}!`)


// const {city, temp: temperature} = person.location
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`)
// }


const book = {
  title: 'Ego is the enemy',
  author: 'Ryam Holiday',
  publisher: {
    name: 'Pingiun'
  }
}


const {name: publisherName = 'Self-Published'} = book.publisher
console.log(publisherName)


// Array destructuring

const adress = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

const [street, city, state = 'New York', zip] = adress

console.log(`You are in ${city} ${state}>`)


const item = ['coffe (hot)', '$2.00', '$2.5', '$2.75']

const [coffee, ,medium] = item

console.log(`A medium ${coffee} costs ${medium}`)