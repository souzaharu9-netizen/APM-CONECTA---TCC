import { BrowserRouter, Routes, Route } from "react-router-dom";

import Abertura from "../pages/Abertura/Abertura";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro";

// Páginas de cadastro por tipo de usuário
import CadastroEstudante from "../pages/CadastroEstudante/CadastroEstudante";
import CadastroAdulto from "../pages/CadastroAdulto/CadastroAdulto";
import CadastroAdministrador from "../pages/CadastroAdministrador/CadastroAdministrador";

import HomeEstudante from "../pages/HomeEstudante/HomeEstudante";
import HomeAdulto from "../pages/HomeAdulto/HomeAdulto";
import HomeAdmin from "../pages/HomeAdmin/HomeAdmin";

import Perfil from "../pages/Perfil/Perfil";
import Avisos from "../pages/Avisos/Avisos";
import Eventos from "../pages/Eventos/Eventos";
import Financeiro from "../pages/Financeiro/Financeiro";
import Configuracoes from "../pages/Configuracoes/Configuracoes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Páginas iniciais */}
        <Route path="/" element={<Abertura />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Cadastro por tipo de usuário */}
        <Route
          path="/cadastro-estudante"
          element={<CadastroEstudante />}
        />

        
        <Route
          path="/cadastro-adulto"
          element={<CadastroAdulto />}
        />

        <Route
          path="/cadastro-admin"
          element={<CadastroAdministrador />}
        />

        <Route
          path="/cadastro-administrador"
          element={<CadastroAdministrador />}
        />

        {/* Homes */}
        <Route path="/estudante" element={<HomeEstudante />} />
        <Route path="/adulto" element={<HomeAdulto />} />
        <Route path="/admin" element={<HomeAdmin />} />

        {/* Demais páginas */}
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/avisos" element={<Avisos />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/financeiro" element={<Financeiro />} />
        <Route
          path="/configuracoes"
          element={<Configuracoes />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;