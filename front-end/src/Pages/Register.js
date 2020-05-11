import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Register = () => {
  return (
    <div>
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
