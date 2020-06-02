//jshint esversion: 9
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Section from "./Section";

const Wrapper = styled.section`
  background-color: rgb(228, 223, 240);
  color: rgb(55, 151, 164);
  min-height: 500px;
`;

export default function Event({ image }) {
  return (
    <Wrapper as="Section" id="events" className="pt-2">
      <h1 className="text-center pt-3">World Children's Festival</h1>
      <Container>
        <Row className="align-items-center p-3">
          <Col sm={6}>
            <h4 className="text-justify">
              The world’s leading child artists will convene at the 6th World
              Children’s Festival on July 30th – August 1st of 2021.
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
