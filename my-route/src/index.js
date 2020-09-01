import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Protfolio from './pages/Protfolio';
import {Route, Link , BrowserRouter as Router} from '../node_modules/react-router-dom'


import * as serviceWorker from './serviceWorker';

const myrouter=(
<Router>
<div>
  <ul>
    <Link to="/">Home</Link> 
    <Link to="/contact">Contract</Link> 
    <Link to="/about">About</Link>     
    <Link to="/portfolio">Portfolio</Link>
  </ul>
  <Route exact path="/" component={App}/>
  <Route path="/contact" component={Contact}/>
  <Route path="/about" component={About}/> 
  <Route path="/portfolio" component={Protfolio}/>
  

</div>

</Router>
);


ReactDOM.render(myrouter,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
