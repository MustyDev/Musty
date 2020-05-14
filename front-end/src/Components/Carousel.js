import React from "react";
import { Carousel } from "react-bootstrap";
import Header from "../Images/Header.jpg";
import Header2 from "../Images/concert2.1.jpg";
import Header3 from "../Images/concert4.1.jpg";

const Crsl = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Header} alt="Header" />
          <Carousel.Caption className="caption-carousel">
            <h1 className="title-carousel">
              Ayo Donasi Untuk Musisi Idola Kamu!
            </h1>
            <p className="deskripsi-carousel">
              Bantu mereka untuk tetap berkarya.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-60" src={Header2} alt="Header" />
          <Carousel.Caption className="caption-carousel">
            <h1 className="title-carousel">
              Ayo Donasi Untuk Musisi Idola Kamu!
            </h1>
            <p className="deskripsi-carousel">
              Bantu mereka untuk tetap berkarya.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Header3} alt="Header" />
          <Carousel.Caption className="caption-carousel">
            <h1 className="title-carousel">
              Ayo Donasi Untuk Musisi Idola Kamu!
            </h1>
            <p className="deskripsi-carousel">
              Bantu mereka untuk tetap berkarya.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Crsl;
