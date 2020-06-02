//jshint esversion: 9
//modules
import React from "react";
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
import Footer from "./components/Footer";

import Team from "./components/Team.jsx";
import Event from "./components/Event";
import Process from "./components/Process";
import Process2 from "./components/Process2";
import Division from "./components/Division";
import Donate from "./components/Donate";

//images

import logopic from "./images/photowcflogo.jpg";
import mural from "./images/mural_making.jpg";
import heaven from "./images/heavenlogojpg.jpg";
import icaf from "./images/ICAF-logo.1444x636.jpg";
import slide1 from "./images/Azerbaijan_Narmina.jpg";
import slide2 from "./images/Kazakhstan.jpg";
import slide3 from "./images/Nigeria.jpg";
import slide4 from "./images/CaliforniaJonathan.jpg";
import slide5 from "./images/Egypt_Sherry_Atef_Georgy_12.jpg";
import slide6 from "./images/WorldMural.jpg";
import Arc from "./components/arc";

const imageData = [
  {
    file: `${slide3}`,
    name: "Linda Kholobekian (age 11) ",
    country: "Nigeria",
    quote:
      "Heaven is a powerfully evocative concept with transcendental connotations for most belief systems, be they secular or religious.",
  },
  {
    file: `${slide2}`,
    name: "Akhtoty Nurtanova (age 8) ",
    country: "Kazakhstan",
    quote:
      "Heaven has always been and will forever be the ultimate human experience.",
  },
  {
    file: `${slide4}`,
    name: "Jonathan Stearns (age 12) ",
    country: "California, USA",
    quote:
      "Adults tell children if heaven exists or does not, what it is and is not, but no one asks the children what they think of heaven and how they visualize it.",
  },
  {
    file: `${slide5}`,
    name: "Sherry Atef Georgy (age 12) ",
    country: "Egypt",
    quote:
      "Walt Disney said, “our greatest natural resource is the minds of our children.”",
  },
  {
    file: `${slide1}`,
    name: "Narmina Veliyeva (age 14) ",
    country: "Azerbaijan",
    quote:
      "Cynthia Ozick, a 92-years-old novelist says, “to imagine the unimaginable is the highest use of the imagination.”",
  },
  {
    file: `${slide6}`,
    name: "“Children’s World Mural” ",
    country:
      "co-created by child artists from 59 countries at the World Children’s Festival",
    quote:
      "Ashfaq Ishaq, the founder and chair of the International Child Art Foundation, says “the collective imagination of the world’s children is the most powerful force in the universe.”",
  },
];

library.add(fab, faPhone, faMapMarkedAlt, faEnvelope, faGlobe, faVrCardboard);

const GlobalStyle = createGlobalStyle`
 
  html, body {
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
`;

const Main = styled.div`
  min-height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Main>
          <div id="home" className="container">
            <Arc className="ml-5 mr-5 mt-3" />

            {imageData.map((item) => (
              <Division
                pic={item.file}
                text={item.quote}
                creator={item.name}
                country={item.country}
              />
            ))}
          </div>
          <Event image={logopic} />
          <Process image={mural} />
          <Process2 image={heaven} />

          {/* Donate Section */}
          <Donate image={icaf} />
          {/* Meet the team */}
          <Team />
          <Footer />
        </Main>
      </Wrapper>
    </>
  );
}

export default App;
