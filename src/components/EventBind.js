import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Hello'
        }
        // 3rd way of binding
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message : 'Welcome'
        })
        console.log(this);
    }
    
    render() {
        return (
            <div>
                {this.state.message}
                {/* first way of binding by adding bind method in front of handler */}
                 <button onClick={this.clickHandler.bind(this)} >click</button>  
                {/* 2nd way is to use arrow function, but it has some performance implication in some scenarios */}
                <button onClick={() => this.clickHandler()} >click</button>
                {/* 3rd way to bind in constructor */}
                <button onClick={this.clickHandler} >click</button>
               

            </div>
        )
    }
}

export default EventBind
