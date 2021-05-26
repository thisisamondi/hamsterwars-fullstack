import React from 'react';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Gallery /> 
      </header>
    </div>
  );
}

export default App;
