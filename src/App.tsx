import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

//import components
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery'
import Battle from './components/Battle/Battle'
import AddHamster from './components/AddHamster/AddHamster'
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

      
              <Route path="/gallery">
               <Gallery />
              </Route>I’m 
              
               <Route path="/add-hamster">
                <AddHamster />
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
