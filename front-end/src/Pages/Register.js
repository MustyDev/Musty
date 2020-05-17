import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Container, Jumbotron, Button, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../Assets/Register/Register.scss";

import { withRouter } from "react-router-dom";
import RegisterMusisi from "../Components/RegisterMusisi";
import RegisterUser from "../Components/RegisterUser";

const Register = () => {
  return (
    <div>
      <Router>
        <div>
          <Jumbotron className="jumbotronRegister darkenImage">
            <Container>
              <h1>Daftar</h1>
            </Container>
          </Jumbotron>
        </div>
        <div>
          <Container>
            <Navbar collapseOnSelect expand="lg" variant="light">
              {/* <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                className="nav"
              />
              <Navbar.Collapse id="responsive-navbar-nav"> */}
              <Nav className="navbar-nav ml-auto mx-auto">
                <Button className="buttonRegister1">
                  {/* <Nav.Link> */}
                  <Link to="/register" className="buttonRegister">
                    Daftar sebagai Musisi
                  </Link>
                  {/* </Nav.Link> */}
                </Button>
                <Button className="buttonRegister2">
                  {/* <Nav.Link> */}
                  <Link to="/register-user" className="buttonRegister">
                    Daftar sebagai Donatur
                  </Link>
                  {/* </Nav.Link> */}
                </Button>
              </Nav>
              {/* </Navbar.Collapse> */}
            </Navbar>
          </Container>
          <Container className="containerRegister">
            <Switch>
              <Route exact path="/register">
                <RegisterMusisi />
              </Route>
              <Route path="/register-user">
                <RegisterUser />
              </Route>
            </Switch>
          </Container>
        </div>
      </Router>
    </div>
  );
};

export default withRouter(Register);
