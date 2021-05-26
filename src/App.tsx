import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery'
import Battle from './components/Battle/Battle'

import './App.css';

function App() {

const [header, setHeader] = useState("HAMSTERWARS");

const showHeader = () => {
}

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <main>
            <Switch>

              <Route path="/battle">
                <Battle></Battle>
              </Route>

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
