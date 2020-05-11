import React from "react";

import { Container, Jumbotron, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <div>
      <div>
        <Jumbotron>
          <h1>Login</h1>
        </Jumbotron>
      </div>
      <div>
        <Container>
          <Form>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Login;
