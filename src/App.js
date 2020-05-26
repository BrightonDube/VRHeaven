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
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import Team from "./components/Team.jsx";
import Donate from "./components/Donate";
import Home from "./components/Home";
import MyCarousel from "./components/Carousel";

//images
import donate from "./images/Kazakhstan.jpg";

library.add(fab, faPhone, faMapMarkedAlt, faEnvelope, faGlobe, faVrCardboard);

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
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
  padding-top: 5rem;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <NavBar />
        <Main>
          {/* Home Section */}
          <Home />
          <MyCarousel />
          {/* Donate Section */}
          <Donate donate={donate} />

          {/* Meet the team */}
          <Team />
        </Main>
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
