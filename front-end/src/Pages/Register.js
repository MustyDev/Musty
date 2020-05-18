import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Container, Jumbotron, Button, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../Assets/Register/Register.scss";

import { withRouter } from "react-router-dom";
import RegisterMusisi from "../Components/Register/RegisterMusisi";
import RegisterUser from "../Components/Register/RegisterUser";

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
          <Row className="row-register">
            <Button className="buttonRegister1">
              <Link to="/register" className="buttonRegister">
                Daftar sebagai Musisi
              </Link>
            </Button>
            <Button className="buttonRegister2">
              <Link to="/register-user" className="buttonRegister">
                Daftar sebagai Donatur
              </Link>
            </Button>
          </Row>

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
