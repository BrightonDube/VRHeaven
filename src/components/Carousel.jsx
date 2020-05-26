//jshint esversion: 9
import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

import CarouselImg from "./CarouselImg";
//images
import slide1 from "../images/Azerbaijan_Narmina.jpg";
import slide2 from "../images/Kazakhstan.jpg";
import slide3 from "../images/Nigeria.jpg";
import slide4 from "../images/CaliforniaJonathan.jpg";
import slide5 from "../images/Egypt_Sherry_Atef_Georgy_12.jpg";
import slide6 from "../images/WorldMural.jpg";

const imageData = [
  {
    file: `${slide1}`,
    name: "Narmina Veliyeva (age 14) ",
    country: "Azerbaijan",
    quote:
      "Cynthia Ozick, a 92-years-old novelist says, “to imagine the unimaginable is the highest use of the imagination.”",
  },
  {
    file: `${slide2}`,
    name: "Akhtoty Nurtanova (age 8) ",
    country: "Kazakhstan",
    quote:
      "Heaven has always been and will forever be the ultimate human experience.",
  },
  {
    file: `${slide3}`,
    name: "Linda Kholobekian (age 11) ",
    country: "Nigeria",
    quote:
      "Heaven is a powerfully evocative concept with transcendental connotations for most belief systems, be they secular or religious.",
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
    file: `${slide6}`,
    name: "“Children’s World Mural” ",
    country:
      "co-created by child artists from 59 countries at the World Children’s Festival",
    quote:
      "Ashfaq Ishaq, the founder and chair of the International Child Art Foundation, says “the collective imagination of the world’s children is the most powerful force in the universe.”",
  },
];

const Wrapper = styled.div`
  width: 100%;
  min-height: 568px;
  background: linear-gradient(90deg, tomato, palevioletred);
  color: white;
  .carousel-caption,
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
export default function MyCarousel() {
  return (
    <Wrapper>
      <h1 className="pt-5 text-center">Art Gallery</h1>

      <Carousel style={{}}>
        {imageData.map((image) => (
          <Carousel.Item>
            <CarouselImg
              imageFile={image.file}
              name={image.name}
              location={image.country}
            />
            <Carousel.Caption>
              <h3>{image.quote}</h3>
              <h5>Art by: {image.name}</h5>
              <p>{image.country}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Wrapper>
  );
}
