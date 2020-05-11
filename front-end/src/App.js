import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Pages
import Admin from "./Pages/Admin";
import TourCharity from "./Pages/TourCharity";
import About from "./Pages/About";
import Register from "./Pages/Register";

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
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>

      {/* <TourCharity /> */}
    </div>
  );
}

export default App;
