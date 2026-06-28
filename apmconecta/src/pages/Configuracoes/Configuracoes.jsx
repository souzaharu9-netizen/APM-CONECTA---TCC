import { memo } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";

const Configuracoes = () => {
  return (
    <>
      <Header />
      <div className="layout">
        <Sidebar />
        <main className="conteudo">
          <h1>Configurações</h1>
          <p>Opções de configuração do sistema.</p>
        </main>
      </div>
      <Footer />
    </>
  );
};

export { Configuracoes };
export default memo(Configuracoes);
