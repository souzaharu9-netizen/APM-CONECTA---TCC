import { memo } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Sobre = () => {
  return (
    <>
      <Header />
      <main className="conteudo sobre">
        <h1>Sobre o APM CONECTA</h1>
        <p>
          O APM CONECTA é uma plataforma criada para facilitar a comunicação
          entre estudantes, responsáveis e a administração escolar.
        </p>
      </main>
      <Footer />
    </>
  );
};

export { Sobre };
export default memo(Sobre);
