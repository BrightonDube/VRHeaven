//jshint esversion: 9
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Section from "./Section";

const Wrapper = styled.section`
  background: rgb(230, 244, 255);
  min-height: 300px;
  font-size: 1.2rem;
`;

export default function Donate({ image }) {
  return (
    <Wrapper as="Section" id="about" className="pt-2">
      <Container>
        <Row id="donate">
          <Col className="text-justify">
            <h1 className="text-center pt-5 pb-5">
              Do you have a Heaven inside you?
            </h1>
            <h5 className="text-center pb-4">
              You could join the children at their 2021 World Children’s
              Festival across from the U.S. Capitol. You can be an angel today
              and support the VR Heaven with{" "}
              <a href="https://ICAF.org">a tax-deductible donation</a>.
            </h5>
            <Row>
              <Col sm={6}>
                <h3>VR Heaven can:</h3>
                <ul>
                  <li>
                    Bring joy and comfort to US teens who feel depressed because
                    of covid-19 and everyday tensions.
                  </li>
                  <li>
                    Alleviate pain and bring solace to patients at some of the
                    5,534 hospitals in the U.S.
                  </li>
                  <li>
                    Provide comfort to some of the 2.5 million patients at the
                    14,000 or so treatment centers in the U.S.
                  </li>
                  <li>
                    Be a part of palliative care for some of the 1.3 million
                    Americans in the 5,500 hospices and 15,500 nursing homes.
                  </li>
                  <li>
                    Bring hope to some of the 2.3 million people incarcerated in
                    the U.S., especially the 48,000 youth in juvenile detention.
                  </li>
                </ul>
              </Col>
              <Col sm={6}>
                <h3>VR Heaven can also:</h3>
                <ul>
                  <li>
                    Facilitate interfaith discussions at schools and colleges
                  </li>
                  <li>Initiate parlays on spirituality</li>
                  <li>
                    Nurture a sense of community in multicultural and
                    multi-religious workplaces
                  </li>
                  <li>
                    Foster futures thinking as an antidote to short-termism
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row className="pt-2 align-items-center ">
          <Col className="p-3">
            <h1 className="text-center">
              <a href=" https://icaf.org">
                <img src={image} height="120px" alt="icaf logo" />{" "}
              </a>
            </h1>
            <p>
              The International Child Art Foundation serves American children as
              their national arts organization and the world’s children as their
              global arts organization.
            </p>

            <p>
              ICAF seeds children’s imagination, cultivates their creativity,
              and grows mutual empathy through the arts— their native and
              universal language.
            </p>

            <p>
              An unaffiliated parents’ group has ranked ICAF among the 25 Top
              Children’s Charities in the United States.
            </p>

            <p className="text-center">
              Learn more about <a href="https://icaf.org/">ICAF</a> and the{" "}
              <a href="https://worldchildrensfestival.org/">
                World Children’s Festival
              </a>
              .
            </p>

            <p className="text-center">
              <a href="https://icaf.org/contact.php">Join</a> the VR-Heaven Team
            </p>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
