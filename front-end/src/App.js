import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import About from "./Pages/About";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import TourCharity from "./Pages/TourCharity";
import Home from "./Pages/Home";
import Nav from "./Components/Navbar";
import Footer from "./Components/Footbar";
import MenuBar from "./Components/Menubar";
import DetailsCharity from "./Pages/DetailsCharity";
import Donate from "./Pages/Donate";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <MenuBar />
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
          <Route path="/details-charity">
            <DetailsCharity />
          </Route>
          <Route path="/donate">
            <Donate />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
