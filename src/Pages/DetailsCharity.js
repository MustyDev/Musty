import React, { Fragment, useEffect } from "react";

import styled from "styled-components";

import { connect, useSelector } from "react-redux";

import { Jumbotron, ProgressBar } from "react-bootstrap";

import { getDetailDonasi } from "../Action/DetailAction";
import image from "../Images/concert1.jpg";
import Donate from "../Components/Detail/Donate";

function DetailsCharity(props) {
  const item = useSelector((state) => state.getDetail.detail);
  const StyleDiv = styled.div`
    .Jumbo {
      background-image: url(${image});
      background-size: cover;
      background-position: center;
      display: block;
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
  const params = props.match.params.id;
  useEffect(() => {
    props.getDetailDonasi(params);
  }, []);

  let detail = useSelector((props) => props.getDetail.detail);
  // console.log("detail", detail);

  return (
    <Fragment>
      <StyleDiv>
        <Jumbotron className="Jumbo">
          <h1 className="Title">Detail Donasi</h1>
        </Jumbotron>
      </StyleDiv>
      <StyleCard>
        <div>
          <div
            className="container col-md-10 animated zoomIn"
            id="containerCard"
          >
            <div
              id="cardItem"
              className="card"
              style={{ maxWidth: "1000px", maxHeight: "800px" }}
            >
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={detail.Url} className="card-img" alt="gambar" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h1 className="card-title">{detail.Judul}</h1>
                    <h4 className="card-text">{detail.Organisasi}</h4>
                    <div className="progress-titlebar">
                    <ProgressBar
                          now={(100 / detail.Nominal) * detail.Jumlah}
                          className="progress-bar-project"
                        />
                    </div>
                    <div className="status">
                      <p className="card-text">
                        Rp{detail.Jumlah} Terkumpul dari Rp
                        {detail.Nominal}
                      </p>
                      <p className="card-persen">80%</p>
                    </div>
                    <p className="card-date">
                      <small className="text-muted">
                        {detail.Waktu_start} - {detail.Waktu_end}
                      </small>
                    </p>
                    <p>{detail.Deskripsi}</p>
                    <Donate />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div
            className="container col-md-11 animated zoomIn"
            id="container-deskripsi"
          > */}
          {/* <div className="container col-md-7">
              <p>{detail.Deskripsi}</p>
            </div> */}
          {/* </div> */}
        </div>
        {/* {props.data.map((item) => {
          return (
            <div>
              <div
                className="container col-md-10 animated zoomIn"
                id="containerCard"
              >
                <div
                  id="cardItem"
                  className="card"
                  style={{ maxWidth: "1000px", maxHeight: "800px" }}
                >
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src={item.Url} className="card-img" alt="gambar" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h1 className="card-title">{item.Judul}</h1>
                        <h4 className="card-text">{item.Organisasi}</h4>
                        <div className="progress-titlebar">
                          <ProgressBar variant="primary" now={80} />
                        </div>
                        <div className="status">
                          <p className="card-text">
                            Rp{item.Judul} Terkumpul dari Rp{item.Nominal}
                          </p>
                          <p className="card-persen">80%</p>
                        </div>
                        <p className="card-date">
                          <small className="text-muted">
                            {item.Waktu_start} - {item.Waktu_end}
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
                  <p>{item.Deskripsi}</p>
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
                    <div className="card-img-overlay">
                      <h6 className="card-title">John Doe</h6>
                    </div>
                    <h5>Rp.100.000</h5>
                  </div>
                </div>
              </div>
            </div>
          );
        })} */}
      </StyleCard>
    </Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  data: return {
    getDetailDonasi: (id) => dispatch(getDetailDonasi(id)),
  };
};

export default connect(null, mapDispatchToProps)(DetailsCharity);
// export default DetailsCharity;
