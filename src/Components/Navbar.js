import React from "react";

import { Navbar } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";

import { GrNotes } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { useSelector } from "react-redux";

import jwt from "jwt-decode";

import "../App.css";

const Nav = () => {
  const history = useHistory();
  const isLogged = useSelector((state) => state.loginState.isLogged);

  const logOutHandler = (e) => {
    history.push("/");
    localStorage.removeItem("token");
    window.location.reload(false);
  };

  if (isLogged === false) {
    return (
      <>
        <Navbar className="navbarheader">
          <a href="https://www.instagram.com/" className="icon-sosmed">
            <FiInstagram />
          </a>
          <a href="https://www.facebook.com/" className="icon-sosmed">
            <FaFacebookF />
          </a>
          <a href="https://www.twitter.com/" className="icon-sosmed">
            <FaTwitter />
          </a>
          <a href="https://github.com/MustyDev" className="icon-sosmed">
            <FaGithub />
          </a>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Link to="/login" className="text text-muted">
                Masuk
              </Link>
              <Link to="/register" className="text">
                Daftar
              </Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  } else if (isLogged === true) {
    let decode = jwt(localStorage.getItem("token"));
    if (decode.role === 0) {
      return (
        <>
          <Navbar className="navbarheader">
            <a href="https://www.instagram.com/" className="icon-sosmed">
              <FiInstagram />
            </a>
            <a href="https://www.facebook.com/" className="icon-sosmed">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com/" className="icon-sosmed">
              <FaTwitter />
            </a>
            <a href="https://github.com/MustyDev" className="icon-sosmed">
              <FaGithub />
            </a>

            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <GrNotes />
                <Link to="/form-tourcharity" className="text-donasi">
                  Buat Donasi
                </Link>
                <Link to="/admin" className="text-donasi">
                  Admin
                </Link>
                <Link
                  onClick={(e) => logOutHandler(e)}
                  className="text text-muted"
                >
                  Keluar
                </Link>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        </>
      );
    } else if (decode.role === 1) {
      return (
        <>
          <Navbar className="navbarheader">
            <a href="https://www.instagram.com/" className="icon-sosmed">
              <FiInstagram />
            </a>
            <a href="https://www.facebook.com/" className="icon-sosmed">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com/" className="icon-sosmed">
              <FaTwitter />
            </a>
            <a href="https://github.com/MustyDev" className="icon-sosmed">
              <FaGithub />
            </a>

            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <GrNotes />
                <Link to="/form-tourcharity" className="text-donasi">
                  Buat Donasi
                </Link>
                <Link
                  onClick={(e) => logOutHandler(e)}
                  className="text text-muted"
                >
                  Keluar
                </Link>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        </>
      );
    } else if (decode.role === 2) {
      return (
        <>
          <Navbar className="navbarheader">
            <a href="https://www.instagram.com/" className="icon-sosmed">
              <FiInstagram />
            </a>
            <a href="https://www.facebook.com/" className="icon-sosmed">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com/" className="icon-sosmed">
              <FaTwitter />
            </a>
            <a href="https://github.com/MustyDev" className="icon-sosmed">
              <FaGithub />
            </a>

            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <Link
                  onClick={(e) => logOutHandler(e)}
                  className="text text-muted"
                >
                  Keluar
                </Link>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        </>
      );
    }
  }
};
export default Nav;
