import { memo } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";

import "./HomeEstudante.css";

const HomeEstudante = () => {

    return(

        <>

            <Header/>

            <div className="layout">

                <Sidebar/>

                <main className="conteudo">

                    <h1>Bem-vindo!</h1>

                    <p>

                        Esta é sua área de estudante.

                    </p>

                    <div className="cards">

                        <div className="card">

                            <h2>📢 Avisos</h2>

                            <p>

                                Veja os comunicados da escola.

                            </p>

                        </div>

                        <div className="card">

                            <h2>📅 Eventos</h2>

                            <p>

                                Próximos eventos escolares.

                            </p>

                        </div>

                        <div className="card">

                            <h2>📚 Documentos</h2>

                            <p>

                                Consulte documentos importantes.

                            </p>

                        </div>

                        <div className="card">

                            <h2>👤 Perfil</h2>

                            <p>

                                Atualize suas informações.

                            </p>

                        </div>

                    </div>

                </main>

            </div>

            <Footer/>

        </>

    );

};

export { HomeEstudante };
export default memo(HomeEstudante);