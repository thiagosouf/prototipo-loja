import React from "react";
import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import propaganda1 from "../../../../propaganda.webp";
import propaganda2 from "../../../../propaganda2.webp";
import propaganda3 from "../../../../propaganda3.webp";
import propaganda4 from "../../../../propaganda4.webp";
import propaganda5 from "../../../../propaganda5.webp";
import propaganda6 from "../../../../propaganda6.webp";
import "react-slideshow-image/dist/styles.css";

export default function SlidePrincipal(props) {
  const images = [
    propaganda1,
    propaganda2,
    propaganda3,
    propaganda4,
    propaganda5,
    propaganda6,
  ];

  return (
    <Slide>
      <Propaganda>
        <div style={{ backgroundImage: `url(${images[0]})` }}></div>
      </Propaganda>
      <Propaganda>
        <div style={{ backgroundImage: `url(${images[1]})` }}></div>
      </Propaganda>
      <Propaganda>
        <div style={{ backgroundImage: `url(${images[2]})` }}></div>
      </Propaganda>
      <Propaganda>
        <div style={{ backgroundImage: `url(${images[3]})` }}></div>
      </Propaganda>
      <Propaganda>
        <div style={{ backgroundImage: `url(${images[4]})` }}></div>
      </Propaganda>
      <Propaganda>
        <div style={{ backgroundImage: `url(${images[5]})` }}></div>
      </Propaganda>
    </Slide>
  );
}

const Propaganda = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: 100vw 100%;
    background-repeat: no-repeat;
    height: 350px;
  }
`;
