import React from "react";
import "../../App.css";
import { Row, Col, Image } from "react-bootstrap";
import Ariel from "../../Images/Ariel Noah.jpg";
import Raisa from "../../Images/Raisa.jpg";
import Afgan from "../../Images/Afgan.jpg";

function Testimoni() {
  return (
    <div className="testimoni-musisi">
      <h1 className="text-title">Testimoni</h1>
      <Row className="show-grid text-center">
        <Col xs={12} sm={4} className="person-wrapper">
          <Image src={Ariel} circle className="profile-pic" />
          <h3 className="musisi">Ariel</h3>
          <p>
            "Salah satu website terbaik yang menjadi media bagi para musisi dan
            para penikmat karya untuk saling terhubung & mendukung karya-karya
            musisi idolanya."
          </p>
        </Col>
        <Col xs={12} sm={4} className="person-wrapper">
          <Image src={Raisa} circle className="profile-pic" />
          <h3 className="musisi">Raisa</h3>
          <p>
            "Situs ini berisi program-program positif untuk membantu sesama
            musisi, tak hanya tempat menggalang dana untuk para musisi, tapi
            juga sebagi media bagi para penggemar untuk mendukung musisi
            idolanya."
          </p>
        </Col>
        <Col xs={12} sm={4} className="person-wrapper">
          <Image src={Afgan} circle className="profile-pic" />
          <h3 className="musisi">Afgan</h3>
          <p>
            "Salah satu situs yang mendukung perkembangan musik di Indonesia,
            khususnya musisi-musisi tanah air yang mulai berkarya."
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Testimoni;
