import styled from "styled-components";

import propaganda1 from "../../../../BANNER-SECUNDARIO-ACOUGUE-454x200_43.webp";

const images = [propaganda1];

export default function SlideSecundario() {
  return (
    <MenuSlideSecundario>
      <Propaganda>
        <div style={{ backgroundImage: `url(${images[0]})` }}></div>
      </Propaganda>
      <Propaganda>
        <div style={{ backgroundImage: `url(${images[0]})` }}></div>
      </Propaganda>
      <Propaganda>
        <div style={{ backgroundImage: `url(${images[0]})` }}></div>
      </Propaganda>
      <Propaganda>
        <div style={{ backgroundImage: `url(${images[0]})` }}></div>
      </Propaganda>
      <Propaganda>
        <div style={{ backgroundImage: `url(${images[0]})` }}></div>
      </Propaganda>
    </MenuSlideSecundario>
  );
}

const Propaganda = styled.div`
  width: 20vw;

  div {
    border-radius: 5px;
    margin: 1rem;
    background-size: cover;
    background-repeat: no-repeat;
    height: 15vh;
    @media (max-width: 760px) {
      display: none;
    }
  }
`;

const MenuSlideSecundario = styled.div`
  display: flex;
  width: 100vw;
`;
