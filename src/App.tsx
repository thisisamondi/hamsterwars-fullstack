import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

//import components
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery'
import Battle from './components/Battle/Battle'
import AddHamster from './components/AddHamster/AddHamster'
// import { HamsterItem } from './components/Gallery/Gallery'
import axios from 'axios';

import './App.css';

// const HamsterData: HamsterItem[] = []

function App() {

  axios.get('/hamsters')
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  });


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
