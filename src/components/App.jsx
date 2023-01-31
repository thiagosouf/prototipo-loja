import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyles from "./styles/Style";
import Home from "./home/Home";
import Topo from "./topo/Topo";

function App() {
  const [codigo, setCodigo] = useState("");
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Topo setCodigo={setCodigo} />
      <Routes>
        <Route path="/" element={<Home codigo={codigo} />} />
        {/* <Route path="/login" element={<Login setCodigo={setCodigo} />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/dashboard" element={<Dashboard codigo={codigo}/>} />
                <Route path="/novaEntrada" element={<NovaEntrada codigo={codigo}/>} />
                <Route path="/novaSaida" element={<NovaSaida codigo={codigo}/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
