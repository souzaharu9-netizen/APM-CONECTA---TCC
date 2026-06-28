import { memo } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import "./Perfil.css";

const Perfil = () => {

    return(

        <>
            <Header/>

            <div className="layout">

                <Sidebar/>

                <main className="conteudo">

                    <h1>Meu Perfil</h1>

                    <div className="perfil-card">

                        <div className="foto">

                            <img
                                src="https://via.placeholder.com/180"
                                alt="Foto do usuário"
                            />

                            <button>Alterar Foto</button>

                        </div>

                        <div className="dados">

                            <label>Nome</label>
                            <input type="text" value="João da Silva"/>

                            <label>Email</label>
                            <input type="email" value="joao@email.com"/>

                            <label>Telefone</label>
                            <input type="text" value="(11)99999-9999"/>

                            <label>Endereço</label>
                            <input type="text" value="Rua Exemplo"/>

                            <button className="salvar">

                                Salvar Alterações

                            </button>

                        </div>

                    </div>

                </main>

            </div>

            <Footer/>

        </>

    )

};

export { Perfil };
export default memo(Perfil);