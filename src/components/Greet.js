import React from 'react';


//using noraml javascript function

// function Greet () {
//     return <h1>Hello Pranay</h1>
// }

//using arrow function

const Greet = (props) => {
    
    return(
        <div>
            <h1>{props.name} age is {props.age}</h1>
            {props.children}
        </div>
        


    
    ) 
    
    }        


export default Greet;