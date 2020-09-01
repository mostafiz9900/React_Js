import React, { Component } from 'react';

class Signup extends Component {
constructor(){
    super();
    this.state={
        fname:"",
        lname:"",
        email:"",
        mobail:""
    }
}
onChangeHendelar=(event)=>{
var getName=event.target.name;
var getValue=event.target.value;
this.setState({[getName]:getValue});

if(getName==="fname"){
    var namePattern=/^([a-zA-Z]){2,30}$/;
    if(!namePattern.test(getValue)){
this.setState({fname:"First Name is not valid"})
    }

}
if(getName==="lname"){
    var lastNamePattern=/^([a-zA-Z]){2,30}$/;
    if(!lastNamePattern.test(getValue)){
this.setState({lname:"Last Name is not valid"})
    }
}
if(getName==="email"){
    var emailPattern=/\S+@\S+\.\S+/;
    if(!emailPattern.test(getValue)){
this.setState({email:"Email is not valid"});
    }
    
}
if(getName==="mobail"){
    if(!Number(getValue)){
        this.setState({mobail:"Mobail is no valid"})
    }
}

}

    render() {
        return (
            <div>
                <p>First name: {this.state.fname}</p>
                <p>Last name: {this.state.lname}</p>
                <p>Email: {this.state.email}</p>
                <p>Mobail: {this.state.mobail}</p>
                <form>
                    <input onChange={this.onChangeHendelar} name="fname" type="text" placeholder="First Name"></input><br/>
                    <input onChange={this.onChangeHendelar} name="lname" type="text" placeholder="Last Name"></input><br/>
                    <input onChange={this.onChangeHendelar} name="email" type="text" placeholder="Email"></input><br/>
                    <input onChange={this.onChangeHendelar} name="mobail" type="text" placeholder="Mobail Number"></input><br/>
                    <input onChange={this.onChangeHendelar} name="submit"  type="submit" value="Save Now"></input><br/>
                </form>
                
            </div>
        );
    }
}

export default Signup;