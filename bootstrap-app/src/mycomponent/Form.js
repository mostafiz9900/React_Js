import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super();
        this.state={
            userName:" "
        }
    }

    onChengeHendelar=(event)=>{
        // var newName=event.target.value;
      var myName=  event.target.name;
      var myValue=event.target.value;
      this.setState({[myName]:myValue})
        // this.setState({
        //     // name:newName
        //     [myName]:myValue
        // })
    }
    onSubmitHeldelar=()=>{
        alert(this.state.userName); 
        
        }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHeldelar}>
                    <p>My First Form</p>
                    <p>{this.state.userName}</p>
                    <input name="userName" onChange={this.onChengeHendelar} type="text" placeholder="Your Nmae"></input><br/>
                    <input type="submit" value="Submit Now"></input>
                </form>
            </div>
        );
    }
}

export default Form;