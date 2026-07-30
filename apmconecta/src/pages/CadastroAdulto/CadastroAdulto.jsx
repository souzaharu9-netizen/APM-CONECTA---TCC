import { useState } from "react";
import { Link } from "react-router-dom";

import {
    FaUsers,
    FaUser,
    FaSchool,
    FaLock,
    FaEye,
    FaEyeSlash
} from "react-icons/fa";

import "./CadastroAdulto.css";

const INITIAL_STATE = {
    nome: "",
    cpf: "",
    nascimento: "",
    email: "",
    telefone: "",
    endereco: "",
    profissao: "",
    estudante: "",
    parentesco: "",
    escola: "",
    senha: "",
    confirmarSenha: "",
    termos: false
};

export default function CadastroAdulto() {

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

        const telefone = valor.replace(/\D/g, "").slice(0,11);

        if (telefone.length <= 10) {

            return telefone
                .replace(/(\d{2})(\d)/,"($1) $2")
                .replace(/(\d{4})(\d)/,"$1-$2");

        }

        return telefone
            .replace(/(\d{2})(\d)/,"($1) $2")
            .replace(/(\d{5})(\d)/,"$1-$2");

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

        setFormData(prev => ({

            ...prev,

            [name]:
                type === "checkbox"
                    ? checked
                    : novoValor

        }));

    }

    function cancelarFormulario() {

        setFormData(INITIAL_STATE);

        setMostrarSenha(false);

        setMostrarConfirmar(false);

    }

    function handleSubmit(e) {

        e.preventDefault();

        console.log(formData);

    }

    return (

<div className="ca-page">

<header className="ca-header">

<Link to="/" className="ca-logo">

<div className="ca-logo-circle">

A

</div>

<span>

APM Conecta

</span>

</Link>

<Link
to="/cadastro"
className="ca-back"
>

← Voltar ao cadastro

</Link>

</header>

<section className="ca-banner">

<div className="ca-banner-icon">

<FaUsers/>

</div>

<div className="ca-badge">

Perfil: Adulto

</div>

<h1>

Cadastro como Adulto

</h1>

<p>

Acompanhe a vida escolar, receba comunicados,
confirme presença em reuniões, participe de votações da APM,
acesse documentos e colabore com projetos.

</p>

</section>

<main className="ca-container">

<form
className="ca-card"
onSubmit={handleSubmit}
>

{/* ================= DADOS PESSOAIS ================= */}

<div className="ca-section-title">

<FaUser/>

<span>

Dados Pessoais

</span>

</div>

<div className="ca-grid">

<div className="ca-field ca-full">

<label>

Nome Completo *

</label>

<input
className="ca-input"
type="text"
name="nome"
placeholder="Ex: Maria Aparecida dos Santos"
value={formData.nome}
onChange={handleChange}
required
/>

</div>

<div className="ca-field">

<label>

CPF *

</label>

<input
className="ca-input"
type="text"
name="cpf"
placeholder="000.000.000-00"
value={formData.cpf}
onChange={handleChange}
required
/>

</div>

<div className="ca-field">

<label>

Data de Nascimento *

</label>

<input
className="ca-input"
type="date"
name="nascimento"
value={formData.nascimento}
onChange={handleChange}
required
/>

</div>

<div className="ca-field">

<label>

E-mail *

</label>

<input
className="ca-input"
type="email"
name="email"
placeholder="seu@email.com"
value={formData.email}
onChange={handleChange}
required
/>

</div>

<div className="ca-field">

<label>

Telefone *

</label>

<input
className="ca-input"
type="text"
name="telefone"
placeholder="(11) 99999-0000"
value={formData.telefone}
onChange={handleChange}
required
/>

</div>

<div className="ca-field ca-full">

<label>

Endereço

</label>

<input
className="ca-input"
type="text"
name="endereco"
placeholder="Rua, número, bairro, cidade"
value={formData.endereco}
onChange={handleChange}
/>

</div>

<div className="ca-field ca-full">

<label>

Profissão (opcional)

</label>

<input
className="ca-input"
type="text"
name="profissao"
placeholder="Ex: Professora, Engenheiro, Médica..."
value={formData.profissao}
onChange={handleChange}
/>

</div>

</div>
                    {/* ================= VÍNCULO ESCOLAR ================= */}

                    <div className="ca-section-title">

                        <FaSchool />

                        <span>Vínculo Escolar</span>

                    </div>

                    <div className="ca-grid">

                        <div className="ca-field ca-full">

                            <label>

                                Nome do Estudante Vinculado *

                            </label>

                            <input
                                className="ca-input"
                                type="text"
                                name="estudante"
                                placeholder="Nome completo do aluno"
                                value={formData.estudante}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="ca-field">

                            <label>

                                Parentesco / Relação *

                            </label>

                            <select
                                className="ca-select"
                                name="parentesco"
                                value={formData.parentesco}
                                onChange={handleChange}
                                required
                            >

                                <option value="">

                                    Selecione...

                                </option>

                                <option value="Pai">Pai</option>

                                <option value="Mãe">Mãe</option>

                                <option value="Responsável Legal">
                                    Responsável Legal
                                </option>

                                <option value="Avó">Avó</option>

                                <option value="Avô">Avô</option>

                                <option value="Tio">Tio</option>

                                <option value="Tia">Tia</option>

                                <option value="Outro">Outro</option>

                            </select>

                        </div>

                        <div className="ca-field">

                            <label>

                                Escola *

                            </label>

                            <select
                                className="ca-select"
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

                    <div className="ca-section-title">

                        <FaLock />

                        <span>

                            Segurança

                        </span>

                    </div>

                    <div className="ca-grid">

                        <div className="ca-field">

                            <label>

                                Senha *

                            </label>

                            <div className="ca-password">

                                <input
                                    className="ca-input"
                                    type={
                                        mostrarSenha
                                            ? "text"
                                            : "password"
                                    }
                                    name="senha"
                                    placeholder="Mínimo 8 caracteres"
                                    value={formData.senha}
                                    onChange={handleChange}
                                    required
                                />

                                <button
                                    type="button"
                                    className="ca-eye"
                                    onClick={() =>
                                        setMostrarSenha(!mostrarSenha)
                                    }
                                >

                                    {
                                        mostrarSenha
                                            ? <FaEyeSlash />
                                            : <FaEye />
                                    }

                                </button>

                            </div>

                        </div>

                        <div className="ca-field">

                            <label>

                                Confirmar Senha *

                            </label>

                            <div className="ca-password">

                                <input
                                    className="ca-input"
                                    type={
                                        mostrarConfirmar
                                            ? "text"
                                            : "password"
                                    }
                                    name="confirmarSenha"
                                    placeholder="Repita a senha"
                                    value={formData.confirmarSenha}
                                    onChange={handleChange}
                                    required
                                />

                                <button
                                    type="button"
                                    className="ca-eye"
                                    onClick={() =>
                                        setMostrarConfirmar(!mostrarConfirmar)
                                    }
                                >

                                    {
                                        mostrarConfirmar
                                            ? <FaEyeSlash />
                                            : <FaEye />
                                    }

                                </button>

                            </div>

                        </div>

                    </div>

                    {/* ================= PERFIL ================= */}

                    <div className="ca-profile">

                        <label>

                            Perfil

                        </label>

                        <div className="ca-profile-card">

                            <div className="ca-profile-left">

                                <FaUsers />

                                <span>

                                    Adulto

                                </span>

                            </div>

                            <span className="ca-profile-status">

                                Selecionado

                            </span>

                        </div>

                    </div>

                    {/* ================= TERMOS ================= */}

                    <div className="ca-terms">

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

                    <div className="ca-buttons">

                        <Link
                            to="/cadastro"
                            className="ca-btn ca-btn-back"
                        >

                            ← Voltar

                        </Link>

                        <button
                            type="button"
                            className="ca-btn ca-btn-clear"
                            onClick={cancelarFormulario}
                        >

                            Cancelar

                        </button>

                        <button
                            type="submit"
                            className="ca-btn ca-btn-submit"
                        >

                            Cadastrar

                        </button>

                    </div>

                </form>

            </main>

            {/* ================= FOOTER ================= */}

            <footer className="ca-footer">

                <p>

                    © {new Date().getFullYear()} APM Conecta —
                    Todos os direitos reservados.

                </p>

                <div className="ca-footer-links">

                    <Link to="/suporte">

                        Suporte Técnico

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