import styled from "styled-components";

export default function Home(props) {
  const { codigo } = props;
  return <>{codigo ? <Oi>Buscar: {codigo}</Oi> : <>Produtos</>}</>;
}

const Oi = styled.div`
  font-size: 150px;
`;
