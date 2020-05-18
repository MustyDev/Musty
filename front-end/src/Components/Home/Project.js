import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, CardDeck, ProgressBar, Container } from "react-bootstrap";
import "../../App.css";

function Project() {
  const now = 50;
  const progressInstance = (
    <ProgressBar now={now} label={`${now}%`} className="progress-bar-project" />
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://musty-api.herokuapp.com/donasi")
      .then((res) => setData(res.data[0]))
      .catch(console.error);
  }, []);

  return (
    <div>
      <Container>
        <h1 className="text-title">Mulai Donasi</h1>
        <h5 className="title-description">
          Mulai Donasi untuk Musisi Idola Kamu.
        </h5>
        <div>
          <CardDeck className="card-deck">
            <Card className="card-galangdana">
              <Link to="/details-charity">
                <Card.Img className="card-img" variant="top" src={data.Url} />
                <Card.Body>
                  <h4 className="text-dark">{data.Judul}</h4>
                  <span className="text-muted">({data.Nama})</span>
                  <p>{progressInstance}</p>
                  <h5 className="text-dark">{data.Nominal}</h5>
                </Card.Body>
                <Card.Footer>
                  <small className="text-dark">
                    1 Januari 2020 - 30 April 2020
                  </small>
                </Card.Footer>
              </Link>
            </Card>

            <Card className="card-galangdana">
              <Link to="/details-charity">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg"
                />
                <Card.Body>
                  <h4 className="text-dark">
                    Galang Dana Konser (Nama Konser)
                  </h4>
                  <span className="text-muted">Oleh (Nama Penggalang)</span>
                  <p>{progressInstance}</p>
                  <h5 className="text-dark">
                    Rp.4.000.000 Terkumpul dari Rp.5.000.000
                  </h5>
                </Card.Body>
                <Card.Footer>
                  <small className="text-dark">
                    1 Januari 2020 - 30 April 2020
                  </small>
                </Card.Footer>
              </Link>
            </Card>

            <Card className="card-galangdana">
              <Link to="/details-charity">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg"
                />
                <Card.Body>
                  <h4 className="text-dark">
                    Galang Dana Konser (Nama Konser)
                  </h4>
                  <span className="text-muted">Oleh (Nama Penggalang)</span>
                  <p>{progressInstance}</p>
                  <h5 className="text-dark">
                    Rp.4.000.000 Terkumpul dari Rp.5.000.000
                  </h5>
                </Card.Body>
                <Card.Footer>
                  <small className="text-dark">
                    1 Januari 2020 - 30 April 2020
                  </small>
                </Card.Footer>
              </Link>
            </Card>
          </CardDeck>

          <CardDeck className="card-deck">
            <Card className="card-galangdana">
              <Link to="/details-charity">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/1425297/pexels-photo-1425297.jpeg"
                />
                <Card.Body>
                  <h4 className="text-dark">
                    Galang Dana Konser (Nama Konser)
                  </h4>
                  <span className="text-muted">Oleh (Nama Penggalang)</span>
                  <p>{progressInstance}</p>
                  <h5 className="text-dark">
                    Rp.4.000.000 Terkumpul dari Rp.5.000.000
                  </h5>
                </Card.Body>
                <Card.Footer>
                  <small className="text-dark">
                    1 Januari 2020 - 30 April 2020
                  </small>
                </Card.Footer>
              </Link>
            </Card>

            <Card className="card-galangdana">
              <Link to="/details-charity">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg"
                />
                <Card.Body>
                  <h4 className="text-dark">
                    Galang Dana Konser (Nama Konser)
                  </h4>
                  <span className="text-muted">Oleh (Nama Penggalang)</span>
                  <p>{progressInstance}</p>
                  <h5 className="text-dark">
                    Rp.4.000.000 Terkumpul dari Rp.5.000.000
                  </h5>
                </Card.Body>
                <Card.Footer>
                  <small className="text-dark">
                    1 Januari 2020 - 30 April 2020
                  </small>
                </Card.Footer>
              </Link>
            </Card>

            <Card className="card-galangdana">
              <Link to="/details-charity">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg"
                />
                <Card.Body>
                  <h4 className="text-dark">
                    Galang Dana Konser (Nama Konser)
                  </h4>
                  <span className="text-muted">Oleh (Nama Penggalang)</span>
                  <p>{progressInstance}</p>
                  <h5 className="text-dark">
                    Rp.4.000.000 Terkumpul dari Rp.5.000.000
                  </h5>
                </Card.Body>
                <Card.Footer>
                  <small className="text-dark">
                    1 Januari 2020 - 30 April 2020
                  </small>
                </Card.Footer>
              </Link>
            </Card>
          </CardDeck>
        </div>
      </Container>
    </div>
  );
}

export default Project;
