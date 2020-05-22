//jshint esversion: 9
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.footer`
  background-color: #8ac6d1;
  color: #ffe3ed;
  .copy {
    background-color: #3797a4;
    height: 3.5rem;
    padding: 1rem 0;
    p {
      margin 0;
    }
  }
`;
export function Footer() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} className="p-3">
            <ul className="list-unstyled">
              <li>
                <a href="">lorem ipsum</a>
              </li>
              <li>
                <a href="">lorem ipsum</a>
              </li>
              <li>
                <a href="">lorem ipsum</a>
              </li>
              <li>
                <a href="">lorem ipsum</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={4} className="p-3 align-self-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            sint natus iure dignissimos debitis ea modi nisi soluta quos
            deserunt labore molestias corporis, doloribus quia reiciendis
            dolorem tempore! Vitae, magnam!
          </Col>
          <Col xs={12} sm={6} md={4} className="p-3 ">
            <ul className="list-unstyled align-self-end">
              <li>
                <a href="">lorem ipsum</a>
              </li>
              <li>
                <a href="">lorem ipsum</a>
              </li>
              <li>
                <a href="">lorem ipsum</a>
              </li>
              <li>
                <a href="">lorem ipsum</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col xs={12} className="text-center">
          <div className="copy">
            <p>
              &copy; HRHeaven {new Date().getFullYear()} Developed by Brighton
            </p>
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
}
