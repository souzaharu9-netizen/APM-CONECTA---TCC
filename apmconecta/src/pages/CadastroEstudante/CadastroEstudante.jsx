import { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaUserGraduate,
    FaUser,
    FaSchool,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaGraduationCap
} from "react-icons/fa";

import "./CadastroEstudante.css";

const INITIAL_STATE = {
    nome: "",
    nascimento: "",
    cpf: "",
    email: "",
    telefone: "",
    rm: "",
    turma: "",
    escola: "",
    senha: "",
    confirmarSenha: "",
    termos: false
};

export default function CadastroEstudante() {

    const [formData, setFormData] = useState(INITIAL_STATE);

    const [mostrarSenha, setMostrarSenha] = useState(false);

    const [mostrarConfirmar, setMostrarConfirmar] = useState(false);

    function formatarCPF(valor) {

        const cpf = valor.replace(/\D/g, "").slice(0, 11);

        return cpf
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }

    function formatarTelefone(valor) {

        const telefone = valor.replace(/\D/g, "").slice(0, 11);

        if (telefone.length <= 10) {

            return telefone
                .replace(/(\d{2})(\d)/, "($1) $2")
                .replace(/(\d{4})(\d)/, "$1-$2");

        }

        return telefone
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d)/, "$1-$2");
    }

    function handleChange({ target }) {

        const { name, value, type, checked } = target;

        let novoValor = value;

        if (name === "cpf") {
            novoValor = formatarCPF(value);
        }

        if (name === "telefone") {
            novoValor = formatarTelefone(value);
        }

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox"
                ? checked
                : novoValor
        }));

    }

    function limparFormulario() {

        setFormData(INITIAL_STATE);

        setMostrarSenha(false);

        setMostrarConfirmar(false);

    }

    function handleSubmit(e) {

        e.preventDefault();

        console.log(formData);

    }

    return (

        <div className="ce-page">

            {/* HEADER */}

            <header className="ce-header">

                <Link to="/" className="ce-logo">

                    <div className="ce-logo-circle">
                        A
                    </div>

                    <span>APM Conecta</span>

                </Link>

                <Link
                    to="/cadastro"
                    className="ce-back"
                >
                    ← Voltar ao cadastro
                </Link>

            </header>

            {/* BANNER */}

            <section className="ce-banner">

                <div className="ce-banner-icon">
                    <FaUserGraduate />
                </div>

                <div className="ce-badge">
                    Perfil: Estudante
                </div>

                <h1>Cadastro como Estudante</h1>

                <p>
                    Acompanhe comunicados, projetos,
                    campanhas, eventos e participe das
                    atividades da APM da sua escola.
                </p>

            </section>

            <main className="ce-container">

                <form
                    className="ce-card"
                    onSubmit={handleSubmit}
                >

                    {/* DADOS PESSOAIS */}

                    <div className="ce-section-title">

                        <FaUser />

                        <span>
                            Dados Pessoais
                        </span>

                    </div>

                    <div className="ce-grid">

                        <div className="ce-field ce-full">

                            <label>
                                Nome Completo *
                            </label>

                            <input
                                className="ce-input"
                                type="text"
                                name="nome"
                                placeholder="Digite seu nome completo"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="ce-field">

                            <label>
                                Data de Nascimento *
                            </label>

                            <input
                                className="ce-input"
                                type="date"
                                name="nascimento"
                                value={formData.nascimento}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="ce-field">

                            <label>
                                CPF
                            </label>

                            <input
                                className="ce-input"
                                type="text"
                                name="cpf"
                                placeholder="000.000.000-00"
                                value={formData.cpf}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="ce-field">

                            <label>
                                E-mail *
                            </label>

                            <input
                                className="ce-input"
                                type="email"
                                name="email"
                                placeholder="aluno@escola.edu.br"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="ce-field">

                            <label>
                                Telefone
                            </label>

                            <input
                                className="ce-input"
                                type="text"
                                name="telefone"
                                placeholder="(11) 99999-9999"
                                value={formData.telefone}
                                onChange={handleChange}
                            />

                        </div>

                    </div>
                                        {/* ================= DADOS ESCOLARES ================= */}

                    <div className="ce-section-title">

                        <FaSchool />

                        <span>Dados Escolares</span>

                    </div>

                    <div className="ce-grid">

                        <div className="ce-field">

                            <label>
                                RM *
                            </label>

                            <input
                                className="ce-input"
                                type="text"
                                name="rm"
                                placeholder="Digite seu RM"
                                value={formData.rm}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="ce-field">

                            <label>
                                Turma *
                            </label>

                            <select
                                className="ce-select"
                                name="turma"
                                value={formData.turma}
                                onChange={handleChange}
                                required
                            >

                                <option value="">
                                    Selecione...
                                </option>

                                <option value="1A">1º Ano A</option>
                                <option value="1B">1º Ano B</option>
                                <option value="2A">2º Ano A</option>
                                <option value="2B">2º Ano B</option>
                                <option value="3A">3º Ano A</option>
                                <option value="3B">3º Ano B</option>

                            </select>

                        </div>

                        <div className="ce-field ce-full">

                            <label>
                                Escola *
                            </label>

                            <select
                                className="ce-select"
                                name="escola"
                                value={formData.escola}
                                onChange={handleChange}
                                required
                            >

                                <option value="">
                                    Selecione a escola...
                                </option>

                                <option value="EMEF João XXIII">
                                    EMEF João XXIII
                                </option>

                                <option value="EMEF Monteiro Lobato">
                                    EMEF Monteiro Lobato
                                </option>

                                <option value="EMEF Rui Barbosa">
                                    EMEF Rui Barbosa
                                </option>

                            </select>

                        </div>

                    </div>

                    {/* ================= SEGURANÇA ================= */}

                    <div className="ce-section-title">

                        <FaLock />

                        <span>
                            Segurança da Conta
                        </span>

                    </div>

                    <div className="ce-grid">

                        <div className="ce-field">

                            <label htmlFor="senha">

                                Senha *

                            </label>

                            <div className="ce-password">

                                <input
                                    id="senha"
                                    className="ce-input"
                                    type={
                                        mostrarSenha
                                            ? "text"
                                            : "password"
                                    }
                                    name="senha"
                                    placeholder="Mínimo de 8 caracteres"
                                    value={formData.senha}
                                    onChange={handleChange}
                                    required
                                />

                                <button
                                    type="button"
                                    className="ce-eye"
                                    onClick={() => setMostrarSenha(!mostrarSenha)}
                                    aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
                                >
                                {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
                            </button>

                            </div>

                        </div>

                        <div className="ce-field">

                            <label htmlFor="confirmarSenha">

                                Confirmar Senha *

                            </label>

                            <div className="ce-password">

                                <input
                                    id="confirmarSenha"
                                    className="ce-input"
                                    type={
                                        mostrarConfirmar
                                            ? "text"
                                            : "password"
                                    }
                                    name="confirmarSenha"
                                    placeholder="Repita sua senha"
                                    value={formData.confirmarSenha}
                                    onChange={handleChange}
                                    required
                                />

                                <button
                                    type="button"
                                    className="ce-eye"
                                    onClick={() => setMostrarConfirmar(!mostrarConfirmar)}
                                    aria-label={mostrarConfirmar ? "Ocultar senha" : "Mostrar senha"}
                                >
                              {mostrarConfirmar ? <FaEyeSlash /> : <FaEye />}
                            </button>

                            </div>

                        </div>

                    </div>
                                        {/* ================= PERFIL ================= */}

                    <div className="ce-profile">

                        <label>Perfil</label>

                        <div className="ce-profile-card">

                            <div className="ce-profile-left">

                                <FaGraduationCap />

                                <span>Estudante</span>

                            </div>

                            <span className="ce-profile-status">

                                Selecionado

                            </span>

                        </div>

                    </div>

                    {/* ================= TERMOS ================= */}

                    <div className="ce-terms">

                        <input
                            id="termos"
                            type="checkbox"
                            name="termos"
                            checked={formData.termos}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="termos">

                            Aceito os{" "}

                            <Link to="/termos">
                                Termos de Uso
                            </Link>

                            {" "}e a{" "}

                            <Link to="/privacidade">
                                Política de Privacidade
                            </Link>

                            {" "}do APM Conecta.

                        </label>

                    </div>

                    {/* ================= BOTÕES ================= */}

                    <div className="ce-buttons">

                        <Link
                            to="/cadastro"
                            className="ce-btn ce-btn-back"
                        >

                            ← Voltar

                        </Link>

                        <button
                            type="button"
                            className="ce-btn ce-btn-clear"
                            onClick={limparFormulario}
                        >

                            Limpar Dados

                        </button>

                        <button
                            type="submit"
                            className="ce-btn ce-btn-submit"
                        >

                            Cadastrar

                        </button>

                    </div>

                </form>

            </main>

            {/* ================= FOOTER ================= */}

            <footer className="ce-footer">

                <p>

                    © {new Date().getFullYear()} APM Conecta
                    • Todos os direitos reservados.

                </p>

                <div className="ce-footer-links">

                    <Link to="/suporte">

                        Suporte

                    </Link>

                    <Link to="/contato">

                        Contato

                    </Link>

                    <Link to="/privacidade">

                        Política de Privacidade

                    </Link>

                    <Link to="/termos">

                        Termos de Uso

                    </Link>

                </div>

            </footer>

        </div>

    );

}