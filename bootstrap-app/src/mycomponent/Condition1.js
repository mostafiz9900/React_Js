import React, { Component } from 'react'

class Condition1 extends Component {
  constructor(){
      super();
      this.state = { 
          login:true
       }
  }
    render() { 
        if(this.state.login===true){
            return(
                <button className="btn btn-primary" type="button">LOGOUT</button>
            );
        }
        else{
            return(
                <button className="btn btn-primary m4" type="button">Login now</button>
            );
        }
    }
}
 
export default Condition1;