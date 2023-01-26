import styled from "styled-components";
import logo from "../../assets/logo.webp";
import banner from "../../../../bannerlongo.webp";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SearchIcon from "@mui/icons-material/Search";
// import axios from "axios";

export default function Topo(props) {
  const [buscar, setBuscar] = useState("");

  function fazerBusca(event) {
    event.preventDefault();

    console.log("entrou no login");
    console.log(buscar);
    props.setCodigo(buscar);
  }

  return (
    <>
      <ContainerTopo>
        <a href="/">
          <Logo src={logo} />
        </a>

        <Formulario onSubmit={fazerBusca}>
          <input
            type="buscar"
            id="buscar"
            placeholder="buscar"
            value={buscar}
            onChange={(e) => setBuscar(e.target.value)}
            required
          ></input>

          <BotaoLupa type="submit">
            <span>Buscar</span>
            <Lupa />
          </BotaoLupa>
        </Formulario>
        <Login>
          <Perfil sx={{ typography: { fontSize: 35 } }} />
          <Entrar>
            Faça <a href=""> LOGIN</a> ou crie seu <a href="">CADASTRO</a>
          </Entrar>
        </Login>
        <Carrinho sx={{ typography: { fontSize: 35 } }} />
      </ContainerTopo>
      Categorias
      <Promocao>
        <Banner src={banner} />
      </Promocao>
    </>
  );
}

const ContainerTopo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* height: 55px; */
  height: 4rem;
  background-color: #4a7f48;
`;

const Logo = styled.img`
  height: 3rem;
`;

const Login = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Entrar = styled.span`
  margin-left: 3px;
  @media (max-width: 760px) {
    display: none;
  }
`;

const Formulario = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    height: 30px;
    width: 40vw;
    border-radius: 5px 0px 0px 5px;
    font-size: 20px;
    border: 2px solid red;
    @media (max-width: 760px) {
      width: 30vw;
    }
  }
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  input::placeholder {
    color: #000;
  }
`;

const BotaoLupa = styled.button`
  max-width: 10vw;
  height: 30px;
  background: red;
  color: #ffffff;
  border-radius: 0px 5px 5px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border: 2px solid red;
  cursor: pointer;
  :active {
    border: 0px;
    font-size: 0.9rem;
  }
  span {
    @media (max-width: 760px) {
      display: none;
    }
  }
`;

const Lupa = styled(SearchIcon)`
  cursor: pointer;
`;

const Perfil = styled(AccountCircleIcon)`
  cursor: pointer;
`;

const Carrinho = styled(LocalGroceryStoreIcon)`
  cursor: pointer;
`;

const Promocao = styled.div`
  display: flex;
`;

const Banner = styled.img`
  width: 100vw;
`;
