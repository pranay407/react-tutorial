import React from 'react';


//using noraml javascript function

// function Greet () {
//     return <h1>Hello Pranay</h1>
// }

//using arrow function

const Greet = (props) => {
    const {name, age} = props
    return(
        <div>
            <h1>{name} age is {age}</h1>
            {props.children}
        </div>
        


    
    ) 
    
    }        


export default Greet;