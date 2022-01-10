import React from 'react'
const Greet = props => {
    console.log(props)
    return (
        <div>
            <h1>
            Hello {props.name} a.k.a {props.heroName}
            <button>press Button</button>
            </h1>
        </div>
    )
}
export default Greet