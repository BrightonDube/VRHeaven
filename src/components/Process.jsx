//jshint esversion: 9
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Section from "./Section";

const Wrapper = styled.section`
  background: #3797a4;
  min-height: 300px;
  font-size: 1.2rem;
  color: #ffe3ed;
  a {
    color: rgb(100, 200, 100);
  }
`;

export default function Donate({ image }) {
  return (
    <Wrapper as="Section" className="pt-2">
      <Container>
        <Row className="p-4 align-items-center">
          <Col md={7}>
            <img
              src={image}
              className="img-responsive w-100 mt-4 mb-4 shadow rounded"
              alt="art by Vitya"
            />
          </Col>
          <Col>
            <h4 className="text-justify">
              At their world festival, the young artists will co-imagine and
              collaboratively produce a dozen murals that depict their visions
              of heaven.
            </h4>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
