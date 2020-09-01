
import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class Refresh extends Component {
    constructor() {
        super();
        this.refreshNow=this.refreshNow.bind(this);
        this.state = {  }
    }
    refreshNow(){
        this.forceUpdate();
    }
    render() { 
        return (  
            <div>
                <h2>{Math.random()}</h2>
               <button onClick={this.refreshNow} className="btn btn-primary" type="button">Refresh Button</button>
            </div>
        );
    }
}
 
export default Refresh;