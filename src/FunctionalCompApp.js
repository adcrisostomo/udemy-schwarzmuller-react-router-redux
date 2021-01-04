import React, { useState } from 'react'
import './App.css'
import Person from './Person/Person'

const app = props => {
  const [personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age : 28 },
      { name: 'Manu', age : 29 },
      { name: 'Stephanie', age : 26 },
    ]
  })

  const [otherState, setOtherState] = useState('some other state')

  const switchNameHandler = () => {
    // DON'T DO THIS...
    // this.state.persons[0].name = 'Maximilian'
    
    // TAKE NOTE...
    // this DOES NOT update/merge old state with new state...
    // rather, it REPLACES old state with new state
    /* setPersonsState({
      persons: [
        { name: 'Maximilian', age : 28 },
        { name: 'Manu', age : 29 },
        { name: 'Stephanie', age : 27 },
      ]
    }) */
    // SO...
    // it is good practice to only have 1 prop in 1 useState call in starting code...
    // ...and call respective setSomeState methods
    setPersonsState({
      persons: [
        { name: 'Maximilian', age : 28 },
        { name: 'Manu', age : 29 },
        { name: 'Stephanie', age : 27 },
      ],
      otherState: personsState.otherState // copy otherState's value
    })
  }

  // render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
  // }
}

export default app;
