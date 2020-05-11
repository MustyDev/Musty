import React, { useState } from "react";

import { Container, Jumbotron, Form, Button } from "react-bootstrap";

const Register = () => {
  // Untuk menyimpan State Register
  const [register, setRegister] = useState([]);

  // Untuk menyimpan State Nama
  const [name, setName] = useState("");
  console.log("name", name);

  // Handle Change Nama
  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  // Untuk menyimpan State Email
  const [email, setEmail] = useState("");
  console.log("email", email);

  // Handle Change Email
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  // Untuk menyimpan State No HP
  const [no, setNo] = useState("");
  console.log("no", no);

  // Handle Change No HP
  const handleChangeNo = (event) => {
    setNo(event.target.value);
  };

  // Untuk menyimpan State Password
  const [password, setPassword] = useState("");
  console.log("password", password);

  // Handle Change Password
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  // Handle Add Register pada Button Register
  const handleAddRegister = (event) => {
    const newRegister = [
      ...register,
      { text: name },
      { text: email },
      { text: no },
      { text: password },
    ];
    setRegister(newRegister);
    setName("");
    setEmail("");
    setNo("");
    setPassword("");
  };

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
                value={name}
                onChange={handleChangeName}
                placeholder="Enter your Name"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={handleChangeEmail}
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>No. Handphone</Form.Label>
              <Form.Control
                type="number"
                value={no}
                onChange={handleChangeNo}
                placeholder="Enter your Phone Number"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={handleChangePassword}
                placeholder="Password"
                required
              />
            </Form.Group>
            <Button
              className="px-4"
              variant="primary"
              onClick={handleAddRegister}
              type="submit"
            >
              Register
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Register;
