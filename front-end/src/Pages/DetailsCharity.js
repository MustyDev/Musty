import React, { Fragment } from "react";
import styled from "styled-components";
import { Jumbotron, Button, Form, ProgressBar } from "react-bootstrap";

import Donate from "./Donate";

export default function DetailsCharity() {
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

  const StyleCard = styled.div`
    #containerCard {
      display: flex;
      justify-content: flex-start;
    }
    #cardItem {
      width: 100% !important;
      height: 100% !important;
    }
    #cardItem img {
      margin: 0px 0 0 0px;
      height: 100%;
      width: 100%;
    }
    .status {
      display: flex;
      justify-content: space-between;
    }
    .card-text {
      margin-top: 15px;
      display: flex;
      justify-content: flex-start;
    }
    .card-title {
      margin-top: 0px;
      display: flex;
      justify-content: flex-start;
      color: black;
    }
    .card-persen {
      margin-top: 15px;
      display: flex;
      justify-content: flex-end;
    }
    .card-date {
      margin-top: -10px;
      display: flex;
      justify-content: flex-start;
    }
    #container-deskripsi {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
    }
    #daftar-donatur {
      text-align: center;
    }
    #card-donatur {
      text-align: center;
      margin-left: 22%;
      h6 {
        margin-top: -20px;
        margin-left: 15px;
      }
    }
  `;

  return (
    <Fragment>
      <StyleDiv>
        <Jumbotron className="Jumbo">
          <h1 className="Title">Galang Dana </h1>
        </Jumbotron>
      </StyleDiv>
      <StyleCard>
        <div className="container col-md-10 animated zoomIn" id="containerCard">
          <div
            id="cardItem"
            className="card"
            style={{ maxWidth: "1000px", maxHeight: "800px" }}
          >
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src="https://www.koranmadura.com/wp-content/uploads/2019/10/sheila-on-7_20180702_192203-730x477.jpg"
                  className="card-img"
                  alt="gambar"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h1 className="card-title">Galang Dana Sheila On 7</h1>
                  <div className="progress-bar">
                    <ProgressBar variant="primary" now={80} />
                  </div>
                  <div className="status">
                    <p className="card-text">
                      Rp.1.800.000 Terkumpul dari Rp.2.000.000
                    </p>
                    <p className="card-persen">80%</p>
                  </div>
                  <p className="card-date">
                    <small className="text-muted">
                      1 Januari 2020 - 1 Januari
                    </small>
                  </p>
                  <Donate />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container col-md-11 animated zoomIn"
          id="container-deskripsi"
        >
          <div className="container col-md-7">
            <p>
              Add-in your full project description here. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Praesent vulputate sed mauris
              vitae pellentesque. Nunc ut ullamcorper libero. Aenean fringilla
              mauris quis risus laoreet interdum. Quisque imperdiet orci in
              metus aliquam egestas. Fusce elit libero, imperdiet nec orci quis,
              convallis hendrerit nisl. Cras auctor nec purus at placerat.
              Quisque consectetur, lectus in ullamcorper tempus, dolor arcu
              suscipit elit, id laoreet tortor justo nec arcu. Nam eu dictum
              ipsum. Morbi in mi eu urna placerat finibus a vel neque.
            </p>
            <p>
              nteger feugiat est in tincidunt congue. Nam eget accumsan ligula.
              Nunc auctor ligula a quam fermentum, non iaculis diam suscipit.
              Aliquam lacinia lorem vel suscipit pulvinar. Etiam condimentum
              nunc non ultricies hendrerit. Sed nec blandit libero, ut gravida
              quam. Nam tortor est, faucibus at dolor id, blandit venenatis leo.
              Praesent euismod tempus libero et accumsan. Nunc ultrices sit amet
              urna sed euismod. Pellentesque finibus ipsum non mi sodales, vel
              ullamcorper ipsum pharetra. Praesent nec pharetra neque, elementum
              tempus purus. Sed fringilla, libero blandit elementum viverra,
              nibh urna faucibus nisl, in placerat ex dolor eu nulla.Duis ornare
              massa est, condimentum convallis lacus feugiat a. Cras elementum
              nec augue id condimentum. Morbi iaculis urna sit amet sapien
              egestas, sit amet condimentum tellus cursus. Quisque ipsum metus,
              hendrerit vitae dolor ac, blandit imperdiet ligula. Donec
              vestibulum sem justo, pulvinar laoreet tellus cursus ut. Quisque
              dui diam, volutpat at mauris sit amet, finibus suscipit ipsum.
              Donec commodo tincidunt posuere. Donec eleifend consectetur lorem,
              eu sodales dolor pharetra vitae.
            </p>
          </div>
          <div className="container col-md-3" id="daftar-donatur">
            <h3>Donatur</h3>
            <div
              className="card"
              id="card-donatur"
              style={{ width: "50%", height: "40%" }}
            >
              <img
                className="card-img-top"
                src="https://img.icons8.com/bubbles/200/000000/bartender-male.png"
              />
              <div class="card-img-overlay">
                <h6 class="card-title">John Doe</h6>
              </div>
              <h5>Rp.100.000</h5>
            </div>
          </div>
        </div>
      </StyleCard>
    </Fragment>
  );
}
