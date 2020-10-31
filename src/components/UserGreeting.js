import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            LoggedIn : false
        }
    }
    
    render() {
        //1. if else approach
        // if(this.state.LoggedIn){
        //     return <div>Welcome Pranay</div>
        // }else {
        //     return <div>Welcome Guest</div>
        // }

        //2. Element appraoch

        // let message 
        // if(this.state.LoggedIn){
        //     message = <div>Welcome Pranay</div>
        // }else {
        //     message = <div>Welcome Guest</div>
        // }

        //3. ternary conditional approach

    //    return(
    //        this.state.LoggedIn ?
    //        <div>Welcome Pranay</div>
    //        :
    //        <div>Welcome Guest</div>
    //    )

    //4. short circuit 
        
        return(
            this.state.LoggedIn && <div>Welcome Pranay</div>
        )
        // return (
        //     <div>
        //         {/* There are 4 approaches in react to render ui(conditional rendering) 
        //         1. if/else appraoch
        //         2. Element variable
        //         3. Ternery conditional operator
        //         4. short circuit operator */}

        //         {/* <div>Welcome Pranay</div>
        //         <div>Wwelcome Guest</div> */}
        //         {message}
        //     </div>
        // )
    }
}

export default UserGreeting
