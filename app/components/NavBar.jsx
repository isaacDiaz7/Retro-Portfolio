"use client";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <React.Fragment>
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
