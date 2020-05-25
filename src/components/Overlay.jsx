//jshint esversion: 9
import React from "react";
import styled from "styled-components";

const ColorOverlay = styled.div`
  content: "";
  position: absolute;
  min-height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(190, 221, 244, 0.4);
`;
export default function Overlay() {
  return <ColorOverlay></ColorOverlay>;
}
