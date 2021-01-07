import React, { Component } from 'react'
import Person from './Person/Person'
// import ErrorBoundary from '../containers/ErrorBoundary'

class Persons extends Component {
    /* UPDATE LIFECYCLE METHODS FOR PROP CHANGES */

    // static getDerivedStateFromProps (props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps')
    //     return state
    // }

    // deprecated
    // componentWillReceiveProps (props) {
    //     console.log('[Persons.js] componentWillReceiveProps, props')        
    // }

    shouldComponentUpdate (nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate')

        // shouldComponentUpdate() requires us to return a boolean value
        // this does not deep compare 2 persons, only their memory references
        if (nextProps.persons !== this.props.persons) {
            return true
        } else {
            return false
        }
    }

    getSnapshotBeforeUpdate (prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return { message: 'Snapshot!!!' }
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate')
        console.log(snapshot)
    }

    componentWillUnmount () {
        console.log('[Persons.js] componentWillUnmount')
    }

    render () {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map((person, index) => { // you get index param for free
            // return <ErrorBoundary key={person.id}>
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
            // </ErrorBoundary>
        })
    }
}
export default Persons