import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'asdas1443', name: 'Max', age : 28 },
      { id: '12fwe1233', name: 'Manu', age : 29 },
      { id: 'qas23df32', name: 'Stephanie', age : 26 },
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // DON'T DO THIS...
    // this.state.persons[0].name = 'Maximilian'
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 },
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    console.log('HELLO')
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    })

    const person = { ...this.state.persons[personIndex] }
    // or...
    // const person = Object.assig({}, this.state.persons[personIndex])

    person.name = event.target.value

    const persons = [ ... this.state.persons ]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    // this safely copies values of persons to const persons
    // const persons = this.state.persons.slice()
    // this is same as above (in ES6 syntax)
    const persons =[...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render() {
    // inline styling
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null

    if (this.state.showPersons) {
       persons = (
        <div>
          {this.state.persons.map((person, index) => { // you get index param for free
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
       )

      // change button color to red upon showing Persons
       style.backgroundColor = 'red'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
