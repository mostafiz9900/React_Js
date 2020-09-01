import React, { Component } from 'react';

class Select extends Component {
    constructor(){
        super();
        this.state={
            city1:"Dhaka",
            city2:"Mirpur",
            city3:"Gulshan",
            city4:"Mohakhali",
            show:"",
            auto:"Mirpur"
        }
    }
    onChangeHendelar=(event)=>{
        var getValue=event.target.value;
        this.setState({show:getValue,auto:getValue});
    }
    render() {
        return (
            <div>
                <p>{this.state.show}</p>
                <select onChange={this.onChangeHendelar} value={this.state.auto}>
                    <option>{this.state.city1}</option>
                    <option>{this.state.city2}</option>
                    <option>{this.state.city3}</option>
                    <option>{this.state.city4}</option>
                   
                </select>
            </div>
        );
    }
}

export default Select;