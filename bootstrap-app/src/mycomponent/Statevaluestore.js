
import React, { Component } from 'react'


class Statevaluestore extends Component {
    constructor() {
        super();
        var obj= {  
                name:"Mostafiz",
                age:["28","32","22","38","60",],
                height:"5 feet 7 inch",
                weight:{
                    class5:"29",
                    class6:"33",
                    class7:"44",
                    class8:"55",
                },
            }
        // this.state = {  
        //     name:"Mostafiz",
        //     age:"28",
        //     height:"5 feet 7 inch",
        //     weight:"55",
        // }
        this.state=obj;
    }
    render() { 
        return ( 
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age[2]}</h1>
                <h1>{this.state.height}</h1>
                <h1>{this.state.weight.class6}</h1>
            </div>
         );
    }
}
 
export default Statevaluestore;