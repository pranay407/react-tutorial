import React, { Component } from 'react'

class ClassClick extends Component {

    clickListner () {
        console.log('hits me')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickListner} >Hit Me</button>                
            </div>
        )
    }
}

export default ClassClick
