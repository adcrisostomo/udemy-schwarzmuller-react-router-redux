const person = {
    name: 'Max'
}

const secondPerson = person

person.name = 'Manu'

console.log(secondPerson) // outputs '[object Object] { name: 'Manu' }
// because secondPerson stores the pointer to the person variable...
// ...not the value of the person