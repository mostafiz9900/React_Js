import React, { Component } from 'react'

class User extends Component {
   constructor(){
       super();
       this.state = {  
           name:"Mostafizur"
       }
   }
   changeName(a){
this.setState(
    {name:a}
)
   }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.changeName.bind(this,"Farzana")} className="btn btn-primary" type="button">Button</button>
            </div>
        );
    }
}

export default User;