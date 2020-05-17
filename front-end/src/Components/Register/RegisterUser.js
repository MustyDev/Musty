import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import "../../Assets/Register/Register.scss"
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { registerUser } from '../../Action/RegisterAction'

function RegisterUser() {
  const history = useHistory()
  const dispatch = useDispatch()

  const [register, setRegister] = useState ({
    Username: "",
    Email: "",
    Password: "",
    Role: "2",
  })

  const handleChange = (field, value) => {
    setRegister((prevState) => ({
      ...prevState,
      [field]: value,
    }))
  }

  return (
    <div>
      <Form className="shadow p-3 mb-5 bg-white rounded" onSubmit={(event) => dispatch(registerUser(register, history, event))}>
        <Form.Group>
          <Form.Label>Nama</Form.Label>
          <Form.Control
            type="text"
            name="Username"
            value={register.Username}
            onChange={(e) => handleChange("Username", e.target.value)}
            placeholder="Masukan nama anda"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Alamat Email</Form.Label>
          <Form.Control
            type="email"
            name="Email"
            value={register.Email}
            onChange={(e) => handleChange("Email", e.target.value)}
            placeholder="Masukan email anda"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="Password"
            value={register.Password}
            onChange={(e) => handleChange("Password", e.target.value)}
            placeholder="Masukan password anda"
            required
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
}

export default RegisterUser;
