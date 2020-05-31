//jshint esversion: 9
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

const NavigationBar = styled(Navbar)`
  height: 5rem;
  font-size: 1.2rem;
  background-color: none !important;
  .collapse {
    width: 100%;
  }
  .collapse,
  .collapsing {
    background-color: white;
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
  a:hover,
  .active {
    color: #1f4068 !important;
    font-size: 1.3rem;
  }
`;

export default function NavBar() {
  return (
    <NavigationBar
      collapseOnSelect
      expand="lg"
      bg="transparent"
      variant="light"
      className="pt-2"
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="ml-auto"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link
              className="nav-link"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="events"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Events
            </Link>

            <Link
              className="nav-link"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="team"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Team
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavigationBar>
  );
}
