import React from 'react';
import './App.css';
import Myroute from "./components/myroute";
import Mynavigetion from "./components/mynavigetion";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Mynavigetion/>
                <Myroute/>
            </BrowserRouter>


        </div>
    );
}

export default App;
