import React, { useState } from "react";

import { Container, Jumbotron, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../Assets/Register.scss";

import { withRouter } from "react-router-dom";

const Register = (props) => {
  console.log("props", props);
  // Untuk menyimpan State Register
  const [user, setUser] = useState({
    name: "",
    email: "",
    no: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  // // Untuk menyimpan State Nama
  // const [name, setName] = useState("");
  // console.log("name", name);

  // // Handle Change Nama
  // const handleChangeName = (event) => {
  //   setName(event.target.value);
  // };

  // // Untuk menyimpan State Email
  // const [email, setEmail] = useState("");
  // console.log("email", email);

  // // Handle Change Email
  // const handleChangeEmail = (event) => {
  //   setEmail(event.target.value);
  // };

  // // Untuk menyimpan State No HP
  // const [no, setNo] = useState("");
  // console.log("no", no);

  // // Handle Change No HP
  // const handleChangeNo = (event) => {
  //   setNo(event.target.value);
  // };

  // // Untuk menyimpan State Password
  // const [password, setPassword] = useState("");
  // console.log("password", password);

  // // Handle Change Password
  // const handleChangePassword = (event) => {
  //   setPassword(event.target.value);
  // };

  // Handle Add Register pada Button Register
  const handleAddUser = (event) => {
    event.preventDefault();
    // const newUser = [
    //   ...user,
    //   { text: name },
    //   { text: email },
    //   { text: no },
    //   { text: password },
    // ];
    // setUser(newUser);
    // setName("");
    // setEmail("");
    // setNo("");
    // setPassword("");
    // const Users = { name: name, email: email, no: no, password: password };
    localStorage.setItem("user", JSON.stringify(user));
    props.history.push("/login");
    if (user) return alert("Register berhasil!");
  };

  return (
    <div>
      <div>
        <Jumbotron className="jumbotronRegister">
          <h1>Register Account</h1>
        </Jumbotron>
      </div>
      <div>
        <Container className="containerRegister">
          <Form className="form">
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Enter your Name"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>No. Handphone</Form.Label>
              <Form.Control
                type="number"
                name="no"
                value={user.no}
                onChange={handleChange}
                placeholder="Enter your Phone Number"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </Form.Group>
            <Button
              className="px-4"
              variant="primary"
              onClick={handleAddUser}
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

export default withRouter(Register);
