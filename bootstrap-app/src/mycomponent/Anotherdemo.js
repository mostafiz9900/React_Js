

import React, { Component } from 'react';
import ReactDom from 'react-dom'

class Anotherdemo extends Component {

    changeImg(){
        var getImg=document.getElementById("imgId");
ReactDom.findDOMNode(getImg).src="https://www.publicdomainpictures.net/pictures/370000/t2/australia-travel-poster-1596964136Z2v.jpg";
    }
    render() {
        return (
            <div>
                <button onClick={this.changeImg} className="btn btn-warning" type="button">Change Image</button>
                <br/>
                <img id="imgId" src="https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png" alt=""></img>
            </div>
        );
    }
}

export default Anotherdemo;