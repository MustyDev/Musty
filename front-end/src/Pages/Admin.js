import React, {useState, useEffect} from 'react'
import { Jumbotron, Table, Container, Badge } from 'react-bootstrap'
import '../Components/Admin/admin.scss'
import { connect } from 'react-redux'
import { getDataDana } from '../Action/AdminAction'

function Admin(props) {
    const [dataDana, setDataDana] = useState('')

    useEffect(() => {
        props.getDataDana()
    },[])
    return (
        <div>
            <Jumbotron fluid className="jumboAdmin darkenImage">
                <Container className="jumboContAdmin">
                    <h1>Admin</h1>
                    <p>
                    Bersikaplah NETRAL terhadap TUGAS-mu
                    </p>
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
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map((item, index) => 
                            item.status == "waiting" || item.status == "Waiting" ?(
                                <p>{props.error}</p>
                            ):(
                                <tr>
                                    <td>{index}</td>
                                    <td>{item.nama}</td>
                                    <td>{item.judul}</td>
                                    <td>{item.tujuan}</td>
                                    <td>{item.status}</td>
                                </tr>
                            )
                        )}
                        </tbody>
                </Table>
            </Container>
        </div>
    )
}

const mapStateToProps = (props) => {
    return{
        data:props.getDana.dana
    }
}

const mapDispatchToProps = {getDataDana}
export default connect(mapStateToProps, mapDispatchToProps)(Admin)
