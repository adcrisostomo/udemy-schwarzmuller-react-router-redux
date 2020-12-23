// ES 6
class Human {
    constructor () {
        this.gender = 'male'
    }

    printGender () {
        console.log(this.gender)
    }
}

// ES 6
class Person extends Human {
    constructor () {
        super()
        this.name = 'Max'
        this.gender = 'female'
    }

    printMyNme () {
        console.log(this.name)
    }
}

// ES 7
class Human {
    gender = 'male'

    printGender = () => {
        console.log(this.gender)
    }
}

// ES 7
class Person extends Human {
    name = 'Max'
    gender = 'female'

    printMyNme = () => {
        console.log(this.name)
    }
}