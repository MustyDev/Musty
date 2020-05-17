import React from "react";

import { Container, Jumbotron, Form, Button } from "react-bootstrap";

import "../Assets/Login/Login.scss";

const Login = () => {
  return (
    <div>
      <div>
        <Jumbotron className="jumbotronLogin darkenImage">
          <Container>
            <h1>Masuk</h1>
          </Container>
        </Jumbotron>
      </div>
      <div>
        <Container className="containerLogin">
          <Form className="shadow p-3 mb-5 bg-white rounded">
            <Form.Group>
              <Form.Label>Alamat Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Masukan email anda"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Masukan password anda"
                required
              />
            </Form.Group>
            <Button className="px-4" variant="primary" type="submit">
              Masuk
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Login;
