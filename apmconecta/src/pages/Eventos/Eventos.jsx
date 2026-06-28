import { memo } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";

const Eventos = () => {
  const eventos = [
    { titulo: "Feira Cultural", data: "28/08/2026" },
    { titulo: "Reunião de Pais", data: "15/08/2026" },
  ];

  return (
    <>
      <Header />
      <div className="layout">
        <Sidebar />
        <main className="conteudo">
          <h1>Eventos</h1>
          {eventos.map((e, i) => (
            <div className="card" key={i}>
              <h3>{e.titulo}</h3>
              <small>{e.data}</small>
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </>
  );
};

export { Eventos };
export default memo(Eventos);
