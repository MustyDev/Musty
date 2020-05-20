import React from "react";

import { Link } from "react-router-dom";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

import "../App.css";
import Logo from "../Images/Logo-Musty.png";

function MenuBar() {
  return (
    <div>
      <Container fluid>
        <Navbar collapseOnSelect expand="lg" variant="light">
          <Navbar.Brand>
            <Link to="/">
              <img
                src={Logo}
                width="140px"
                height="65px"
                className="d-inline-block align-top"
                alt="Musty Logo"
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-nav ml-auto mx-auto">
              <Nav.Link>
                <Link
                  to="/"
                  style={{ textDecoration: "none" }}
                  className="link-category"
                >
                  Beranda
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/about"
                  style={{ textDecoration: "none" }}
                  className="link-category"
                >
                  Tentang Kami
                </Link>
              </Nav.Link>

              <NavDropdown
                title="kategori"
                className="link-category"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link
                    to="/konser"
                    style={{ textDecoration: "none" }}
                    className="link-category"
                  >
                    Konser
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/album"
                    style={{ textDecoration: "none" }}
                    className="link-category"
                  >
                    Album
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/alatmusik"
                    style={{ textDecoration: "none" }}
                    className="link-category"
                  >
                    Alat Musik
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* <Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Cari Donasi"
                  className="mr-sm-2"
                />
                <Button className="buttonSearch" variant="primary">
                  Cari Donasi
                </Button>
              </Form>
            </Nav> */}
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default MenuBar;
