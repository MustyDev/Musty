import React from "react";
import { Card, Row } from "react-bootstrap";
import { FaGuitar } from "react-icons/fa";
import { IoMdMicrophone } from "react-icons/io";
import { MdAlbum } from "react-icons/md";
import { Link } from "react-router-dom";
function Category() {
  return (
    <div>
      <Row className="row-category">
        <Card className="card-category">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Card.Body>
              <center>
                <IoMdMicrophone className="icon" />
              </center>
              <Card.Title className="text">Konser</Card.Title>
            </Card.Body>
          </Link>
        </Card>

        <Card className="card-category">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Card.Body>
              <center>
                <MdAlbum className="icon" />
              </center>
              <Card.Title className="text">Album</Card.Title>
            </Card.Body>
          </Link>
        </Card>

        <Card className="card-category">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Card.Body>
              <center>
                <FaGuitar className="icon" />
              </center>
              <Card.Title className="text">Alat Musik</Card.Title>
            </Card.Body>
          </Link>
        </Card>
      </Row>
    </div>
  );
}

export default Category;
