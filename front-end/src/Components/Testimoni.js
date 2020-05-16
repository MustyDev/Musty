import React from "react";
import "../App.css";
import { Row, Col, Image } from "react-bootstrap";
import Person1 from "../Images/person-1.jpg";
import Person2 from "../Images/person-2.jpg";
import Person3 from "../Images/person-3.jpg";

function Testimoni() {
  return (
    <div>
      <h1 className="text-title">Testimoni</h1>
      <Row className="show-grid text-center">
        <Col xs={12} sm={4} className="person-wrapper">
          <Image src={Person1} circle className="profile-pic" />
          <h3>Frank</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Col>
        <Col xs={12} sm={4} className="person-wrapper">
          <Image src={Person2} circle className="profile-pic" />
          <h3>Vanessa</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Col>
        <Col xs={12} sm={4} className="person-wrapper">
          <Image src={Person3} circle className="profile-pic" />
          <h3>Riff</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Testimoni;
