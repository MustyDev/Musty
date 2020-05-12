import React from "react";

import {
  Jumbotron,
  Container,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";

import "../Assets/Donate/Donate.scss";

const Donate = () => {
  return (
    <div>
      <div>
        <Jumbotron className="jumbotronDonate darkenImage">
          <Container>
            <h1>Donasi</h1>
          </Container>
        </Jumbotron>
      </div>
      <div>
        <Container className="containerDonate">
          <Form className="shadow p-3 mb-5 bg-white rounded">
            <Form.Group>
              <Form.Label>Masukan Nominal Donasi</Form.Label>
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
            </Form.Group>
            <Button className="buttonDonasi" type="submit">
              Donasi
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Donate;
