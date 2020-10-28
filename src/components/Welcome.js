import React, {Component} from 'react';

class Welcome extends Component{
   render() {
       const {name} = this.props
       return (
           <div>
                <h1>Hello from {name} from Class Component</h1>
                {this.props.children}
           </div>
            
       )
       
   }  
}

export default Welcome;