//jshint esversion: 9
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationBar = styled(Navbar)`
  height: 5rem;
  font-size: 1.2rem;
  background-color: #ffe3ed !important;
  .navbar-toggler {
    background-color: #58b4ae !important;
    color: #58b4ae !important;
  }
  .collapse {
    background-color: rgba(255, 227, 237, 0.8);
    padding-left: 1rem;
  }
  .navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
    color: #58b4ae !important;
  }
  .navbar-brand:hover {
    font-size: 1.6rem;
    font-weight: bold;
    color: #1f4068 !important;
  }
  a {
    color: #58b4ae !important;
  }
  a:hover {
    color: #1f4068 !important;
    font-size: 1.3rem;
  }
`;

export function NavBar() {
  return (
    <NavigationBar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <FontAwesomeIcon
            icon="vr-cardboard"
            size="2x"
            className="d-inline-block align-top"
          />
          <span style={{ color: "palevioletred" }}> VR</span> Heaven
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#process">Creation Process</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#donate">Donate</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavigationBar>
  );
}
