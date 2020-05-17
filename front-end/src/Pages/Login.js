import React, { useState } from "react"
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../Action/LoginAction'
import { Container, Jumbotron, Form, Button } from "react-bootstrap"

import "../Assets/Login/Login.scss";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  
  const isLogged = useSelector((state) => state.loginState.users)
  const [loginState, setLoginState] = useState({
    Email: "",
    Password: "",
  })
  const handleChange = (field, value) => {
    setLoginState((prevState) => ({
      ...prevState,
      [field]: value,
    }))
  }
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
          <Form className="shadow p-3 mb-5 bg-white rounded" 
            onSubmit={(event) => dispatch(login(loginState, history, event))}>
            <Form.Group>
              <Form.Label>Alamat Email</Form.Label>
              <Form.Control
                type="email"
                name="Email"
                placeholder="Masukan email anda"
                required
                value={loginState.Email}
                onChange={(e) => handleChange("Email", e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="Password"
                placeholder="Masukan password anda"
                required
                value={loginState.Password}
                onChange={(e) => handleChange("Password", e.target.value)}
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
