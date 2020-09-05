import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Page2 extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"Mostafizur"
        }
    }

    render() {
        var passData="/page3/"+this.state.name;
        return (
            <div>
                <h1>Page 2</h1>
                <button>
                    <Link to={passData}>Pass name</Link>
                </button>
            </div>
        );
    }
}

export default Page2;