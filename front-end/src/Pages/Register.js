import React, { useState } from "react";

import { Container, Jumbotron, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../Assets/Register/Register.scss";

import { withRouter } from "react-router-dom";

const Register = (props) => {
  // console.log("props", props);

  // // Untuk menyimpan State User
  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  //   no: "",
  //   password: "",
  // });

  // // Handle Change pada Input
  // const handleChange = (event) => {
  //   setUser({
  //     ...user,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // // Handle Add Register pada Button Register
  // const handleAddUser = (event) => {
  //   event.preventDefault();
  //   localStorage.setItem("user", JSON.stringify(user));
  //   props.history.push("/login");
  //   if (user) return alert("Register berhasil!");
  //   if (!user) return alert("Harap diisi");
  // };

  return (
    <div>
      <div>
        <Jumbotron className="jumbotronRegister darkenImage">
          <Container>
            <h1>Register Account</h1>
          </Container>
        </Jumbotron>
      </div>
      <div>
        <Container className="containerRegister">
          <Form className="shadow p-3 mb-5 bg-white rounded">
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                // value={user.name}
                // onChange={handleChange}
                placeholder="Enter your Name"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                // value={user.email}
                // onChange={handleChange}
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>No. Handphone</Form.Label>
              <Form.Control
                type="number"
                name="no"
                // value={user.no}
                // onChange={handleChange}
                placeholder="Enter your Phone Number"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                // value={user.password}
                // onChange={handleChange}
                placeholder="Password"
                required
              />
            </Form.Group>
            <Button
              className="buttonRegister px-4"
              variant="primary"
              // onClick={handleAddUser}
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
