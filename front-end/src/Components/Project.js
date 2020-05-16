import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardDeck,
  ProgressBar,
  Button,
  Container,
} from "react-bootstrap";
import "../App.css";

function Project() {
  const now = 50;
  const progressInstance = (
    <ProgressBar now={now} label={`${now}%`} className="progress-bar-project" />
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://5ebcabd3ec34e900161919bb.mockapi.io/home/galangdana")
      .then((res) => setData(res.data[0]))
      .catch(console.error);
  }, []);

  // const array = data.map((item, index) => {
  //   if (index < 6) {
  return (
    <div>
      <Container>
        <h1 className="text-title">Mulai Donasi</h1>
        <h5 className="title-description">
          Mulai Donasi untuk Musisi Idola Kamu.
        </h5>
        <div>
          <CardDeck className="card-deck" href="/details-charity">
            <Card className="card-galangdana">
              <Card.Img className="card-img" variant="top" src={data.image} />
              <Card.Body>
                <h4>{data.judul}</h4>
                <span className="text-muted">Oleh ({data.nama})</span>
                <p>{progressInstance}</p>
                <h5>{data.total}</h5>
                <div className="text-center">
                  <Button className="button-charity">Details Charity</Button>
                </div>
              </Card.Body>
              <Card.Footer>
                <small>1 Januari 2020 - 30 April 2020</small>
              </Card.Footer>
            </Card>

            <Card className="card-galangdana">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg"
              />
              <Card.Body>
                <h4>Galang Dana Konser (Nama Konser)</h4>
                <span className="text-muted">Oleh (Nama Penggalang)</span>
                <p>{progressInstance}</p>
                <h5>Rp.4.000.000 Terkumpul dari Rp.5.000.000</h5>
                <div className="text-center">
                  <Button className="button-charity">Details Charity</Button>
                </div>
              </Card.Body>
              <Card.Footer>
                <small>1 Januari 2020 - 30 April 2020</small>
              </Card.Footer>
            </Card>
            <Card className="card-galangdana">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg"
              />
              <Card.Body>
                <h4>Galang Dana Konser (Nama Konser)</h4>
                <span className="text-muted">Oleh (Nama Penggalang)</span>
                <p>{progressInstance}</p>
                <h5>Rp.4.000.000 Terkumpul dari Rp.5.000.000</h5>
                <div className="text-center">
                  <Button className="button-charity">Details Charity</Button>
                </div>
              </Card.Body>
              <Card.Footer>
                <small>1 Januari 2020 - 30 April 2020</small>
              </Card.Footer>
            </Card>
          </CardDeck>

          <CardDeck className="card-deck">
            <Card className="card-galangdana">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1425297/pexels-photo-1425297.jpeg"
              />
              <Card.Body>
                <h4>Galang Dana Konser (Nama Konser)</h4>
                <span className="text-muted">Oleh (Nama Penggalang)</span>
                <p>{progressInstance}</p>
                <h5>Rp.4.000.000 Terkumpul dari Rp.5.000.000</h5>
                <div className="text-center">
                  <Button className="button-charity">Details Charity</Button>
                </div>
              </Card.Body>
              <Card.Footer>
                <small>1 Januari 2020 - 30 April 2020</small>
              </Card.Footer>
            </Card>

            <Card className="card-galangdana">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg"
              />
              <Card.Body>
                <h4>Galang Dana Konser (Nama Konser)</h4>
                <span className="text-muted">Oleh (Nama Penggalang)</span>
                <p>{progressInstance}</p>
                <h5>Rp.4.000.000 Terkumpul dari Rp.5.000.000</h5>
                <div className="text-center">
                  <Button className="button-charity">Details Charity</Button>
                </div>
              </Card.Body>
              <Card.Footer>
                <small>1 Januari 2020 - 30 April 2020</small>
              </Card.Footer>
            </Card>

            <Card className="card-galangdana">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg"
              />
              <Card.Body>
                <h4>Galang Dana Konser (Nama Konser)</h4>
                <span className="text-muted">Oleh (Nama Penggalang)</span>
                <p>{progressInstance}</p>
                <h5>Rp.4.000.000 Terkumpul dari Rp.5.000.000</h5>
                <div className="text-center">
                  <Card.Link href="#">Read more...</Card.Link>
                  <Button className="button-charity">Details Charity</Button>
                </div>
              </Card.Body>
              <Card.Footer>
                <small>1 Januari 2020 - 30 April 2020</small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </div>
      </Container>
    </div>
  );
}
// });

// return <div className="row">{array}</div>;
// }

export default Project;
