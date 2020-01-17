import React from 'react';
import './App.css';

import Players from "./components/Players"
import NavBar from "./components/NavBar"
function App() {
  return (
    <div className="App">
    <NavBar/>
      <Players/>
    </div>
  );
}

export default App;
