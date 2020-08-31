import React from 'react';
import './App.css';
import MyFun from './mycomponent/Welcome';
import Arrow from './mycomponent/Arrow';
import Statevaluestore from './mycomponent/Statevaluestore';
import User from './mycomponent/User';
import Condition1 from './mycomponent/Condition1';
import Condition2 from './mycomponent/Elimentvariables';

function App() {
  return (
    <div className="App">     
       <MyFun></MyFun>
       <Arrow></Arrow>
       <Statevaluestore/>
       <User></User>
       <Condition1/>
       <Condition2/>
    </div>
  );
}

export default App;
