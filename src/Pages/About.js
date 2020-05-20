import React, { Fragment } from "react";
import styled from "styled-components";
import { Jumbotron, Row, Col, Image } from "react-bootstrap";
import "../App.css";
import Images from "../Images/Logo-Musty.png";
import dani from "../Images/dani.jpg";
import wahid from "../Images/Wahid.jpg";
import enggar from "../Images/enggar.jpeg";
import bayu from "../Images/Bayu.jpg";
import hadyd from "../Images/Hadyd.jpg";

const About = () => {
  const StyleDiv = styled.div`
    .Jumbo {
      background-color: #584c4c !important ;
    }
    .Title {
      color: white !important ;
      text-align: center;
      font-size: 180%;
    }
  `;

  return (
    <Fragment>
      <StyleDiv>
        <Jumbotron className="jumboroton-about">
          <h1 className="Title">TENTANG KAMI</h1>
        </Jumbotron>
      </StyleDiv>
      <section className="container mt-3  ">
        <div className="row">
          <div className="col-md pt-4 pb-5">
            <img src={Images} className="logo-about"/>
          </div>
          <div className="col-md pt-5">
            <h1 className="h1-about">Music Charity</h1>
            <hr />
            <h3>
              Musty adalah platform website untuk berdonasi dan menggalang dana
              secara online. Misi kami adalah untuk membantu para musisi
              indonesia agar tetap berkarya dan menjadi media bagi para
              penggemar untuk membantu musisi idolanya.
            </h3>
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col py-5">
              <h2 className="text-center">
                <strong>DEVELOPER TEAM</strong>
              </h2>
              <hr />
              
              <Row className="show-grid text-center justify-content-center">
                <Col xs={6} sm={4} className="person-team">
                  <Image src={wahid} circle className="profile-pic" />
                  <h3 className="musisi">Wahid</h3>
                  <p>Fullstack-Developer</p>
                </Col>
                <Col xs={6} sm={4} className="person-team">
                  <Image src={hadyd} circle className="profile-pic" />
                  <h3 className="musisi">Hadyd</h3>
                  <p>FrontEnd-Developer</p>
                </Col>
                <Col xs={6} sm={4} className="person-team">
                  <Image src={dani} circle className="profile-pic" />
                  <h3 className="musisi">Zakiy Dani</h3>
                  <p>FrontEnd-Developer</p>
                </Col>
                <Col xs={6} sm={4} className="person-team">
                  <Image src={bayu} circle className="profile-pic" />
                  <h3 className="musisi">Bayu</h3>
                  <p>BackEnd-Developer</p>
                </Col>
                <Col xs={6} sm={4} className="person-team">
                  <Image src={enggar} circle className="profile-pic" />
                  <h3 className="musisi">Enggar</h3>
                  <p>BackEnd-Developer</p>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
