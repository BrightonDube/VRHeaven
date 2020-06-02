//jshint esversion: 9
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styled from "styled-components";
// eslint-disable-next-line
import Section from "./Section";
import girls from "../images/3_girls_2015_WCF.jpg";
import teamMembers from "./teamMembers";

const Wrapper = styled.section`
  background: url(${girls}) no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  position: relative;
  overflow: hidden;
  width: 100%;
  .card {
    opacity: 0.8;
  }
`;
export default function Team() {
  return (
    <Wrapper as="Section" id="team" className="pt-2">
      <Container fluid={true}>
        <h1 className="text-center pt-3" style={{ color: "white" }}>
          Team
        </h1>
        <Row className="w-100 h-25 pb-4">
          <Col xs={12} sm={7}>
            <Row>
              {teamMembers.map((member) => (
                <Col sm={12} md={6}>
                  <Card className="mb-3 shadow">
                    <Card.Body>
                      <Card.Title>{member.name}</Card.Title>
                      <Card.Text>{member.bio}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
          <Col>
            <Card
              className="mb-5 shadow"
              style={{
                fontSize: " 1.2rem",
                backgroundColor: "#3797a4",
                color: "#ffe3ed",
                opacity: "1",
              }}
            >
              <Card.Body>
                <Card.Title>Join Us</Card.Title>
                <Card.Text>
                  <p>
                    If you are a subject matter expert in areas relevant to VR
                    Heaven, please consider applying to become a VR Heaven
                    Advisory Board Member. The responsibilities of Advisory
                    Board Members are: Advisory Board Member. The
                    responsibilities of Advisory Board Members are:
                  </p>
                  <ul>
                    <li>
                      to adopt VR Heaven as their charity project and make a
                      reasonable donation upon joining.
                    </li>
                    <li>
                      to contribute ideas and help plan VR Heaven by
                      volunteering a couple of hours a month until VR Heaven is
                      released.
                    </li>
                    <li>
                      to participate in the 6th World Children’s Festival on
                      July 30th – August 1st of 2021.
                    </li>
                    <li>
                      Advisory Board Members serve as pro bono advisers, assume
                      no fiduciary responsibility, and cover their own travel
                      and VR Heaven related expenses. They actively explore
                      partnerships with universities, federal government
                      agencies or departments, research centers, private
                      philanthropies and global businesses.
                    </li>
                    <li>to help market VR Heaven to targeted beneficiaries.</li>
                  </ul>
                  <p>
                    Advisory Board Members serve as pro bono advisers, assume no
                    fiduciary responsibility, and cover their own travel and VR
                    Heaven related expenses. They actively explore partnerships
                    with universities, federal government agencies or
                    departments, research centers, private philanthropies and
                    global businesses.
                  </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                To let us know how you will contribute to this historic and
                important undertaking, please{" "}
                <a
                  style={{ color: "rgb(100, 200, 100)" }}
                  href="https://www.icaf.org/contact.php"
                >
                  contact
                </a>{" "}
                us.
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 235">
        <path
          fill="#8ac6d1"
          fill-opacity="1"
          d="M0,160L48,170.7C96,181,192,203,288,181.3C384,160,480,96,576,85.3C672,75,768,117,864,160C960,203,1056,245,1152,229.3C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </Wrapper>
  );
}
