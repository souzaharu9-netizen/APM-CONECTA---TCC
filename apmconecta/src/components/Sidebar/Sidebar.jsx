import { memo } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Menu</h2>
      <Link to="/home-estudante">Home</Link>
      <Link to="/perfil">Perfil</Link>
      <Link to="/avisos">Avisos</Link>
      <Link to="/eventos">Eventos</Link>
      <Link to="/financeiro">Financeiro</Link>
      <Link to="/configuracoes">Configurações</Link>
      <Link to="/">Sair</Link>
    </aside>
  );
};

export { Sidebar };
export default memo(Sidebar);
