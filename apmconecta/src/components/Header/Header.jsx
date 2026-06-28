import { memo } from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">APM CONECTA</div>
      <div className="usuario">Olá, Usuário</div>
    </header>
  );
};

export { Header };
export default memo(Header);
