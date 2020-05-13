import React from "react";
import { Card, CardDeck, ProgressBar, Button } from "react-bootstrap";
import "../App.css";

function Project() {
  const now = 90;
  const progressInstance = <ProgressBar now={now} label={`${now}%`} />;

  return (
    <div>
      <h1 className="text-title">Mulai Donasi</h1>
      <h5 className="title-description">
        Mulai Donasi untuk Musisi Idola Kamu.
      </h5>

      <CardDeck className="card-deck">
        <Card>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg"
          />
          <Card.Body>
            <h4>Galang Dana Konser (Nama Konser)</h4>
            Oleh (Nama Penggalang)
            <p>{progressInstance}</p>
            <h5>Rp.4.000.000 Terkumpul dari Rp.5.000.000</h5>
            <div className="text-center">
              <Button variant="dark">Details Charity</Button>
            </div>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">1 Januari 2020 - 30 April 2020</small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg"
          />
          <Card.Body>
            <h4>Galang Dana Konser (Nama Konser)</h4>
            Oleh (Nama Penggalang)
            <p>{progressInstance}</p>
            <h5>Rp.4.000.000 Terkumpul dari Rp.5.000.000</h5>
            <div className="text-center">
              <Button variant="dark">Details Charity</Button>
            </div>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">1 Januari 2020 - 30 April 2020</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/167471/pexels-photo-167471.jpeg"
          />
          <Card.Body>
            <h4>Galang Dana Konser (Nama Konser)</h4>
            Oleh (Nama Penggalang)
            <p>{progressInstance}</p>
            <h5>Rp.4.000.000 Terkumpul dari Rp.5.000.000</h5>
            <div className="text-center">
              <Button variant="dark">Details Charity</Button>
            </div>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">1 Januari 2020 - 30 April 2020</small>
          </Card.Footer>
        </Card>
      </CardDeck>

      <CardDeck className="card-deck">
        <Card>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/1425297/pexels-photo-1425297.jpeg"
          />
          <Card.Body>
            <h4>Galang Dana Konser (Nama Konser)</h4>
            Oleh (Nama Penggalang)
            <p>{progressInstance}</p>
            <h5>Rp.4.000.000 Terkumpul dari Rp.5.000.000</h5>
            <div className="text-center">
              <Button variant="dark">Details Charity</Button>
            </div>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">1 Januari 2020 - 30 April 2020</small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg"
          />
          <Card.Body>
            <h4>Galang Dana Konser (Nama Konser)</h4>
            Oleh (Nama Penggalang)
            <p>{progressInstance}</p>
            <h5>Rp.4.000.000 Terkumpul dari Rp.5.000.000</h5>
            <div className="text-center">
              <Button variant="dark">Details Charity</Button>
            </div>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">1 Januari 2020 - 30 April 2020</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg"
          />
          <Card.Body>
            <h4>Galang Dana Konser (Nama Konser)</h4>
            Oleh (Nama Penggalang)
            <p>{progressInstance}</p>
            <h5>Rp.4.000.000 Terkumpul dari Rp.5.000.000</h5>
            <div className="text-center">
              <Button variant="dark">Details Charity</Button>
            </div>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">1 Januari 2020 - 30 April 2020</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}

export default Project;
