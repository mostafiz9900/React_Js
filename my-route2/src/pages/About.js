import React, { Component } from 'react';

class About extends Component {
  
    render() {
        const mystyle={
color:"red",
fontFamily:"15px",
backgroundColor:"LightBlue"
        };
        return (
            <div>
               <h1 style={mystyle}>About</h1> 
            </div>
        );
    }
}

export default About;