import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./common.css"; // Import your CSS file

const EventNavbar = () => {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand="sm" className="bg-dark">
      <Container fluid className="px-4">
        <img
          src="./E-Logo-removebg-preview.png"
          alt=""
          width="50"
          height="50"
          className=""
        />
        <Navbar.Brand href="/" className="text-light">
          Event Hub
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="bg-light"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto w-100 d-flex justify-content-end">
            <Nav.Link
              href="/"
              className={`event-navbar ${
                location.pathname === "/" ? "active-link" : ""
              }`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/event"
              className={`event-navbar ${
                location.pathname === "/event" ? "active-link" : ""
              }`}
            >
              Event
            </Nav.Link>
            <Nav.Link
              href="#About"
              className={`event-navbar ${
                location.pathname === "/about" ? "active-link" : ""
              }`}
            >
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default EventNavbar;
