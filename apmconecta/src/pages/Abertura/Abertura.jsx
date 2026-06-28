import { memo } from "react";
import { Link } from "react-router-dom";
import "./Abertura.css";

const Abertura = () => {
  return (
    <div className="abertura">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">A</span>
            <span>APM Conecta</span>
          </div>
          <div className="nav-buttons">
            <Link to="/login" className="btn-entrar">
              Entrar
            </Link>
            <Link to="/cadastro" className="btn-criar">
              Criar Conta
            </Link>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <span className="badge">🏫 Associação de Pais e Mestres</span>
          <h1>Pequenas ações, grandes mudanças.</h1>
          <p>
            O APM Conecta une escola, família e comunidade em uma plataforma
            transparente, participativa e moderna.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Conhecer Campanhas →</button>
            <button className="btn-secondary">Criar conta grátis</button>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat-item">
          <h3>R$ 44.200</h3>
          <p>Arrecadados</p>
        </div>
        <div className="stat-item">
          <h3>373</h3>
          <p>Participantes</p>
        </div>
        <div className="stat-item">
          <h3>3</h3>
          <p>Campanhas ativas</p>
        </div>
        <div className="stat-item">
          <h3>8</h3>
          <p>Projetos concluídos</p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <span className="subtitle">O QUE É O APM CONECTA?</span>
            <h2>A plataforma que aproxima escola e comunidade</h2>
            <p>
              O APM Conecta é uma plataforma digital desenvolvida para
              modernizar e facilitar a gestão da Associação de Pais e Mestres,
              promovendo maior transparência, organização e participação da
              comunidade escolar.
            </p>
            <p>
              Pais, responsáveis, alunos, professores e administradores podem
              acompanhar campanhas de arrecadação, visualizar a aplicação dos
              recursos, realizar doações, enviar sugestões e acompanhar as
              melhorias realizadas na escola.
            </p>
          </div>
          <div className="about-image">
            <div className="placeholder-image">📚</div>
          </div>
        </div>
      </section>

      <section className="how-works">
        <span className="subtitle">SIMPLES E INTUITIVO</span>
        <h2>Como funciona?</h2>
        <div className="cards-grid">
          <div className="how-card">
            <div className="card-icon">👤</div>
            <div className="card-number">01</div>
            <h3>Crie sua conta</h3>
            <p>
              Cadastre-se em minutos informando seus dados. O acesso é gratuito
              para toda a comunidade escolar.
            </p>
          </div>
          <div className="how-card">
            <div className="card-icon">📢</div>
            <div className="card-number">02</div>
            <h3>Participe das campanhas</h3>
            <p>
              Explore as campanhas ativas, realize doações via PIX, envie
              sugestões e vote nas ideias da comunidade.
            </p>
          </div>
          <div className="how-card">
            <div className="card-icon">📊</div>
            <div className="card-number">03</div>
            <h3>Acompanhe os resultados</h3>
            <p>
              Acesse o painel de transparência e veja em tempo real como cada
              centavo está sendo aplicado na escola.
            </p>
          </div>
        </div>
      </section>

      <section className="benefits">
        <span className="subtitle">POR QUE USAR?</span>
        <h2>Benefícios para toda a comunidade</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">📊</div>
            <h3>Transparência financeira</h3>
            <p>
              Cada doação registrada e publicada com comprovante.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">💬</div>
            <h3>Comunicação direta</h3>
            <p>
              Avisos, eventos e resultados em um só lugar.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">⚡</div>
            <h3>Tempo real</h3>
            <p>
              Acompanhe campanhas e metas instantaneamente.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">👥</div>
            <h3>Participação ativa</h3>
            <p>
              Sugestões, votações e decisões compartilhadas.
            </p>
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="mission-card">
          <div className="mission-icon">🎯</div>
          <h3>Nossa Missão</h3>
          <p>
            Fortalecer a parceria entre escola e comunidade por meio da
            tecnologia, incentivando a participação ativa de todos e promovendo
            melhorias para o ambiente escolar.
          </p>
        </div>
        <div className="mission-card">
          <div className="mission-icon">🔭</div>
          <h3>Nossa Visão</h3>
          <p>
            Ser uma referência em transparência, colaboração e inovação na
            gestão das Associações de Pais e Mestres.
          </p>
        </div>
        <div className="mission-card">
          <div className="mission-icon">💎</div>
          <h3>Nossos Valores</h3>
          <ul>
            <li>Transparência na utilização dos recursos</li>
            <li>Participação da comunidade escolar</li>
            <li>Responsabilidade social</li>
            <li>Organização e eficiência</li>
            <li>Acessibilidade para todos</li>
          </ul>
        </div>
      </section>

      <section className="cta-section">
        <h2>Faça parte da mudança</h2>
        <p>
          Cadastre-se gratuitamente e comece a contribuir com sua escola hoje
          mesmo.
        </p>
        <Link to="/cadastro" className="btn-cta">
          Criar minha conta →
        </Link>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <div className="footer-logo">
              <span className="logo-icon">A</span>
              <span>APM Conecta</span>
            </div>
            <p>
              Aproximando escola, família e comunidade em prol de uma educação
              de qualidade.
            </p>
            <div className="social-links">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">WhatsApp</a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Navegação</h4>
            <ul>
              <li>
                <a href="#">Início</a>
              </li>
              <li>
                <a href="#">Campanhas</a>
              </li>
              <li>
                <a href="#">Transparência</a>
              </li>
              <li>
                <a href="#">Sugestões</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contato & Legal</h4>
            <ul>
              <li>
                <a href="mailto:apm@escola.edu.br">apm@escola.edu.br</a>
              </li>
              <li>
                <a href="tel:1199999000">(11) 99999-0000</a>
              </li>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
              <li>
                <a href="#">Termos de Uso</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 APM Conecta. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export { Abertura };
export default memo(Abertura);
