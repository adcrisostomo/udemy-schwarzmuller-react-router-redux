import React, { useEffect } from 'react'
import classes from './Cockpit.module.css'

const Cockpit = (props) => {
    /* EQUIVALENT TO componentDidMount() */
    /* useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        // can have HTTP request here...
        setTimeout(() => {
            alert('Saved data to cloud!')
        }, 1000)
    }, []) // empty array == no dependencies == no reruns of useEffect() after the 1st run... */
    
    /* EQUIVALENT TO componentWillUnmount() */
    // empty array in 2nd param means run only once

    /* useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        // can have HTTP request here...
        setTimeout(() => {
            alert('Saved data to cloud!')
        }, 1000)
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect')
        }
    }, []) */

    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        // can have HTTP request here...
        const timer = setTimeout(() => {
            alert('Saved data to cloud!')
        }, 1000)
        return () => {
            clearTimeout(timer)
            console.log('[Cockpit.js] cleanup work in useEffect')
        }
    }, [])

    /* EQUIVALENT TO componentWillUnmount() */
    // no 2nd param means run every render cycle
    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect')
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect')
        }
    })

    // NOTE: array with elements in 2nd param mean useEffect firing is conditional

    const assignedClasses = []
    let btnClass = ''

    if (props.showPersons) {
        btnClass = classes.Red
    }

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red) // classes = ['red']
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold) // classes = ['bold'] or classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                alt={props.showPersons.toString()}
                onClick={props.clicked}
            >
                Toggle Persons
            </button>
        </div>
    )
}

export default React.memo(Cockpit)