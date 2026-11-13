import { IconeLogo } from './Icones'

function Footer() {
  return (
    <footer id="sobre" className="site-footer">
      <div className="container site-footer__grid">
        <section className="site-footer__brand" aria-label="Sobre o IndieGameHub">
          <a href="#inicio" className="brand">
            <span className="brand__logo" aria-hidden="true">
              <IconeLogo />
            </span>
            <span className="brand__name">IndieGameHub</span>
          </a>
          <p className="site-footer__description">
            Plataforma dedicada à divulgação, descoberta e valorização de jogos digitais independentes.
          </p>
        </section>

        <nav aria-labelledby="rodape-navegacao">
          <h2 id="rodape-navegacao" className="site-footer__title">
            Navegação
          </h2>
          <ul className="site-footer__list">
            <li>
              <a href="#inicio">Início</a>
            </li>
            <li>
              <a href="#catalogo">Catálogo de jogos</a>
            </li>
            <li>
              <a href="#lancamentos">Próximos lançamentos</a>
            </li>
          </ul>
        </nav>

        <section aria-labelledby="rodape-recursos">
          <h2 id="rodape-recursos" className="site-footer__title">
            Recursos técnicos
          </h2>
          <ul className="site-footer__list">
            <li>React + TypeScript + Vite</li>
            <li>CSS puro com variáveis</li>
            <li>Layout responsivo mobile first</li>
          </ul>
        </section>

        <section aria-labelledby="rodape-tcd">
          <h2 id="rodape-tcd" className="site-footer__title">
            Trabalho de Conclusão (TCD)
          </h2>
          <ul className="site-footer__list">
            <li>Acadêmico: Cauan Kozerski</li>
            <li>Disciplina: Desenvolvimento em Ambiente Web</li>
            <li>Prof. Libas · 2º Bimestre 2026</li>
          </ul>
        </section>
      </div>

      <div className="container site-footer__bottom">
        <p>© 2026 IndieGameHub · Projeto acadêmico. As imagens dos jogos pertencem aos seus respectivos estúdios.</p>
      </div>
    </footer>
  )
}

export default Footer
