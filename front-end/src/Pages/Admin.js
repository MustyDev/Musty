import React, { useState, useEffect } from "react";

import { Jumbotron, Table, Container, Badge, Button } from "react-bootstrap";

import { connect } from "react-redux";

<<<<<<< HEAD
import { getDataDana, putDataEdit } from "../Action/AdminAction";
=======
import { getDataDana, getDanaById } from "../Action/AdminAction";
>>>>>>> cbd07abd30ef46daef37020ed1a5d37f1d127159
import "../Components/Admin/admin.scss";

function Admin(props) {
  const [editData, setEditData] = useState("");

  useEffect(() => {
    props.getDataDana();
  }, []);

  const handleClickStatus = (id) => {
<<<<<<< HEAD
      let newData = {
        id: id,
        status: "approve"
      }
      props.putDataEdit(newData)

      console.log(newData)
  }
=======
    props.getDanaById(id);
    console.log(props.getDanaById(id));
    let newData = {
      status: "approve",
    };
    // props.putDataDana(newData)

    console.log(newData);
  };
>>>>>>> cbd07abd30ef46daef37020ed1a5d37f1d127159

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
<<<<<<< HEAD
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
=======
              if (item.status == "waiting")
                return (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.nama}</td>
                    <td>{item.judul}</td>
                    <td>{item.tujuan}</td>
                    <td>{item.id}</td>
                    <td>
                      <Badge variant="warning">{item.status}</Badge>
                    </td>
                    <td>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => {
                          handleClickStatus(item.id);
                        }}
                        value={"Approve"}
                      >
                        Approve
                      </Button>{" "}
                    </td>
                  </tr>
                );
>>>>>>> cbd07abd30ef46daef37020ed1a5d37f1d127159
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

<<<<<<< HEAD
const mapDispatchToProps = { getDataDana, putDataEdit };
=======
const mapDispatchToProps = { getDataDana, getDanaById };
>>>>>>> cbd07abd30ef46daef37020ed1a5d37f1d127159
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
