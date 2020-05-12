import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

function Cntnr() {
  return (
    <Jumbotron fluid>
      <Container className="container-category">
        <h1 className="text-container">Pilih berdasarkan kategori</h1>
        <h5 className="deskripsi-container">
          Mulai Donasi untuk memabantu Musisi Idola Kamu.
        </h5>
      </Container>
    </Jumbotron>
  );
}

export default Cntnr;
