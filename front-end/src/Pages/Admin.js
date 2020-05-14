import React, { useState, useEffect } from "react";

import { Jumbotron, Table, Container, Badge, Button } from "react-bootstrap";

import { connect } from "react-redux";

import { getDataDana, putDataEdit } from "../Action/AdminAction";
import "../Components/Admin/admin.scss";

function Admin(props) {
  const [editData, setEditData] = useState("");

  useEffect(() => {
    props.getDataDana();
  }, []);

  const handleClickStatus = (id) => {
      let newData = {
        id: id,
        status: "approve"
      }
      props.putDataEdit(newData)

      console.log(newData)
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
                if(item.status == "waiting")
                    return <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.nama}</td>
                                <td>{item.judul}</td>
                                <td>{item.tujuan}</td>
                                <td><Badge variant="warning">{item.status}</Badge></td>
                                <td><Button variant="primary" size="sm" 
                                        onClick={() => handleClickStatus(item.id)}
                                      >
                                      Approve
                                    </Button>{' '}</td>
                            </tr>
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

const mapStateToProps = (props) => {
  return {
    data: props.dana,
  };
};

const mapDispatchToProps = { getDataDana, putDataEdit };
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
