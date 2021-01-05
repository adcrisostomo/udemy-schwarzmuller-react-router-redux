import React from 'react'
import styled from 'styled-components'

// styled.div and everything within `` returns a valid React component
const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return (
        <StyledDiv>
            <p onClick={props.click}>I'm { props.name } and I am { props.age } years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} /> {/* React/JS automatically passes event as parameter (ergo a default object) in changed */}
        </StyledDiv>
    )
}

export default person