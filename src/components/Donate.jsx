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

export default function Donate({ image, image1 }) {
  return (
    <Wrapper as="Section" id="about">
      <Container>
        <Row className="pt-2 align-items-center">
          <Col md={5} className="p-3">
            <img
              src={image}
              className="mt-4 img-responsive w-100 shadow rounded"
              alt="art by Vitya"
            />
          </Col>
          <Col className="p-3">
            <h1 className="text-center">
              <img src={image1} height="70px" alt="icaf logo" />{" "}
            </h1>
            <p className="text-justify">
              ICAF seeds children’s imagination, cultivates their creativity,
              and grows mutual empathy through the arts— their native and
              universal language.
            </p>
            <p>
              Since 1997, ICAF has served American children as their national
              arts organization and the world’s children as their global arts
              organization. An independent, apolitical 501(c)(3) nonprofit with
              Federal Tax I.D. # 52-2032649, ICAF is ranked among the{" "}
              <a href="http://www.more4kids.info/652/top-childrens-charities/">
                Top 25 Children’s Charities
              </a>{" "}
              in the United States by an unaffiliated parents organization.
            </p>{" "}
          </Col>
        </Row>
        <Row>
          <Col className="text-justify">
            <h1 className="text-center">Do you have a Heaven inside you?</h1>
            <h5 className="text-center">
              You could join the children at their 2021 World Children’s
              Festival across from the U.S. Capitol. You can be an angel today
              and support the VR Heaven with a tax-deductible donation.
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
                <p>
                  You may contribute through{" "}
                  <a href="https://www.justgiving.com/internationalchildartfoundation">
                    JustGiving.org
                  </a>
                  ,{" "}
                  <a href="https://www.networkforgood.org/donation/MakeDonation.aspx?ORGID2=522032649&vlrStratCode=yJf5oYLpNrE3oChHZyyIE3pKa%2fRkgOhiwGiHMXAlUSwlfAyI3dZOeC8cvbXlqiky">
                    NetworkForGood
                  </a>
                  ,
                  <a href="https://www.paypal.com/us/fundraiser/112574644767835624/charity/2737335">
                    PayPal
                  </a>
                  , or visit <a href="https://icaf.org/">ICAF</a> for more
                  giving options. You can also send a check to ICAF, PO BOX
                  58133, Washington DC 20037.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
