import React, { useState, useEffect } from "react";

import { Jumbotron, Table, Container, Badge, Button } from "react-bootstrap";

import { connect } from "react-redux";

import { getDataDana, putDataEdit, getDataCategory } from "../Action/AdminAction";
import "../Components/Admin/admin.scss";

function Admin(props) {
  const [editData, setEditData] = useState("");

  useEffect(() => {
    props.getDataDana();
  }, []);

  const handleClickStatus = (id) => {

      let newData = {
        id: id,
        Status: "waiting",
      }
      props.putDataEdit(newData, id)

      console.log(newData)
  };

  const handleClickCategory = (value) =>{
    console.log(value)
      let filter = {
        where : {
          status: "approve",
        }
      }
      props.getDataCategory(filter)
  }

  return (
    <div>
      <Jumbotron fluid className="jumboAdmin darkenImage">
        <Container className="jumboContAdmin">
          <h1>Admin</h1>
          <p>Bersikaplah NETRAL terhadap TUGAS-mu</p>
        </Container>
      </Jumbotron>
      <Container>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama Penggalang</th>
              <th>Judul Penggalang</th>
              <th>Tujuan Penggalang</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item, index) => {
              if (item.Status === "")
                return (
                  <tr key={item.ID}>
                    <td>{index + 1}</td>
                    <td>{item.Nama}</td>
                    <td>{item.Judul}</td>
                    <td>{item.Deskripsi}</td>
                    <td>
                      <Badge variant="warning">{item.Status}</Badge>
                    </td>
                    <td>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => {
                          handleClickStatus(item.ID);
                        }}
                        value={"Approve"}
                      >
                        Approve
                      </Button>{" "}
                    </td>
                  </tr>
                );

            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

const mapStateToProps = (props) => {
  return {
    data: props.getDana.dana,
  };
};


const mapDispatchToProps = (dispatch) => { 
  return {
    getDataDana: () => dispatch(getDataDana()),
    putDataEdit: (data, id) => 
      dispatch(putDataEdit(data, id)),
    getDataCategory: (filter) => dispatch(getDataCategory(filter))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
