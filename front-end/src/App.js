import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./Components/Footbar";
import MenuBar from "./Components/Menubar";
import Nav from "./Components/Navbar";
import About from "./Pages/About";
import Admin from "./Pages/Admin";
import DetailsCharity from "./Pages/DetailsCharity";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import TourCharity from "./Pages/TourCharity";
import PrivateRoute from "./PrivateRoutes";

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
          <PrivateRoute path="/form-tourcharity" component={TourCharity} />

          <PrivateRoute path="/admin" component={Admin} />
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
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
