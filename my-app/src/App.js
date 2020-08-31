import React from 'react';
import './App.css';
import Hello from './mycomponents/Hello';
import Welcome from './mycomponents/Welcome';


function App() {
  return (
    <div className="App">
       <Hello name="Minhan" age="11"></Hello>
      <Welcome name="class 1"></Welcome>

    </div>
  );
}

export default App;
