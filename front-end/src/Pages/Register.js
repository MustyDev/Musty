import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Container, Jumbotron, Button } from "react-bootstrap";
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
              <h1>Register Account</h1>
            </Container>
          </Jumbotron>
        </div>
        <div>
          <Container className="containerRegister">
            <Button className="buttonRegister1 px-3">
              <Link to="/register" className="buttonRegister">
                Daftar sebagai Musisi
              </Link>
            </Button>
            <Button className="buttonRegister2">
              <Link to="/register-user" className="buttonRegister">
                Daftar sebagai Donatur
              </Link>
            </Button>
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
