import React from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Jumbotron } from "react-bootstrap";

const Register = () => {
  return (
    <div>
      <div>
        <Jumbotron>
          <h1>Register Account</h1>
        </Jumbotron>
      </div>
      <div>
        <Container>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Name"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>No. Handphone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your Phone Number"
                required
              />
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

export default Register;
