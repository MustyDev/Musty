import React, { useState, useEffect } from "react";

import { Form, InputGroup, Button, Modal } from "react-bootstrap";

import axios from "axios";

import "../../Assets/Donate/Donate.scss";
import { connect } from 'react-redux'
import { putDonasiJumlah, getDetailDonasi } from '../../Action/DetailAction'

const Donate = (props) => {
  // const item = useSelector((state) => state.getDetail.detail)
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState({
    jumlah: "",
  });

  const SwitchStatus = () => {
    // console.log(event.target.value);
    var s = document.getElementById("switch");
    if (s.checked) {
      data.nama = "anonim";
    } else {
      console.log("Not Checked");
    }
  };

  const handleClickStatus = (jumlah, id) => {
    
    let newData = {
      jumlah: parseInt(data.jumlah,) + props.donasi.Jumlah,
    };
    console.log("new", newData, props.donasi.ID);

    props.putDonasiJumlah(newData, props.donasi.ID);
  };

  
  const handleChange = (field, value) => {
    setData((prevState) => ({
      ...prevState,
      [field]: value,
    }))
  }

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Donasi
      </Button>

      
      {/* {props.data.map((item, index) => {
        return ( */}
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Silahkan Masukan Nama & Nominal Donasi</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              type="text"
              name="data.nama"
              // value={user.name}
              // onChange={handleChange}
              placeholder="Masukan nama anda"
              className="mb-2"
              required
            />
            <InputGroup>
              <InputGroup.Prepend className="mt-2">
                <InputGroup.Text id="inputGroupPrepend">Rp</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                className="mt-2"
                type="number"
                name="data.jumlah"
                value={data.jumlah}
                placeholder="0"
                onChange={(e) => handleChange("jumlah", e.target.value)}
              ></Form.Control>
            </InputGroup>
            <Form.Switch
              className="mt-3"
              type="checkbox"
              id="switch"
              onClick={() => SwitchStatus()}
              label="Sembunyikan nama saya (Anonim)"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                handleClickStatus(props.donasi.ID);
              }}
            >
              Kirim Donasi
            </Button>{" "}
          </Modal.Footer>
          </Modal>
         {/* );
        })} */}
    </div>
  );
};

const mapStateToProps = props => {
  return {
    donasi : props.getDetail.detail
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDetailDonasi : () => dispatch(getDetailDonasi()),
    putDonasiJumlah : (data, id) => dispatch(putDonasiJumlah(data, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Donate);
