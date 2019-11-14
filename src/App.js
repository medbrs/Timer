import React from 'react';
import './App.css';
import Timer from './Timer'

const milliseconds = 1800000;

function App() {
  return (
  <Timer ms={milliseconds}/>
  );
}

export default App;
