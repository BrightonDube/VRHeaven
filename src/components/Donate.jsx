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

export default function Donate({ donate }) {
  return (
    <Wrapper as="Section">
      <Container>
        <Row className="pt-2 align-items-center">
          <Col md={5} className="p-3">
            <img
              src={donate}
              className="mt-4 img-responsive w-100 shadow rounded"
              alt="art by Vitya"
            />
          </Col>
          <Col className="p-3">
            <h1 className="text-center">Be An Angel</h1>
            <p className="text-justify">
              You can be a true angel and support VR Heaven with a
              tax-deductible donation to ICAF, which is independently ranked
              among the{" "}
              <a href="http://www.more4kids.info/652/top-childrens-charities/">
                Top 25 Children’s Charities
              </a>{" "}
              in the United States.{" "}
            </p>
            <p>
              Since 1997, ICAF has served American children as their national
              arts organization and the world’s children as their global arts
              organization. An independent, apolitical 501(c)(3) nonprofit with
              Federal Tax I.D. # 52-2032649, ICAF is ranked among the 25 Top
              Children’s Charities in the United States by an unaffiliated
              parents organization.
            </p>{" "}
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
              , or visit <a href="https://icaf.org/">ICAF</a> for more giving
              options. You can also send a check to ICAF, PO BOX 58133,
              Washington DC 20037.
            </p>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
