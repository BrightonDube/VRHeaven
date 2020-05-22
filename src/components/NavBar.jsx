//jshint esversion: 9
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

const NavigationBar = styled(Navbar)`
  height: 6rem;
  font-size: 1.2rem;
  background-color: #ffe3ed !important;
  .navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .navbar-brand:hover {
    font-size: 1.6rem;
    font-weight: bold;
  }
  a {
    color: #58b4ae;
  }
  a:hover {
    color: #1f4068;
    font-size: 1.3rem;
  }
`;

export function NavBar() {
  return (
    <NavigationBar
      collapseOnSelect
      expand="lg"
      bg="transparent"
      variant="success"
    >
      <Container>
        <Navbar.Brand href="#home">VR Heaven</Navbar.Brand>
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
