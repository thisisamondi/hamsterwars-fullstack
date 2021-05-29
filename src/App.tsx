import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

//import components
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery'
import Battle from './components/Battle/Battle'
// import { HamsterItem } from './components/Gallery/Gallery'

import './App.css';

// const HamsterData: HamsterItem[] = []

function App() {


  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <main>
            <Switch>

              <Route path="/battle">
                <Battle />
              </Route>

              {/* <Route path="/gallery" render={()=> <Gallery items = { HamsterData } />} /> */}
              <Route path="/gallery">
                <Gallery />
              </Route>

              <Route path="/">
                <Home />
              </Route>

            </Switch>
          </main>
        </header>
      </div>
    </Router>
  );
}

export default App;
