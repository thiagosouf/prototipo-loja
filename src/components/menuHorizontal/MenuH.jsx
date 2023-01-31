import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

export default function MenuH(props) {
  return (
    <Menu>
      <MenuVertical></MenuVertical>
      <ul>
        <a href="">Princial</a>
        <a href="">Alimentos</a>
        <a href="">Bebidas</a>
        <a href="">Mercado</a>
        <a href="">Outros</a>
      </ul>
    </Menu>
  );
}

const Menu = styled.div`
  background-color: #4a7f48;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  ul {
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    padding: 5px 0px;
    a {
      color: white;
    }
  }
`;

const MenuVertical = styled(MenuIcon)`
  cursor: pointer;
  /* margin-left: 3vw; */
  :hover {
    border: 2px solid #558908;
    border-radius: 50px;
    background-color: #558908;
  }
  :active {
    border: 0px;
    border-radius: 50px;
    background-color: #2c8b2c;
  }
`;
