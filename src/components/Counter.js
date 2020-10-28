import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    increaseCoun() {
        // this.setState({
        //     count : this.state.count + 1
        // })
        //when you have to update state based on the previous state value pass in function as an argument instead of regular object
        this.setState((prevState) =>({
            count : prevState.count + 1
        }))
        console.log(this.state.count)
    }
    render() {
        return (
            <div>
                <h3>count: {this.state.count}</h3>
                <button onClick={() =>this.increaseCoun()} >click</button>
            </div>
        )
    }
}

export default Counter
