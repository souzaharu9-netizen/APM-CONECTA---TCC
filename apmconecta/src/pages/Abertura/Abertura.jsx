import { memo } from "react";
import "./Abertura.css";

const Abertura = () => {
    return (
        <div className="abertura">

            <header className="hero">

                <h1>APM CONECTA</h1>

                <p>
                    Sistema desenvolvido para aproximar estudantes,
                    responsáveis e administração escolar através de um
                    ambiente moderno, organizado e de fácil utilização.
                </p>

                <div className="botoes">

                    <button>
                        Entrar
                    </button>

                    <button className="cadastro">
                        Criar Conta
                    </button>

                </div>

            </header>

            <section className="sobre">

                <h2>O que é o APM CONECTA?</h2>

                <p>
                    O APM CONECTA é uma plataforma criada para facilitar a
                    comunicação entre estudantes, responsáveis e equipe
                    administrativa da Associação de Pais e Mestres.
                </p>

            </section>

            <section className="recursos">

                <div className="card">

                    <h3>📢 Avisos</h3>

                    <p>
                        Consulte todos os avisos importantes da escola.
                    </p>

                </div>

                <div className="card">

                    <h3>📅 Eventos</h3>

                    <p>
                        Fique por dentro de reuniões e eventos escolares.
                    </p>

                </div>

                <div className="card">

                    <h3>💰 Financeiro</h3>

                    <p>
                        Consulte contribuições e prestações de contas.
                    </p>

                </div>

            </section>

            <footer>

                © 2026 APM CONECTA

            </footer>

        </div>
    );
};

export { Abertura };
export default memo(Abertura);