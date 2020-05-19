import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import { Card, CardDeck, ProgressBar, Container } from "react-bootstrap";

import "../../App.css";
import { getDataDonasi } from "../../Action/HomeAction";
import { getDetailDonasi } from "../../Action/DetailAction";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function Project(props) {
  console.log("atas", props);
  const now = 50;
  const progressInstance = (
    <ProgressBar now={now} label={`${now}%`} className="progress-bar-project" />
  );

  useEffect(() => {
    props.getDataDonasi();
  }, []);
  const approve = props.donasi.filter((donate) => donate.Status === "approve");
  const history = useHistory();

  const handleClick = (items) => {
    console.log("items", items.ID);
    history.push(`/details-charity/${items.ID}`);
    //  console.log("get", props.getDetailDonasi(items.ID));
  };

  return (
    <div>
      <Container>
        <h1 className="text-title">Mulai Donasi</h1>
        <h5 className="title-description">
          Mulai Donasi untuk Musisi Idola Kamu.
        </h5>
        <div className="container">
          <CardDeck className="card-deck">
            {approve.map((items) => {
              return (
                <div className="col-lg-4" onClick={() => handleClick(items)}>
                  <Card className="card-galangdana">
                    {/* <Link to="/details-charity"> */}
                    <Card.Img
                      className="card-img"
                      variant="top"
                      src={items.Url}
                      style={{ width: "100%", height: "200px" }}
                    />
                    <Card.Body>
                      <h4 className="text-dark">{items.Judul}</h4>
                      <span className="text-muted">
                        {items.Nama} - {items.Organisasi}
                      </span>
                      <p>
                        <ProgressBar
                          now={(100 / items.Nominal) * items.Jumlah}
                          className="progress-bar-project"
                        />
                      </p>
                      <h5 className="text-dark">
                        Terkumpul Rp {items.Jumlah} dari Rp {items.Nominal}
                      </h5>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-dark">
                        {items.Waktu_start} - {items.Waktu_end}
                      </small>
                    </Card.Footer>
                    {/* </Link> */}
                  </Card>
                  <br />
                </div>
              );
            })}
          </CardDeck>
        </div>
      </Container>
    </div>
  );
}

const mapStateToProps = (props) => {
  return {
    donasi: props.getDonasi.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDataDonasi: () => dispatch(getDataDonasi()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);
