import React, { Fragment } from "react";
import styled from "styled-components";
import { Jumbotron, Button, Form } from "react-bootstrap";
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
            <h1>We take care of everything</h1>

            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
              facilisi etiam dignissim diam quis enim. Scelerisque eleifend
              donec pretium vulputate sapi.
            </h3>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
