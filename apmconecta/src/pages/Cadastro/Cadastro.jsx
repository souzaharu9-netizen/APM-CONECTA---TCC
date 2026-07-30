import { memo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Cadastro.css";
import {
  FaEye,
  FaEyeSlash,
  FaGraduationCap,
  FaUsers,
  FaCog,
  FaChevronRight,
} from "react-icons/fa";

const Cadastro = () => {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);
  const [tipoUsuario, setTipoUsuario] = useState("");
  const navigate = useNavigate();

  return (
    <>
      {/* Cabeçalho */}
      <header>
        <Link to="/" className="logo">
          <div className="icone">A</div>
          <h3>APM Conecta</h3>
        </Link>

        <Link to="/Login" className="Login-link">
          Já tenho conta →
        </Link>
      </header>

      {/* Conteúdo */}
      <section className="cadastro">
        {/* Logo centralizada */}
        <div className="logo-central">
          <div className="icone">A</div>
        </div>

        <h1>Criar conta</h1>
        <p>Junte-se à comunidade APM Conecta gratuitamente</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            switch (tipoUsuario) {
              case "estudante":
                navigate("/cadastro-estudante");
                break;
              case "adulto":
                navigate("/cadastro-adulto");
                break;
              case "administrador":
                navigate("/cadastro-administrador");
                break;
              default:
                alert("Selecione um tipo de usuário.");
            }
          }}
        >
          <h4>DADOS PESSOAIS</h4>
          <label>Nome Completo *</label>
          <input type="text" placeholder="Maria da Silva" />

          <div className="linha">
            <div>
              <label>Data de Nascimento *</label>
              <input type="date" />
            </div>

            <div>
              <label>Telefone Celular</label>
              <input type="tel" placeholder="(11) 99999-0000" />
            </div>
          </div>

          <label>E-mail *</label>
          <input type="email" placeholder="seu@email.com" />

          <label>Escola Vinculada *</label>
          <select>
            <option>Selecione sua escola...</option>
            <option>FIEB - Belval</option>
            <option>FIEB - Alphaville</option>
            <option>FIEB - Jardim Paulista</option>
          </select>

          <hr />

          <h4>SEGURANÇA DA CONTA</h4>
          <label>Senha *</label>
          <div className="senha">
            <input
              type={mostrarSenha ? "text" : "password"}
              placeholder="Mínimo 8 caracteres"
            />
            {mostrarSenha ? (
              <FaEyeSlash
                className="icone-olho"
                onClick={() => setMostrarSenha(false)}
              />
            ) : (
              <FaEye
                className="icone-olho"
                onClick={() => setMostrarSenha(true)}
              />
            )}
          </div>

          <label>Confirmar Senha *</label>
          <div className="senha">
            <input
              type={mostrarConfirmacao ? "text" : "password"}
              placeholder="Repita a senha"
            />
            {mostrarConfirmacao ? (
              <FaEyeSlash
                className="icone-olho"
                onClick={() => setMostrarConfirmacao(false)}
              />
            ) : (
              <FaEye
                className="icone-olho"
                onClick={() => setMostrarConfirmacao(true)}
              />
            )}
          </div>

          <hr />

          <h4>TIPO DE USUÁRIO</h4>
          <div className="tipo">
            <div
              className={`card ${tipoUsuario === "estudante" ? "ativo" : ""}`}
              onClick={() => setTipoUsuario("estudante")}
            >
              <FaGraduationCap />
              <div>
                <h5>Estudante</h5>
                <p>
                  Visualiza campanhas, acompanha arrecadações e envia sugestões.
                </p>
              </div>
              <FaChevronRight />
            </div>

            <div
              className={`card ${tipoUsuario === "adulto" ? "ativo" : ""}`}
              onClick={() => setTipoUsuario("adulto")}
            >
              <FaUsers />
              <div>
                <h5>Adulto</h5>
                <p>
                  Pais, responsáveis e professores. Realiza doações e participa
                  das campanhas.
                </p>
              </div>
              <FaChevronRight />
            </div>

            <div
              className={`card ${
                tipoUsuario === "administrador" ? "ativo" : ""
              }`}
              onClick={() => setTipoUsuario("administrador")}
            >
              <FaCog />
              <div>
                <h5>Administrador</h5>
                <p>
                  Acesso à área administrativa. Requer autorização da escola.
                </p>
              </div>
              <FaChevronRight />
            </div>
          </div>

          <div className="termos">
            <input type="checkbox" />
            <span>
              Aceito os <Link to="/termos">Termos de Uso</Link> e a{" "}
              <Link to="/privacidade">Política de Privacidade</Link>
            </span>
          </div>

          <button type="submit">Criar Conta</button>
        </form>

        <div className="login-footer">
          <Link to="/login">Já possui conta? Entrar</Link>
        </div>
      </section>
    </>
  );
};

export { Cadastro };
export default memo(Cadastro);
