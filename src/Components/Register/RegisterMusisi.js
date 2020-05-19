import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";

import "../../Assets/Register/Register.scss";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { registerMusisi } from '../../Action/RegisterAction'

const RegisterMusisi = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()

  // const isLogged = useSelector()

  const [register, setRegister] = useState({
    Username: "",
    Email: "",
    Phone: "",
    Password: "",
    Role: "1",
  })

  const handleChange = (field, value) => {
    setRegister((prevState) => ({
      ...prevState,
      [field]: value,
    }))
  }

  return (
    <div>
      <Form className="shadow p-3 mb-5 bg-white rounded" onSubmit={(event) => dispatch(registerMusisi(register, history, event))}>
        <Form.Group>
          <Form.Label>Nama</Form.Label>
          <Form.Control
            type="text"
            name="Username"
            placeholder="Masukan nama anda"
            required
            value={register.Username}
            onChange={(e) => handleChange("Username", e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Alamat Email</Form.Label>
          <Form.Control
            type="email"
            name="Email"
            placeholder="Masukan email anda"
            required
            value={register.Email}
            onChange={(e) => handleChange("Email", e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>No. Handphone</Form.Label>
          <Form.Control
            type="number"
            name="Phone"
            placeholder="Masukan nomor handphone anda"
            required
            value={register.Phone}
            onChange={(e) => handleChange("Phone", e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="Password"
            placeholder="Masukan password anda"
            required
            value={register.Password}
            onChange={(e) => handleChange("Password", e.target.value)}
          />
        </Form.Group>
        <Button
          className="buttonRegister px-4"
          variant="primary"
          // onClick={handleAddUser}
          type="submit"
        >
          Daftar
        </Button>
      </Form>
    </div>
  );
};

export default RegisterMusisi;
