"use client";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <React.Fragment>
      {/* <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-secondary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav> */}
      <Navbar className="bg-secondary border-bottom border-dark border-5">
        <Container className="">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-dark fs-5 fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#about-me" className="text-dark fs-5 fw-bold">
              About Me
            </Nav.Link>
            <Nav.Link href="#projects" className="text-dark fs-5 fw-bold">
              Projects
            </Nav.Link>
            <Nav.Link href="#contact-me" className="text-dark fs-5 fw-bold">
              Contact Me
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;
