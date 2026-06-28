import { memo } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";

const Financeiro = () => {
  const itens = [
    { descricao: "Contribuição mensal", valor: "R$ 50,00" },
    { descricao: "Doação", valor: "R$ 100,00" },
  ];

  return (
    <>
      <Header />
      <div className="layout">
        <Sidebar />
        <main className="conteudo">
          <h1>Financeiro</h1>
          <div className="tabela">
            {itens.map((it, i) => (
              <div className="linha" key={i}>
                <span>{it.descricao}</span>
                <strong>{it.valor}</strong>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export { Financeiro };
export default memo(Financeiro);
