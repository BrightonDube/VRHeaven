//jshint esversion: 9
import React from "react";
import { Container } from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import wave from "../public/img/wave.png";

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
  min-height: 600px;
`;

const Wrapper = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const Main = styled.div`
  min-height: 100vh;
  .wave {
    position: relative;
    background: linear-gradient(90deg, #beebe9, #bed6f9);
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <NavBar />
        <Main>
          <Section className="wave">Section 1</Section>
          <Section>section2</Section>
        </Main>
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
