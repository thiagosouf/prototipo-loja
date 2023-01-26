import styled from "styled-components";

export default function MenuH(props) {
  return (
    <Menu>
      <a href="">Princial</a>
      <a href="">Alimentos</a>
      <a href="">Bebidas</a>
      <a href="">Mercado</a>
      <a href="">Outros</a>
    </Menu>
  );
}

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #4a7f48;
  padding: 5px 0px;
  a {
    color: white;
  }
`;
