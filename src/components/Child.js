import React from 'react'

function Child(props) {
    return (
        <div>
            {/* to pass props from child to parent use arrow function  */}
            <button onClick={() => props.greetHandler('child')} >Click Me!</button>
        </div>
    )
}

export default Child
