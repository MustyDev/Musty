import React, { Fragment } from "react";
import styled from "styled-components";
import { Jumbotron, Button, Form } from "react-bootstrap";
import "../App.css";
import Images from "../Images/Logo-Musty.png";

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
        <Jumbotron className="Jumbo">
          <h1 className="Title">About us</h1>
        </Jumbotron>
      </StyleDiv>
      <section className="container mt-3  ">
        <div className="row">
          <div className="col-md pt-4 pb-5">
            <img src={Images} />
          </div>
          <div className="col-md pt-5">
            <h1>We take care of music</h1>
            <hr />
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
              facilisi etiam dignissim diam quis enim. Scelerisque eleifend
              donec pretium vulputate sapi.
            </h3>
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col py-5">
              <h2 className="text-center">
                <strong>OUR FULL-STACK DEVELOPER TEAM</strong>
              </h2>
              <hr />
              <div className="row mt-5">
                <div className="col text-center">
                  <img src alt="" />
                  <h4>
                    <strong>Wahid</strong>
                  </h4>
                  <p className="text-secondary">Team lead</p>
                </div>
                <div className="col text-center">
                  <img src alt="" />
                  <h4>
                    <strong>Hadyd</strong>
                  </h4>
                  <p className="text-secondary">Web Designer</p>
                </div>
                <div className="col text-center">
                  <img src alt="" />
                  <h4>
                    <strong>Zakiy Dani</strong>
                  </h4>
                  <p className="text-secondary">Software Engineer</p>
                </div>
                <div className="col text-center">
                  <img src alt="" />
                  <h4>
                    <strong>Enggar</strong>
                  </h4>
                  <p className="text-secondary">Software Engineer</p>
                </div>
                <div className="col text-center">
                  <img src alt="" />
                  <h4>
                    <strong>Bayu</strong>
                  </h4>
                  <p className="text-secondary">Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
