import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

function Cntnr() {
  return (
    <Jumbotron fluid className="jumbotron-category">
      <Container className="container-category">
        <h1 className="text-title1">Mulai Donasi untuk Musisi Idola Kamu.</h1>
        <h5 className="title-description1">Kategori</h5>
      </Container>
    </Jumbotron>
  );
}

export default Cntnr;
