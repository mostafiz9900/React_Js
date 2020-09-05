import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

class Mynavigetion extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink exact activeStyle={{color:"red"}}  to="/">Home</NavLink></li>
                    <li><NavLink exact activeStyle={{color:"red"}} to="/page1">Page1</NavLink></li>
                    <li><NavLink exact activeStyle={{color:"red"}} to="/page2">Page2</NavLink></li>
                    <li><NavLink exact activeStyle={{color:"red"}} to="/page3">page3</NavLink></li>
                   {/* <li><Link to="/">Home</Link></li>
                    <li><Link to="/page1">Page1</Link></li>
                    <li><Link to="/page2">Page2</Link></li>
                    <li><Link to="/page3">page3</Link></li>*/}
                </ul>
            </div>
        );
    }
}

export default Mynavigetion;