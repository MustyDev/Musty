import React, { useState, useEffect } from "react";

import { Form, InputGroup, Button, Modal } from "react-bootstrap";

import "../Assets/Donate/Donate.scss";
import axios from "axios";

const Donate = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState({
    nama: "",
    nominal: "",
  });

  const SwitchStatus = () => {
    // console.log(event.target.value);
    var s = document.getElementById("switch");
    if (s.checked) {
      data.nama = "anonim";
    } else {
      console.log("Not Checked");
    }
  };

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   data = {
  //     nama: nama,
  //     donasi: donasi,
  //   };
  // };

  useEffect(() => {
    axios
      .post("https://5e9f471c11b078001679c68f.mockapi.io/user")
      .then((res) => setData(res.data[0]))
      .catch(console.error);
  }, data);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Donasi
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Silahkan Masukan Nama & Nominal Donasi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            name="data.nama"
            // value={user.name}
            // onChange={handleChange}
            placeholder="Masukan nama anda"
            className="mb-2"
            required
          />
          <InputGroup>
            <InputGroup.Prepend className="mt-2">
              <InputGroup.Text id="inputGroupPrepend">Rp</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              className="mt-2"
              type="number"
              name="data.nominal"
              placeholder="0"
            ></Form.Control>
          </InputGroup>
          <Form.Switch
            className="mt-3"
            type="checkbox"
            id="switch"
            onClick={() => SwitchStatus()}
            label="Sembunyikan nama saya (Anonim)"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleShow}>
            Kirim Donasi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Donate;
