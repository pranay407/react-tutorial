import React, { Component } from 'react'
import Child from './Child';

class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName : 'Parent'
        }

        this.parentHandler = this.parentHandler.bind(this);
    }
    parentHandler(name) {
        alert(`Hello ${this.state.parentName} from ${name} `)
    }
    render() {
        return (
            <div>
                <Child greetHandler={this.parentHandler} />
            </div>
        )
    }
}

export default Parent
