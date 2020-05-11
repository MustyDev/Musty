import React from "react";


import TourCharity from './Pages/TourCharity'
import Admin from './Pages/Admin'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import TourCharity from "./Pages/TourCharity";
import About from "./Pages/About";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exac path="/form-tourcharity">
            <TourCharity />
          </Route>
          <Route path="/admin">
            <Admin /> 
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
      
      {/* <TourCharity /> */}
    </div>
  );
}

export default App;
