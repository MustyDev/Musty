import React from "react";

<<<<<<< HEAD
import TourCharity from './Pages/TourCharity'
import Admin from './Pages/Admin'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
=======
import TourCharity from "./Pages/TourCharity";
import About from "./Pages/About";

import "bootstrap/dist/css/bootstrap.min.css";
>>>>>>> 1c55d0bcef7cbb617317ed96f047695df7f7b478

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Router>
        <Switch>
          <Route exac path="/form-tourcharity">
            <TourCharity />
          </Route>
          <Route path="/admin">
            <Admin /> 
          </Route>
        </Switch>
      </Router>
=======
      <About />
      {/* <TourCharity /> */}
>>>>>>> 1c55d0bcef7cbb617317ed96f047695df7f7b478
    </div>
  );
}

export default App;
