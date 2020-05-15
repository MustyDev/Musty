import React, { useState, useEffect } from "react";

import { Form, InputGroup, Button, Modal } from "react-bootstrap";

import "../Assets/Donate/Donate.scss";
import axios from "axios";

const Donate = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState([]);

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   data = {
  //     name: name,
  //     donasi: donasi,
  //   };
  // };

  useEffect(() => {
    axios
      .post("https://5e9f471c11b078001679c68f.mockapi.io/user")
      .then((res) => setData(res.data[0]))
      .catch(console.error);
  }, []);

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
            name="name"
            // value={user.name}
            // onChange={handleChange}
            placeholder="Masukan nama anda"
            className="mb-2"
            required
          />
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">Rp</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="number"
              name="donasi"
              placeholder="0"
            ></Form.Control>
          </InputGroup>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Check this switch"
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
    // <div>
    //   <div>
    //     <Jumbotron className="jumbotronDonate darkenImage">
    //       <Container>
    //         <h1>Donasi</h1>
    //       </Container>
    //     </Jumbotron>
    //   </div>
    //   <div>
    //     <Container className="containerDonate">
    //       <Form className="shadow p-3 mb-5 bg-white rounded">
    //         <Form.Group>
    //           <Form.Label>Masukan Nominal Donasi</Form.Label>
    //           <InputGroup>
    //             <InputGroup.Prepend>
    //               <InputGroup.Text id="inputGroupPrepend">Rp</InputGroup.Text>
    //             </InputGroup.Prepend>
    //             <Form.Control
    //               type="number"
    //               name="donasi"
    //               placeholder="0"
    //             ></Form.Control>
    //           </InputGroup>
    //         </Form.Group>
    //         <Button className="buttonDonasi" type="submit">
    //           Donasi
    //         </Button>
    //       </Form>
    //     </Container>
    //   </div>
    // </div>
  );
};

export default Donate;
