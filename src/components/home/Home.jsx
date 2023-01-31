import styled from "styled-components";
import SlidePrincipal from "../slides/SlidePrincipal";

export default function Home(props) {
  const { codigo } = props;
  return (
    <>
      <SlidePrincipal></SlidePrincipal>
      {codigo ? <Oi>Buscar: {codigo}</Oi> : <>Produtos</>}
    </>
  );
}

const Oi = styled.div`
  font-size: 150px;
`;
