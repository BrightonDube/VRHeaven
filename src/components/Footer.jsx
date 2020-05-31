//jshint esversion: 9
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FacebookShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  ViberIcon,
} from "react-share";

const Wrapper = styled.footer`
  background-color: #8ac6d1;
  color: #ffe3ed;
  a {
    color: #ffe3ed;
  }
  #facebook:hover {
    color: #3b5998;
  }
  #instagram:hover {
    color: #3f729b;
  }
  #twitter:hover {
    color: #00acee;
  }
  #youtube:hover {
    color: red;
  }
`;
export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6} className="p-3 order-last">
            <Row>
              <Col className=" mb-4">
                <h5>Follow Us</h5>
                <a
                  href="https://www.facebook.com/ICAF.org"
                  className="mr-5"
                  id="facebook"
                >
                  <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
                </a>
                <a
                  href="https://www.instagram.com/intlchildartfoundation/"
                  className="mr-5"
                  id="instagram"
                >
                  <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
                </a>
                <a
                  href="https://twitter.com/ICAF_org "
                  className="mr-5"
                  id="twitter"
                >
                  <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
                </a>
                <a
                  href="https://www.youtube.com/user/ICAFfestival"
                  className="mr-5"
                  id="youtube"
                >
                  <FontAwesomeIcon icon={["fab", "youtube"]} size="2x" />
                </a>
              </Col>
            </Row>
            <Row>
              <Col className="">
                <h5>Share us on Social Media</h5>
                <FacebookShareButton
                  url="http://vrheaven.org/"
                  hashtag="#vrheaven"
                  className="text-center mr-4"
                >
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <TwitterShareButton
                  title="VRHeaven"
                  url="http://vrheaven.org/"
                  hashtags={["charity", "art"]}
                  className="text-center mr-4"
                >
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <ViberShareButton
                  title="VRHeaven"
                  url="http://vrheaven.org/"
                  className="text-center mr-4"
                >
                  <ViberIcon size={32} round={true} />
                </ViberShareButton>
                <WhatsappShareButton
                  title="VRHeaven"
                  url="http://vrheaven.org/"
                  className="text-center mr-4"
                >
                  <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
                <LinkedinShareButton
                  url="http://vrheaven.org/"
                  className="text-center mr-4"
                >
                  <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
              </Col>
            </Row>
          </Col>
          <Col
            xs={12}
            sm={6}
            className="p-3 text-center text-md-left order-first"
          >
            <h3>About</h3>
            <p>
              VR Heaven is a virtual reality simulation based on children’s art
              and imagination to comfort or heal young and old. The artists are
              selected through art contests under the 6th Arts Olympiad—the
              world’s largest school art program.
            </p>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
