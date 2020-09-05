import React, {Component} from 'react';
import  {Switch,Route} from "react-router-dom";
import Home from "./pages/home";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import NotFound from "./pages/NotFound";


class Myroute extends Component {
    render() {
        return (
            <div>
                 <Switch>
                     <Route exact path="/" component={Home}/>
                     <Route exact path="/page1" component={Page1}/>
                     <Route exact path="/page2" component={Page2}/>
                     <Route exact path="/page3/:userName" component={Page3}/>
                     <Route component={NotFound}/>
                 </Switch>
            </div>
        );
    }
}

export default Myroute;