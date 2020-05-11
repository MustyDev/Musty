import React from "react";
import { Carousel } from "react-bootstrap";
import Header from "../Images/Header.jpg";

const Crsl = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Header} alt="Header" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Crsl;