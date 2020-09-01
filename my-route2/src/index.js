import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Route, Link, BrowserRouter as Router} from '../node_modules/react-router-dom'
import * as serviceWorker from './serviceWorker';
import About from './pages/About';
import Contract from './pages/Contract';
import Service from './pages/Service';
import Blog from './pages/Blog';

const myrouters=(
<Router>
  <div>
    <ul>
      <li> <Link to="/">Home</Link> </li>
     <li style={{color:"red"}}> <Link to="/about" style={{color:"red"}}>About</Link></li>
     <li><Link to="/contract">Contract</Link></li>
     <li> <Link to="/service">Serviee </Link></li>
     <li><Link to="/blog">Blog </Link></li>  
      
    </ul>
    <Route exact path="/" component={App}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contract" component={Contract}/>
    <Route exact path="/service" component={Service}/>
    <Route exact path="/blog" component={Blog}/>
  </div>
</Router>
);

ReactDOM.render(
  myrouters,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
