import React, { Component } from 'react'
// ReactJS allows 4 ways of styling...
// 1) Traditional stylesheets
// 2) Inline styling
// 3) Radium and styled-component (e.g. styled.button`some css props here`)
// 4) CSS modules (done by running npm run eject)
// import styled from 'styled-components'
import classes from './App.module.css'
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons'
// import ErrorBoundary from './ErrorBoundary'

// 3) styled-component
/* const StyledButton = styled.button`
    background-color: ${props => props.alt === 'true' ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;

    &:hover {
    background-color: ${props => props.alt === 'true' ? 'salmon' : 'lightgreen'};
    color: black;
}
` */

class App extends Component {
    constructor (props) {
        super(props)
        console.log('[App.js] constructor')
    }

    state = {
            persons: [
                { id: 'asdas1443', name: 'Max', age : 28 },
                { id: '12fwe1233', name: 'Manu', age : 29 },
                { id: 'qas23df32', name: 'Stephanie', age : 26 },
            ],
            otherState: 'some other value',
            showPersons: false
    }

    /*   switchNameHandler = (newName) => {
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
    */

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    })

    const person = { ...this.state.persons[personIndex] }
    // or...
    // const person = Object.assig({}, this.state.persons[personIndex])

    person.name = event.target.value

    const persons = [ ...this.state.persons ]
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
        // 2) inline styling
        /* const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
            backgroundColor: 'lightgreen',
            color: 'black'
            }
        } */
        let persons = null

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler} />

            // change button color to red upon showing Persons
            /* style.backgroundColor = 'red'
                style[':hover'] = {
                    backgroundColor: 'salmon',
                    color: 'black'
                } */
        }

        return (
            <div className={classes.App}>
            <Cockpit
                title={this.props.appTitle}
                showPersons={this.state.showPersons}
                persons={this.state.persons}
                clicked={this.togglePersonsHandler}
            />
            {persons}
            </div>
        );
    }
}

export default App
