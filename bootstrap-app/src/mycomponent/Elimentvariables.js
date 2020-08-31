
import React, { Component } from 'react'

class Condition2 extends Component {
    constructor() {
        super();
        this.state = { 
            login:false
         }
    }
    render() { 
        return ( 
this.state.login ? (<h1>Log out</h1>): (<h1>Login now</h1>)
         );
    }
}
 
export default Condition2;