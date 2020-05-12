import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { GrNotes } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../App.css";

const Nav = () => {
  return (
    <Navbar className="navbarheader">
      <a
        href="https://www.instagram.com/"
        className="icon-sosmed"
        target="_blank"
      >
        <FiInstagram />
      </a>
      <a
        href="https://www.facebook.com/"
        className="icon-sosmed"
        target="_blank"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.twitter.com/"
        className="icon-sosmed"
        target="_blank"
      >
        <FaTwitter />
      </a>
      <a
        href="https://github.com/MustyDev"
        className="icon-sosmed"
        target="_blank"
      >
        <FaGithub />
      </a>

      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <GrNotes />
          <Link to="/donate" className="text-donasi">
            Mulai Donasi
          </Link>
          <FiLogIn />
          <Link to="/login" className="text">
            Login
          </Link>
          <text>/</text>
          <Link to="/register" className="text">
            Register
          </Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Nav;
