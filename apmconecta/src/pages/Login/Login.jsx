import { useState } from "react";
import "./Login.css";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <div className="login-page">
      {/* Cabeçalho */}
      <header className="login-header">
        <Link to="/" className="login-logo">
          <div className="login-logo-circle">A</div>
          <span>APM Conecta</span>
        </Link>

        <Link to="/" className="login-back">
          ← Voltar
        </Link>
      </header>

      {/* Conteúdo */}
      <main className="login-main">
        <div className="login-container">
          <div className="login-icon">A</div>

          <h1>Bem-vindo de volta</h1>
          <p>Entre na sua conta APM Conecta</p>

          <div className="login-card">
            {/* Email */}
            <label htmlFor="email">E-mail</label>

            <input
              id="email"
              className="login-input"
              type="email"
              placeholder="seu@email.com"
            />

            {/* Senha */}
            <label htmlFor="senha">Senha</label>

            <div className="login-password">
              <input
                id="senha"
                className="login-input"
                type={mostrarSenha ? "text" : "password"}
                placeholder="••••••••"
              />

              {mostrarSenha ? (
                <FaEyeSlash
                  className="login-eye"
                  onClick={() => setMostrarSenha(false)}
                />
              ) : (
                <FaEye
                  className="login-eye"
                  onClick={() => setMostrarSenha(true)}
                />
              )}
            </div>

            {/* Opções */}
            <div className="login-options">
              <label className="login-checkbox">
                <input type="checkbox" />
                Manter conectado
              </label>

              <Link to="/">
                Esqueci minha senha
              </Link>
            </div>

            {/* Botão Entrar */}
            <button className="login-button">
              Entrar
            </button>

            {/* Divisor */}
            <div className="login-divider">
              <span></span>
              <p>ou</p>
              <span></span>
            </div>

            {/* Criar conta */}
            <Link to="/Cadastro">
              <button className="login-create">
                Criar nova conta
              </button>
            </Link>
          </div>

          {/* Rodapé */}
          <div className="login-security">
            <FaLock />
            <span>
              Conexão protegida por criptografia
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;