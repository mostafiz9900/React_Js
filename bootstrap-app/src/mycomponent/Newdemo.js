import React, { Component } from 'react';
import ReactDom from 'react-dom'

class Newdemo extends Component {
    MyFun(){
var containerId=document.getElementById("MyId");
var elementId=<h2>MY Name Is Hashan .... i am from react dom</h2>
var callBack=function(){
    alert("I am call back")
}
ReactDom.render(elementId,containerId,callBack);
    }
    render() {
        return (
            <div>
                <h2 id="MyId">I am Mostafiz</h2>
                <button onClick={this.MyFun} className="btn btn-success" type="button">Button</button>

            </div>
        );
    }
}

export default Newdemo;