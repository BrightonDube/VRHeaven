//jshint esversion: 9
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Section from "./Section";
import Overlay from "./Overlay";
import palette from "../images/palette.jpg";

const Wrapper = styled.section`
  background-image: url(${palette});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  .wave {
    position: relative;
    height: 100%;
  }
  .home-text {
    z-index: 10;
    color: white;
    background-color: rgba(88, 180, 174, 0.55);
    width: 100%;
    font-size: 2rem;
    h1 {
      font-size: 3.5rem;
    }
  }
`;

export default function Home() {
  return (
    <Wrapper as="Section">
      <Row className="wave align-items-center">
        <div className="home-text text-md-justify mt-3">
          <Container>
            <Col md={8} className="offset-md-4">
              <h1> What's Your Idea Of Heaven? </h1>
              <p>
                Heaven is a powerfully evocative concept with transcendental
                connotations for most belief systems, be they secular or
                religious.
              </p>
            </Col>
          </Container>
        </div>
        <Overlay />
      </Row>
    </Wrapper>
  );
}
