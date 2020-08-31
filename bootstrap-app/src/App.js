import React from 'react';
import './App.css';
import MyFun from './mycomponent/Welcome';
import Arrow from './mycomponent/Arrow';
import Statevaluestore from './mycomponent/Statevaluestore';

function App() {
  return (
    <div className="App">     
       <MyFun></MyFun>
       <Arrow></Arrow>
       <Statevaluestore/>
    </div>
  );
}

export default App;
