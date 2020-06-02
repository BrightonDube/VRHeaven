//jshint esversion: 9
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
// eslint-disable-next-line
import Section from "./Section";

const Wrapper = styled.section`
  background-color: rgb(228, 223, 240);
  color: rgb(55, 151, 164);
  min-height: 300px;
  font-size: 1.2rem;
`;

export default function Event({ image }) {
  return (
    <Wrapper as="Section" className="pt-2 pb-4">
      <Container>
        <Row className="align-items-center p-4">
          <Col sm={6}>
            <h4 className="text-justify">
              VR software engineers and professors from the Rochester Institute
              of Technology, the University of Maryland and other institutions
              will turn the “heavenly” murals into an immersive virtual reality
              experience that could be therapeutic for the young and the old in
              the post-coronavirus world.
            </h4>
          </Col>
          <Col sm={6}>
            <img
              className="img-responsive mt-4 mb-4 d-block w-100 rounded-lg shadow-lg"
              src={image}
              alt="world children's festival venue"
            />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
