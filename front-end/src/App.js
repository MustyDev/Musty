import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Pages
import Admin from "./Pages/Admin";
import TourCharity from "./Pages/TourCharity";
import About from "./Pages/About";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home"
import Nav from "./Components/Navbar"
import Footer from "./Components/Footbar"

function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/form-tourcharity">
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
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
<Footer />
      {/* <TourCharity /> */}
    </div>
  );
}

export default App;
