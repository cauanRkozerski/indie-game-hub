import { IconeSino } from './Icones'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__panel">
          <div className="hero__content">
            <p className="hero__badge">Destaque da semana · Metroidvania do ano</p>
            <h1 className="hero__title">
              Descubra e apoie grandes <span className="hero__title-highlight">histórias indie</span>
            </h1>
            <p className="hero__text">
              Um catálogo independente com jogos autorais, avaliações da comunidade e os lançamentos mais aguardados
              do cenário indie mundial.
            </p>
            <ul className="hero__stats">
              <li>
                <strong>+120</strong> jogos cadastrados
              </li>
              <li>
                <strong>+45</strong> estúdios independentes
              </li>
              <li>
                <strong>98%</strong> de avaliações positivas
              </li>
            </ul>
            <div className="hero__actions">
              <a href="#catalogo" className="button button--primary button--large">
                Explorar catálogo <span className="button__arrow">→</span>
              </a>
              <a href="#lancamentos" className="button button--ghost button--large hero__secondary-action">
                <IconeSino />
                Próximos lançamentos
              </a>
            </div>
          </div>

          <figure className="featured-card">
            <img
              className="featured-card__image"
              src="/images/hollow-knight-silksong.jpg"
              alt="Hollow Knight: Silksong"
            />
            <figcaption className="featured-card__caption">
              <p className="featured-card__title">Hollow Knight: Silksong</p>
              <p className="featured-card__subtitle">Team Cherry · Em breve no PC e consoles</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Hero
