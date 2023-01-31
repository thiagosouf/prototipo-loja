import styled from "styled-components";
import SlidePrincipal from "../slides/SlidePrincipal";
import SlideSecundario from "../slides/SlideSecundario";

export default function Home(props) {
  const { codigo } = props;
  return (
    <HomePrincipal>
      <SlidePrincipal></SlidePrincipal>
      <SlideSecundario />
      {codigo ? <Oi>Buscar: {codigo}</Oi> : <>Produtos</>}
    </HomePrincipal>
  );
}

const HomePrincipal = styled.div`
  background-color: #4a7f48;
`;

const Oi = styled.div`
  font-size: 150px;
`;
