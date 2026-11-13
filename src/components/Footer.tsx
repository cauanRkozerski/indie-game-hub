import { IconeLogo } from './Icones'

function Footer() {
  return (
    <footer id="sobre" className="site-footer">
      <div className="container site-footer__grid">
        <section className="site-footer__brand">
          <a href="#inicio" className="brand">
            <span className="brand__logo">
              <IconeLogo />
            </span>
            <span className="brand__name">IndieGameHub</span>
          </a>
          <p className="site-footer__description">
            Plataforma dedicada à divulgação, descoberta e valorização de jogos digitais independentes.
          </p>
        </section>

        <nav>
          <h2 className="site-footer__title">Navegação rápida</h2>
          <ul className="site-footer__list">
            <li>
              <a href="#inicio">Início</a>
            </li>
            <li>
              <a href="#catalogo">Catálogo principal (10+ jogos)</a>
            </li>
            <li>
              <a href="#lancamentos">Próximos lançamentos (Vetor local)</a>
            </li>
          </ul>
        </nav>

        <section>
          <h2 className="site-footer__title">Tecnologias utilizadas</h2>
          <ul className="site-footer__list">
            <li>React + TypeScript + Vite</li>
            <li>CSS puro com variáveis (Mobile First)</li>
            <li>Componentização e estado com useState</li>
          </ul>
        </section>

        <section>
          <h2 className="site-footer__title">Trabalho de Conclusão (TCD)</h2>
          <ul className="site-footer__list">
            <li>Acadêmico: Cauan Kozerski</li>
            <li>Disciplina: Desenvolvimento em Ambiente Web</li>
            <li>Prof. Libório Júnior · 2º Bimestre 2026</li>
          </ul>
        </section>
      </div>

      <div className="container site-footer__bottom">
        <p>© 2026 IndieGameHub · Planejamento visual e arquitetura front-end de acordo com as diretrizes do TCD.</p>
      </div>
    </footer>
  )
}

export default Footer
