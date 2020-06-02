//jshint esversion: 9
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
// eslint-disable-next-line
import Section from "./Section";

const Wrapper = styled.section`
  background-color: white;
  color: #004a82;
  min-height: 500px;
  img {
    width: 100%;
  }
`;
const Img = styled.img`
  width: 100vw;

  border: solid 1px black;
  object-fit: cover;
  object-position: center center;
`;

export default function Division({ pic, text, creator, country }) {
  return (
    <Wrapper as="Section">
      <Row>
        <Container>
          <Col className="text-center pr-5 pl-5 pb-5 pt-3">
            <h2>{text}</h2>
            <Img
              className="img-responsive shadow mt-4 rounded"
              src={pic}
              alt={creator}
            />
            <p>
              {creator} {country}
            </p>
          </Col>
        </Container>
      </Row>
    </Wrapper>
  );
}
