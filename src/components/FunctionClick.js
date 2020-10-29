import React from 'react'

function FunctionClick() {

    function clickListner() {
        console.log('click');
    }
    return (
        <div>
            <button onClick={clickListner} >click</button>
        </div>
    )
}

export default FunctionClick
