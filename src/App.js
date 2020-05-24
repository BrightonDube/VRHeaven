//jshint esversion: 9
//modules
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faMapMarkedAlt,
  faEnvelope,
  faGlobe,
  faVrCardboard,
} from "@fortawesome/free-solid-svg-icons";

//components
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import teamMembers from "./components/team";

//images
import girls from "./images/3_girls_2015_WCF.jpg";
import wave from "./images/wave.png";
import baby2 from "./images/baby-2.png";
library.add(fab, faPhone, faMapMarkedAlt, faEnvelope, faGlobe, faVrCardboard);

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
  html, body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
//for the wave effect
const Section = styled.section`
  width: 100%;
  min-height: 700px;
`;

const Wrapper = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const Main = styled.div`
  min-height: 100vh;
  padding-top: 5rem;
  .wave {
    position: relative;
    color: white;
    background: linear-gradient(90deg, #beebe9, #bed6f9);
    background-size: cover;
  }
  .wave::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 218px;
    background: url(${wave}) no-repeat;
    background-size: cover;
  }
  .test {
    background-color: rgba(234, 234, 43, 233, 0.7);
  }
  .card {
    opacity: 0.8;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <NavBar />
        <Main>
          <Section className="wave">
            <Row>
              <Container></Container>
            </Row>
          </Section>

          {/* Meet the team */}
          <Section
            style={{ backgroundImage: `url(${girls}`, backgroundSize: "cover" }}
          >
            <Container fluid={true}>
              <h1 className="text-center pt-3" style={{ color: "white" }}>
                Team
              </h1>
              <Row className="w-100 h-25">
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
                    className="mb-3 shadow"
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
                          If you are a subject matter expert in areas relevant
                          to VR Heaven, please consider applying to become a VR
                          Heaven Advisory Board Member. The responsibilities of
                          Advisory Board Members are: Advisory Board Member. The
                          responsibilities of Advisory Board Members are:
                        </p>
                        <ul>
                          <li>
                            to adopt VR Heaven as their charity project and make
                            a reasonable donation upon joining.
                          </li>
                          <li>
                            to contribute ideas and help plan VR Heaven by
                            volunteering a couple of hours a month until VR
                            Heaven is released.
                          </li>
                          <li>
                            to participate in the 6th World Children's Festival
                            July 31 to August 2, 2020
                          </li>
                          <li>
                            Advisory Board Members serve as pro bono advisers,
                            assume no fiduciary responsibility, and cover their
                            own travel and VR Heaven related expenses. They
                            actively explore partnerships with universities,
                            federal government agencies or departments, research
                            centers, private philanthropies and global
                            businesses.
                          </li>
                          <li>
                            to help market VR Heaven to targeted beneficiaries.
                          </li>
                        </ul>
                        <p>
                          Advisory Board Members serve as pro bono advisers,
                          assume no fiduciary responsibility, and cover their
                          own travel and VR Heaven related expenses. They
                          actively explore partnerships with universities,
                          federal government agencies or departments, research
                          centers, private philanthropies and global businesses.
                        </p>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      To let us know how you will contribute to this historic
                      and important undertaking, please{" "}
                      <a
                        style={{ color: "#ffe3ed" }}
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
          </Section>
        </Main>
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
