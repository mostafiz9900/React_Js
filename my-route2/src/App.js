import React from 'react';
import './App.css';
import styles from './Mycss.module.css';

function App() {
  return (
    <div className="App">
      <h1 className="textStyle">Test app csss</h1>
      <h1 className={styles.textStyle2}>Test app csss</h1>
 
    </div>
  );
}

export default App;
