import { useState } from "react";
import { Link } from "react-router-dom";

import {
    FaUserShield,
    FaUser,
    FaUniversity,
    FaIdBadge,
    FaEnvelope,
    FaPhone,
    FaKey,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaShieldAlt,
    FaExclamationTriangle
} from "react-icons/fa";

import "./CadastroAdministrador.css";

const INITIAL_STATE = {

    nome: "",
    cpf: "",
    matricula: "",
    cargo: "",
    instituicao: "",
    email: "",
    telefone: "",
    codigo: "",
    senha: "",
    confirmarSenha: "",
    termos: false

};

export default function CadastroAdministrador(){

    const [formData,setFormData] = useState(INITIAL_STATE);

    const [mostrarSenha,setMostrarSenha] = useState(false);

    const [mostrarConfirmar,setMostrarConfirmar] = useState(false);

    function formatarCPF(valor){

        const cpf = valor.replace(/\D/g,"").slice(0,11);

        return cpf
            .replace(/(\d{3})(\d)/,"$1.$2")
            .replace(/(\d{3})(\d)/,"$1.$2")
            .replace(/(\d{3})(\d{1,2})$/,"$1-$2");

    }

    function formatarTelefone(valor){

        const telefone = valor.replace(/\D/g,"").slice(0,11);

        if(telefone.length<=10){

            return telefone
                .replace(/(\d{2})(\d)/,"($1) $2")
                .replace(/(\d{4})(\d)/,"$1-$2");

        }

        return telefone
            .replace(/(\d{2})(\d)/,"($1) $2")
            .replace(/(\d{5})(\d)/,"$1-$2");

    }

    function handleChange({target}){

        const {name,value,type,checked}=target;

        let novoValor=value;

        if(name==="cpf"){

            novoValor=formatarCPF(value);

        }

        if(name==="telefone"){

            novoValor=formatarTelefone(value);

        }

        setFormData(prev=>({

            ...prev,

            [name]:
                type==="checkbox"
                ? checked
                : novoValor

        }));

    }

    function limparFormulario(){

        setFormData(INITIAL_STATE);

        setMostrarSenha(false);

        setMostrarConfirmar(false);

    }

    function handleSubmit(e){

        e.preventDefault();

        console.log(formData);

    }

    return(

<div className="cadm-page">

<header className="cadm-header">

<Link to="/" className="cadm-logo">

<div className="cadm-logo-circle">

A

</div>

<span>

APM Conecta

</span>

</Link>

<Link
to="/cadastro"
className="cadm-back"
>

← Voltar ao cadastro

</Link>

</header>

<section className="cadm-banner">

<div className="cadm-banner-icon">

<FaUserShield/>

</div>

<div className="cadm-badge">

Perfil: Administrador

</div>

<h1>

Cadastro de Administrador

</h1>

<p>

Área destinada exclusivamente aos gestores autorizados da escola.
Cadastre administradores responsáveis pela gestão da APM Conecta.

</p>

</section>

<main className="cadm-container">

<form
className="cadm-card"
onSubmit={handleSubmit}
>

<div className="cadm-alert">

<div className="cadm-alert-icon">

<FaExclamationTriangle/>

</div>

<div>

<h3>

Acesso Restrito

</h3>

<p>

Somente diretores, coordenadores, secretários
e administradores autorizados podem realizar este cadastro.
É obrigatório possuir um código de autorização válido.

</p>

</div>

</div>

{/* ================= IDENTIFICAÇÃO ================= */}

<div className="cadm-section-title">

<FaUser/>

<span>

Identificação do Administrador

</span>

</div>

<div className="cadm-grid">

<div className="cadm-field cadm-full">

<label>

Nome Completo *

</label>

<input
className="cadm-input"
type="text"
name="nome"
placeholder="Nome completo"
value={formData.nome}
onChange={handleChange}
required
/>

</div>

<div className="cadm-field">

<label>

CPF *

</label>

<input
className="cadm-input"
type="text"
name="cpf"
placeholder="000.000.000-00"
value={formData.cpf}
onChange={handleChange}
required
/>

</div>

<div className="cadm-field">

<label>

Matrícula Funcional *

</label>

<input
className="cadm-input"
type="text"
name="matricula"
placeholder="Ex: ADM-0001"
value={formData.matricula}
onChange={handleChange}
required
/>

</div>

<div className="cadm-field">

<label>

Cargo *

</label>

<select
className="cadm-select"
name="cargo"
value={formData.cargo}
onChange={handleChange}
required
>

<option value="">

Selecione...

</option>

<option value="Diretor">

Diretor(a)

</option>

<option value="Vice">

Vice-Diretor(a)

</option>

<option value="Coordenador">

Coordenador(a)

</option>

<option value="Secretário">

Secretário(a)

</option>

<option value="Presidente APM">

Presidente da APM

</option>

<option value="Tesoureiro">

Tesoureiro(a)

</option>

</select>

</div>

<div className="cadm-field">

<label>

Instituição *

</label>

<select
className="cadm-select"
name="instituicao"
value={formData.instituicao}
onChange={handleChange}
required
>

<option value="">

Selecione...

</option>

<option>

EMEF João XXIII

</option>

<option>

EMEF Monteiro Lobato

</option>

<option>

EMEF Rui Barbosa

</option>

</select>

</div>

<div className="cadm-field">

<label>

E-mail Institucional *

</label>

<input
className="cadm-input"
type="email"
name="email"
placeholder="admin@escola.edu.br"
value={formData.email}
onChange={handleChange}
required
/>

</div>

<div className="cadm-field">

<label>

Telefone *

</label>

<input
className="cadm-input"
type="text"
name="telefone"
placeholder="(11) 99999-9999"
value={formData.telefone}
onChange={handleChange}
required
/>

</div>

</div>
                    {/* ================= AUTORIZAÇÃO ================= */}

                    <div className="cadm-section-title">

                        <FaKey />

                        <span>

                            Autorização Administrativa

                        </span>

                    </div>

                    <div className="cadm-grid">

                        <div className="cadm-field cadm-full">

                            <label>

                                Código de Autorização *

                            </label>

                            <input
                                className="cadm-input"
                                type="text"
                                name="codigo"
                                placeholder="Digite o código fornecido pela instituição"
                                value={formData.codigo}
                                onChange={handleChange}
                                required
                            />

                            <small className="cadm-help">

                                Este código é fornecido pela direção ou pela
                                administração da instituição e é obrigatório
                                para habilitar um novo administrador.

                            </small>

                        </div>

                    </div>

                    {/* ================= SEGURANÇA ================= */}

                    <div className="cadm-section-title">

                        <FaLock />

                        <span>

                            Segurança da Conta

                        </span>

                    </div>

                    <div className="cadm-grid">

                        <div className="cadm-field">

                            <label>

                                Senha *

                            </label>

                            <div className="cadm-password">

                                <input
                                    className="cadm-input"
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
                                    className="cadm-eye"
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

                        <div className="cadm-field">

                            <label>

                                Confirmar Senha *

                            </label>

                            <div className="cadm-password">

                                <input
                                    className="cadm-input"
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
                                    className="cadm-eye"
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

                    <div className="cadm-profile">

                        <label>

                            Perfil

                        </label>

                        <div className="cadm-profile-card">

                            <div className="cadm-profile-left">

                                <FaUserShield />

                                <span>

                                    Administrador

                                </span>

                            </div>

                            <span className="cadm-profile-status">

                                Selecionado

                            </span>

                        </div>

                    </div>

                    {/* ================= TERMOS ================= */}

                    <div className="cadm-terms">

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

                    <div className="cadm-buttons">

                        <Link
                            to="/cadastro"
                            className="cadm-btn cadm-btn-back"
                        >

                            ← Voltar

                        </Link>

                        <button
                            type="button"
                            className="cadm-btn cadm-btn-clear"
                            onClick={limparFormulario}
                        >

                            Limpar Dados

                        </button>

                        <button
                            type="submit"
                            className="cadm-btn cadm-btn-submit"
                        >

                            Cadastrar

                        </button>

                    </div>

                </form>

            </main>

            {/* ================= FOOTER ================= */}

            <footer className="cadm-footer">

                <p>

                    © {new Date().getFullYear()} APM Conecta —
                    Todos os direitos reservados.

                </p>

                <div className="cadm-footer-links">

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