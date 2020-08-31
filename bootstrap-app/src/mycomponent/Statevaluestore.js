
import React, { Component } from 'react'


class Statevaluestore extends Component {
    constructor() {
        super();
        this.state = {  
            name:"Mostafiz",
            age:"28",
            height:"5 feet 7 inch",
            weight:"55",
        }
    }
    render() { 
        return ( 
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>
                <h1>{this.state.height}</h1>
                <h1>{this.state.weight}</h1>
            </div>
         );
    }
}
 
export default Statevaluestore;