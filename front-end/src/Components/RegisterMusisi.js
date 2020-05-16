import React from "react";
import { Form, Button } from "react-bootstrap";
import "../Assets/Register/Register.scss";

const RegisterMusisi = (props) => {
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
          <Form.Label>No. Handphone</Form.Label>
          <Form.Control
            type="number"
            name="no"
            // value={user.no}
            // onChange={handleChange}
            placeholder="Masukan nomor handphone anda"
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
          Daftar
        </Button>
      </Form>
    </div>
  );
};

export default RegisterMusisi;
