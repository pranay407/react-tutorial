import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : '',
             topic : 'select'
        }
    }

    nameHandler = (e) =>{
        this.setState({
            name : e.target.value
        })
        console.log(e.target.value)
    }

    topicHandler = (e) => {
        this.setState({
            topic : e.target.value
        })
    }

    submitHandler = (e) =>{
        alert(`${this.state.name} ${this.state.topic}`)
        e.preventDefault()
    }
    
    render() {
        const {name, topic} = this.state
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={this.nameHandler} ></input>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.topicHandler} >
                        <option value='select'>Select</option>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form
