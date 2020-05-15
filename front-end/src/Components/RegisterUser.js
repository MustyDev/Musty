import React from "react";
import { Form, Button } from "react-bootstrap";
import "../Assets/Register/Register.scss";

function RegisterUser() {
  return (
    <div>
      <Form className="shadow p-3 mb-5 bg-white rounded">
        <Form.Group>
          <Form.Label>Nama</Form.Label>
          <Form.Control
            type="text"
            name="name"
            // value={user.name}
            // onChange={handleChange}
            placeholder="Masukan nama anda"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Alamat Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            // value={user.email}
            // onChange={handleChange}
            placeholder="Masukan email anda"
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
          Register
        </Button>
      </Form>
    </div>
  );
}

export default RegisterUser;
