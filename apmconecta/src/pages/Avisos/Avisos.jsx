import { memo } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";

const Avisos = () => {
  const avisos = [
    {
      titulo: "Reunião de Pais",
      data: "15/08/2026",
      descricao: "Reunião geral da APM.",
    },

    {
      titulo: "Feira Cultural",
      data: "28/08/2026",
      descricao: "Participação dos estudantes.",
    },

    {
      titulo: "Campanha Solidária",
      data: "10/09/2026",
      descricao: "Arrecadação de alimentos.",
    },
  ];

  return (
    <>
      <Header />

      <div className="layout">
        <Sidebar />

        <main className="conteudo">
          <h1>Avisos</h1>

          {avisos.map((item, index) => (
            <div className="card" key={index}>
              <h2>{item.titulo}</h2>

              <p>{item.descricao}</p>

              <small>{item.data}</small>
            </div>
          ))}
        </main>
      </div>

      <Footer />
    </>
  );
};

export { Avisos };
export default memo(Avisos);
