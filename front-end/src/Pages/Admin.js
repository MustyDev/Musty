import React from 'react'
import { Jumbotron, Table, Container, Badge } from 'react-bootstrap'
import '../Components/Admin/admin.scss'

function Admin() {
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
                        <tr>
                            <td>1</td>
                            <td>Afgan</td>
                            <td>Konser Amal</td>
                            <td>Untuk Menambah Hasil Amal dari konsernya</td>
                            <td><Badge variant="warning">Waiting</Badge></td>
                        </tr>
                        </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default Admin
