//jshint esversion: 9
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.footer`
  background-color: #8ac6d1;
  color: #ffe3ed;
  .copy {
    background-color: #3797a4;
    min-height: 3.5rem;
    padding: 1rem;
    p {
      margin 0;
    }
    a {
      color: #ffe3ed;
    }
    #facebook:hover {
      color: #3b5998;
    }
    #instagram:hover {
      color: #3f729b;
    }
    #twitter:hover {
      color: #00acee;
    }
  }
`;
export function Footer() {
  return (
    <Wrapper>
      <Container>
        <Row className="align-items-center">
          <Col
            xs={12}
            sm={6}
            md={4}
            className="p-3 text-center text-md-left order-last"
          >
            <h3>Contact</h3>
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon icon="map-marked-alt" /> Post Office Box 58133,
                Washington, DC 20037
              </li>
              <li>
                <FontAwesomeIcon icon="phone" /> +1 202 530 1000
              </li>
              <li>
                <FontAwesomeIcon icon="envelope" /> Childart@ICAF.org
              </li>
              <li>
                <FontAwesomeIcon icon="globe" />{" "}
                <a href="https://ICAF.org"> ICAF </a>
              </li>
            </ul>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            className="p-3 text-center text-md-left order-first"
          >
            <h3>About</h3>
            <p>
              VR Heaven is a virtual reality program developed from the art of
              children and their imaginings of heaven.
            </p>
          </Col>
          <Col xs={12} sm={6} md={4} className="p-3 text-center text-md-left">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#process">Creation Process</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#donate">Donate</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Row className="copy align-items-center">
        <Col xs={12} sm={6} className="text-center text-md-left align-middle">
          <p className="footer-copyright">
            &copy; HRHeaven {new Date().getFullYear()} Developed by Brighton
          </p>
        </Col>
        <Col xs={12} sm={6} className="text-center text-sm-right align-middle">
          <a
            href="https//:facebook.com/brighton-dube"
            className="mr-5"
            id="facebook"
          >
            <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
          </a>
          <a
            href="https//:instagram.com/bradubes"
            className="mr-5"
            id="instagram"
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
          </a>
          <a
            href="https//:twitter.com/InsculptInc"
            className="mr-5"
            id="twitter"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
          </a>
        </Col>
      </Row>
    </Wrapper>
  );
}
