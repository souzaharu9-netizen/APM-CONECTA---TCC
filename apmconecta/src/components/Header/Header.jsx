import { memo } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        APM CONECTA
      </Link>
      <div className="usuario">Olá, Usuário</div>
    </header>
  );
};

export { Header };
export default memo(Header);
