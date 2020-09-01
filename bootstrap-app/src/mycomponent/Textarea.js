import React, { Component } from 'react';

class Textarea extends Component {
    constructor(){
        super();
        this.state={
            desc:"js, a tool for email addres. The email validator attempts to make sure the input is a valid email address. So, install the library first via npm install --save validate",
            userinput:""
        }

    }
    onChangeHendelar=(event)=>{
        var myText=event.target.value;
        this.setState({userinput:myText});
    }
    render() {
        return (
            <div>
                <textarea onChange={this.onChangeHendelar} placeholder="Your Message"/>
                <p>{this.state.userinput}</p>
            </div>
        );
    }
}

export default Textarea;