//jshint esversion: 9
import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: center center;
`;
export default function CarouselImg({ imageFile, name, location }) {
  return (
    <Img
      className="d-block w-100 img-responsive"
      src={imageFile}
      alt={(name, location)}
    />
  );
}
