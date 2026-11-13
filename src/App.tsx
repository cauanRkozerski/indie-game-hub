import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import './App.css'

/*
 * IndieGameHub — Fase 3 (em andamento)
 * Cabeçalho, destaque e rodapé já foram extraídos para componentes.
 */
function App() {
  return (
    <>
      <Header quantidadeFavoritos={3} />

      <main id="inicio">
        <Hero />

        {/* ================= FILTROS ================= */}
        <div className="container filters">
          <p id="filtro-genero-titulo" className="filters__label">
            Filtrar por gênero
          </p>
          <ul className="chip-list" aria-labelledby="filtro-genero-titulo">
            <li className="chip-list__item">
              <button id="filtro-todos" type="button" className="chip chip--active" aria-pressed="true">
                Todos <span className="chip__count">(10)</span>
              </button>
            </li>
            <li className="chip-list__item">
              <button id="filtro-metroidvania" type="button" className="chip" aria-pressed="false">
                Metroidvania <span className="chip__count">(2)</span>
              </button>
            </li>
            <li className="chip-list__item">
              <button id="filtro-roguelike" type="button" className="chip" aria-pressed="false">
                Roguelike <span className="chip__count">(2)</span>
              </button>
            </li>
            <li className="chip-list__item">
              <button id="filtro-plataforma" type="button" className="chip" aria-pressed="false">
                Plataforma <span className="chip__count">(2)</span>
              </button>
            </li>
            <li className="chip-list__item">
              <button id="filtro-rpg" type="button" className="chip" aria-pressed="false">
                RPG <span className="chip__count">(2)</span>
              </button>
            </li>
            <li className="chip-list__item">
              <button id="filtro-deckbuilder" type="button" className="chip" aria-pressed="false">
                Deckbuilder <span className="chip__count">(1)</span>
              </button>
            </li>
            <li className="chip-list__item">
              <button id="filtro-simulacao" type="button" className="chip" aria-pressed="false">
                Simulação <span className="chip__count">(1)</span>
              </button>
            </li>
          </ul>

          <div className="filters__selects">
            <label className="select-field select-field--platform">
              <span className="visually-hidden">Filtrar por plataforma</span>
              <select id="filtro-plataforma-select" className="select" defaultValue="todas">
                <option value="todas">Plataforma: Todas</option>
                <option value="pc">PC</option>
                <option value="switch">Switch</option>
                <option value="playstation">PlayStation</option>
                <option value="xbox">Xbox</option>
              </select>
            </label>
            <label className="select-field">
              <span className="visually-hidden">Ordenar jogos</span>
              <select id="ordenar-select" className="select" defaultValue="populares">
                <option value="populares">Ordenar: Mais populares</option>
                <option value="avaliacao">Ordenar: Melhor avaliação</option>
                <option value="menor-preco">Ordenar: Menor preço</option>
                <option value="recentes">Ordenar: Mais recentes</option>
              </select>
            </label>
          </div>
        </div>

        {/* ================= LISTAGEM PRINCIPAL: CATÁLOGO DE JOGOS ================= */}
        <section id="catalogo" className="section" aria-labelledby="catalogo-titulo">
          <div className="container">
            <header className="section__header">
              <p className="section__eyebrow">Listagem principal</p>
              <h2 id="catalogo-titulo" className="section__title">
                Catálogo de jogos
              </h2>
              <p className="section__subtitle">Títulos autorais e aclamados pela crítica, escolhidos pela comunidade.</p>
            </header>

            <ul className="game-grid">
              {/* --- Card 1: Hollow Knight --- */}
              <li className="game-grid__item">
                <article className="card game-card">
                  <div className="card__media game-card__media">
                    <img className="card__image" src="/images/hollow-knight.jpg" alt="Arte de Hollow Knight" loading="lazy" />
                    <button id="favoritar-hollow-knight" type="button" className="favorite-button favorite-button--active" aria-label="Remover Hollow Knight da wishlist" aria-pressed="true">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                    <span className="rating-badge" aria-label="Avaliação 4,9 de 5">
                      <span className="rating-badge__star" aria-hidden="true">★</span> 4,9
                    </span>
                  </div>
                  <div className="game-card__body">
                    <p className="game-card__meta">
                      <span className="tag tag--genre">Metroidvania</span>
                      <span className="game-card__studio">
                        por <strong>Team Cherry</strong>
                      </span>
                    </p>
                    <h3 className="game-card__title">Hollow Knight</h3>
                    <p className="game-card__description">
                      Explore Hallownest, um vasto reino arruinado de insetos e heróis, em uma aventura de ação 2D desenhada à mão.
                    </p>
                    <ul className="platform-list" aria-label="Plataformas">
                      <li className="platform-list__item">PC</li>
                      <li className="platform-list__item">Switch</li>
                      <li className="platform-list__item">PS4</li>
                      <li className="platform-list__item">Xbox</li>
                    </ul>
                    <footer className="game-card__footer">
                      <div>
                        <p className="game-card__price">R$ 46,99</p>
                        <p className="game-card__year">
                          Ano: <time dateTime="2017">2017</time>
                        </p>
                      </div>
                      <a id="detalhes-hollow-knight" href="#catalogo" className="button button--primary button--small">
                        Ver detalhes <span className="button__arrow" aria-hidden="true">→</span>
                      </a>
                    </footer>
                  </div>
                </article>
              </li>

              {/* --- Card 2: Dead Cells --- */}
              <li className="game-grid__item">
                <article className="card game-card">
                  <div className="card__media game-card__media">
                    <img className="card__image" src="/images/dead-cells.jpg" alt="Arte de Dead Cells" loading="lazy" />
                    <button id="favoritar-dead-cells" type="button" className="favorite-button" aria-label="Adicionar Dead Cells à wishlist" aria-pressed="false">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                    <span className="rating-badge" aria-label="Avaliação 4,8 de 5">
                      <span className="rating-badge__star" aria-hidden="true">★</span> 4,8
                    </span>
                  </div>
                  <div className="game-card__body">
                    <p className="game-card__meta">
                      <span className="tag tag--genre">Roguelike</span>
                      <span className="game-card__studio">
                        por <strong>Motion Twin</strong>
                      </span>
                    </p>
                    <h3 className="game-card__title">Dead Cells</h3>
                    <p className="game-card__description">
                      Ação roguelite em plataforma com combate fluido, esquivas precisas e um castelo que muda a cada morte.
                    </p>
                    <ul className="platform-list" aria-label="Plataformas">
                      <li className="platform-list__item">PC</li>
                      <li className="platform-list__item">Switch</li>
                      <li className="platform-list__item">PS4</li>
                      <li className="platform-list__item">Xbox</li>
                    </ul>
                    <footer className="game-card__footer">
                      <div>
                        <p className="game-card__price">R$ 47,49</p>
                        <p className="game-card__year">
                          Ano: <time dateTime="2018">2018</time>
                        </p>
                      </div>
                      <a id="detalhes-dead-cells" href="#catalogo" className="button button--primary button--small">
                        Ver detalhes <span className="button__arrow" aria-hidden="true">→</span>
                      </a>
                    </footer>
                  </div>
                </article>
              </li>

              {/* --- Card 3: Celeste --- */}
              <li className="game-grid__item">
                <article className="card game-card">
                  <div className="card__media game-card__media">
                    <img className="card__image" src="/images/celeste.jpg" alt="Arte de Celeste" loading="lazy" />
                    <button id="favoritar-celeste" type="button" className="favorite-button favorite-button--active" aria-label="Remover Celeste da wishlist" aria-pressed="true">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                    <span className="rating-badge" aria-label="Avaliação 5,0 de 5">
                      <span className="rating-badge__star" aria-hidden="true">★</span> 5,0
                    </span>
                  </div>
                  <div className="game-card__body">
                    <p className="game-card__meta">
                      <span className="tag tag--genre">Plataforma</span>
                      <span className="game-card__studio">
                        por <strong>Maddy Makes Games</strong>
                      </span>
                    </p>
                    <h3 className="game-card__title">Celeste</h3>
                    <p className="game-card__description">
                      Ajude Madeline a escalar a Montanha Celeste e enfrentar seus demônios internos em um plataforma desafiador e sensível.
                    </p>
                    <ul className="platform-list" aria-label="Plataformas">
                      <li className="platform-list__item">PC</li>
                      <li className="platform-list__item">Switch</li>
                      <li className="platform-list__item">PS4</li>
                      <li className="platform-list__item">Xbox</li>
                    </ul>
                    <footer className="game-card__footer">
                      <div>
                        <p className="game-card__price">R$ 36,99</p>
                        <p className="game-card__year">
                          Ano: <time dateTime="2018">2018</time>
                        </p>
                      </div>
                      <a id="detalhes-celeste" href="#catalogo" className="button button--primary button--small">
                        Ver detalhes <span className="button__arrow" aria-hidden="true">→</span>
                      </a>
                    </footer>
                  </div>
                </article>
              </li>

              {/* --- Card 4: Sea of Stars --- */}
              <li className="game-grid__item">
                <article className="card game-card">
                  <div className="card__media game-card__media">
                    <img className="card__image" src="/images/sea-of-stars.jpg" alt="Arte de Sea of Stars" loading="lazy" />
                    <button id="favoritar-sea-of-stars" type="button" className="favorite-button" aria-label="Adicionar Sea of Stars à wishlist" aria-pressed="false">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                    <span className="rating-badge" aria-label="Avaliação 4,7 de 5">
                      <span className="rating-badge__star" aria-hidden="true">★</span> 4,7
                    </span>
                  </div>
                  <div className="game-card__body">
                    <p className="game-card__meta">
                      <span className="tag tag--genre">RPG</span>
                      <span className="game-card__studio">
                        por <strong>Sabotage Studio</strong>
                      </span>
                    </p>
                    <h3 className="game-card__title">Sea of Stars</h3>
                    <p className="game-card__description">
                      RPG por turnos com visual retrô deslumbrante e a jornada épica de dois Guerreiros do Solstício.
                    </p>
                    <ul className="platform-list" aria-label="Plataformas">
                      <li className="platform-list__item">PC</li>
                      <li className="platform-list__item">Switch</li>
                      <li className="platform-list__item">PS5</li>
                      <li className="platform-list__item">Xbox</li>
                    </ul>
                    <footer className="game-card__footer">
                      <div>
                        <p className="game-card__price">R$ 99,90</p>
                        <p className="game-card__year">
                          Ano: <time dateTime="2023">2023</time>
                        </p>
                      </div>
                      <a id="detalhes-sea-of-stars" href="#catalogo" className="button button--primary button--small">
                        Ver detalhes <span className="button__arrow" aria-hidden="true">→</span>
                      </a>
                    </footer>
                  </div>
                </article>
              </li>

              {/* --- Card 5: Hades --- */}
              <li className="game-grid__item">
                <article className="card game-card">
                  <div className="card__media game-card__media">
                    <img className="card__image" src="/images/hades.jpg" alt="Arte de Hades" loading="lazy" />
                    <button id="favoritar-hades" type="button" className="favorite-button favorite-button--active" aria-label="Remover Hades da wishlist" aria-pressed="true">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                    <span className="rating-badge" aria-label="Avaliação 4,9 de 5">
                      <span className="rating-badge__star" aria-hidden="true">★</span> 4,9
                    </span>
                  </div>
                  <div className="game-card__body">
                    <p className="game-card__meta">
                      <span className="tag tag--genre">Roguelike</span>
                      <span className="game-card__studio">
                        por <strong>Supergiant Games</strong>
                      </span>
                    </p>
                    <h3 className="game-card__title">Hades</h3>
                    <p className="game-card__description">
                      Desafie o deus dos mortos e lute para escapar do Submundo neste roguelike de ação inspirado na mitologia grega.
                    </p>
                    <ul className="platform-list" aria-label="Plataformas">
                      <li className="platform-list__item">PC</li>
                      <li className="platform-list__item">Switch</li>
                      <li className="platform-list__item">PS5</li>
                      <li className="platform-list__item">Xbox</li>
                    </ul>
                    <footer className="game-card__footer">
                      <div>
                        <p className="game-card__price">R$ 73,99</p>
                        <p className="game-card__year">
                          Ano: <time dateTime="2020">2020</time>
                        </p>
                      </div>
                      <a id="detalhes-hades" href="#catalogo" className="button button--primary button--small">
                        Ver detalhes <span className="button__arrow" aria-hidden="true">→</span>
                      </a>
                    </footer>
                  </div>
                </article>
              </li>

              {/* --- Card 6: Balatro --- */}
              <li className="game-grid__item">
                <article className="card game-card">
                  <div className="card__media game-card__media">
                    <img className="card__image" src="/images/balatro.jpg" alt="Arte de Balatro" loading="lazy" />
                    <button id="favoritar-balatro" type="button" className="favorite-button" aria-label="Adicionar Balatro à wishlist" aria-pressed="false">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                    <span className="rating-badge" aria-label="Avaliação 4,9 de 5">
                      <span className="rating-badge__star" aria-hidden="true">★</span> 4,9
                    </span>
                  </div>
                  <div className="game-card__body">
                    <p className="game-card__meta">
                      <span className="tag tag--genre">Deckbuilder</span>
                      <span className="game-card__studio">
                        por <strong>LocalThunk</strong>
                      </span>
                    </p>
                    <h3 className="game-card__title">Balatro</h3>
                    <p className="game-card__description">
                      Um roguelike deckbuilder inspirado no pôquer, cheio de combinações absurdas e coringas poderosos.
                    </p>
                    <ul className="platform-list" aria-label="Plataformas">
                      <li className="platform-list__item">PC</li>
                      <li className="platform-list__item">Switch</li>
                      <li className="platform-list__item">PS5</li>
                      <li className="platform-list__item">Mobile</li>
                    </ul>
                    <footer className="game-card__footer">
                      <div>
                        <p className="game-card__price">R$ 44,99</p>
                        <p className="game-card__year">
                          Ano: <time dateTime="2024">2024</time>
                        </p>
                      </div>
                      <a id="detalhes-balatro" href="#catalogo" className="button button--primary button--small">
                        Ver detalhes <span className="button__arrow" aria-hidden="true">→</span>
                      </a>
                    </footer>
                  </div>
                </article>
              </li>

              {/* --- Card 7: Stardew Valley --- */}
              <li className="game-grid__item">
                <article className="card game-card">
                  <div className="card__media game-card__media">
                    <img className="card__image" src="/images/stardew-valley.jpg" alt="Arte de Stardew Valley" loading="lazy" />
                    <button id="favoritar-stardew-valley" type="button" className="favorite-button" aria-label="Adicionar Stardew Valley à wishlist" aria-pressed="false">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                    <span className="rating-badge" aria-label="Avaliação 4,9 de 5">
                      <span className="rating-badge__star" aria-hidden="true">★</span> 4,9
                    </span>
                  </div>
                  <div className="game-card__body">
                    <p className="game-card__meta">
                      <span className="tag tag--genre">Simulação</span>
                      <span className="game-card__studio">
                        por <strong>ConcernedApe</strong>
                      </span>
                    </p>
                    <h3 className="game-card__title">Stardew Valley</h3>
                    <p className="game-card__description">
                      Herde a antiga fazenda do seu avô e construa uma nova vida no campo, entre plantações, amizades e mistérios.
                    </p>
                    <ul className="platform-list" aria-label="Plataformas">
                      <li className="platform-list__item">PC</li>
                      <li className="platform-list__item">Switch</li>
                      <li className="platform-list__item">PS4</li>
                      <li className="platform-list__item">Xbox</li>
                      <li className="platform-list__item">Mobile</li>
                    </ul>
                    <footer className="game-card__footer">
                      <div>
                        <p className="game-card__price">R$ 24,99</p>
                        <p className="game-card__year">
                          Ano: <time dateTime="2016">2016</time>
                        </p>
                      </div>
                      <a id="detalhes-stardew-valley" href="#catalogo" className="button button--primary button--small">
                        Ver detalhes <span className="button__arrow" aria-hidden="true">→</span>
                      </a>
                    </footer>
                  </div>
                </article>
              </li>

              {/* --- Card 8: Cuphead --- */}
              <li className="game-grid__item">
                <article className="card game-card">
                  <div className="card__media game-card__media">
                    <img className="card__image" src="/images/cuphead.jpg" alt="Arte de Cuphead" loading="lazy" />
                    <button id="favoritar-cuphead" type="button" className="favorite-button" aria-label="Adicionar Cuphead à wishlist" aria-pressed="false">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                    <span className="rating-badge" aria-label="Avaliação 4,7 de 5">
                      <span className="rating-badge__star" aria-hidden="true">★</span> 4,7
                    </span>
                  </div>
                  <div className="game-card__body">
                    <p className="game-card__meta">
                      <span className="tag tag--genre">Plataforma</span>
                      <span className="game-card__studio">
                        por <strong>Studio MDHR</strong>
                      </span>
                    </p>
                    <h3 className="game-card__title">Cuphead</h3>
                    <p className="game-card__description">
                      Ação run and gun com chefes desafiadores e animação desenhada à mão no estilo dos desenhos dos anos 1930.
                    </p>
                    <ul className="platform-list" aria-label="Plataformas">
                      <li className="platform-list__item">PC</li>
                      <li className="platform-list__item">Switch</li>
                      <li className="platform-list__item">PS4</li>
                      <li className="platform-list__item">Xbox</li>
                    </ul>
                    <footer className="game-card__footer">
                      <div>
                        <p className="game-card__price">R$ 36,99</p>
                        <p className="game-card__year">
                          Ano: <time dateTime="2017">2017</time>
                        </p>
                      </div>
                      <a id="detalhes-cuphead" href="#catalogo" className="button button--primary button--small">
                        Ver detalhes <span className="button__arrow" aria-hidden="true">→</span>
                      </a>
                    </footer>
                  </div>
                </article>
              </li>

              {/* --- Card 9: Ori and the Will of the Wisps --- */}
              <li className="game-grid__item">
                <article className="card game-card">
                  <div className="card__media game-card__media">
                    <img className="card__image" src="/images/ori-will-of-the-wisps.jpg" alt="Arte de Ori and the Will of the Wisps" loading="lazy" />
                    <button id="favoritar-ori" type="button" className="favorite-button" aria-label="Adicionar Ori and the Will of the Wisps à wishlist" aria-pressed="false">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                    <span className="rating-badge" aria-label="Avaliação 4,8 de 5">
                      <span className="rating-badge__star" aria-hidden="true">★</span> 4,8
                    </span>
                  </div>
                  <div className="game-card__body">
                    <p className="game-card__meta">
                      <span className="tag tag--genre">Metroidvania</span>
                      <span className="game-card__studio">
                        por <strong>Moon Studios</strong>
                      </span>
                    </p>
                    <h3 className="game-card__title">Ori and the Will of the Wisps</h3>
                    <p className="game-card__description">
                      Uma aventura emocionante em uma floresta vibrante, com plataforma precisa e trilha sonora orquestral marcante.
                    </p>
                    <ul className="platform-list" aria-label="Plataformas">
                      <li className="platform-list__item">PC</li>
                      <li className="platform-list__item">Switch</li>
                      <li className="platform-list__item">Xbox</li>
                    </ul>
                    <footer className="game-card__footer">
                      <div>
                        <p className="game-card__price">R$ 59,99</p>
                        <p className="game-card__year">
                          Ano: <time dateTime="2020">2020</time>
                        </p>
                      </div>
                      <a id="detalhes-ori" href="#catalogo" className="button button--primary button--small">
                        Ver detalhes <span className="button__arrow" aria-hidden="true">→</span>
                      </a>
                    </footer>
                  </div>
                </article>
              </li>

              {/* --- Card 10: Undertale --- */}
              <li className="game-grid__item">
                <article className="card game-card">
                  <div className="card__media game-card__media">
                    <img className="card__image" src="/images/undertale.jpg" alt="Arte de Undertale" loading="lazy" />
                    <button id="favoritar-undertale" type="button" className="favorite-button" aria-label="Adicionar Undertale à wishlist" aria-pressed="false">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                    <span className="rating-badge" aria-label="Avaliação 4,8 de 5">
                      <span className="rating-badge__star" aria-hidden="true">★</span> 4,8
                    </span>
                  </div>
                  <div className="game-card__body">
                    <p className="game-card__meta">
                      <span className="tag tag--genre">RPG</span>
                      <span className="game-card__studio">
                        por <strong>Toby Fox</strong>
                      </span>
                    </p>
                    <h3 className="game-card__title">Undertale</h3>
                    <p className="game-card__description">
                      O RPG em que ninguém precisa morrer: converse, poupe ou lute contra os monstros de um mundo subterrâneo.
                    </p>
                    <ul className="platform-list" aria-label="Plataformas">
                      <li className="platform-list__item">PC</li>
                      <li className="platform-list__item">Switch</li>
                      <li className="platform-list__item">PS4</li>
                      <li className="platform-list__item">Xbox</li>
                    </ul>
                    <footer className="game-card__footer">
                      <div>
                        <p className="game-card__price">R$ 19,99</p>
                        <p className="game-card__year">
                          Ano: <time dateTime="2015">2015</time>
                        </p>
                      </div>
                      <a id="detalhes-undertale" href="#catalogo" className="button button--primary button--small">
                        Ver detalhes <span className="button__arrow" aria-hidden="true">→</span>
                      </a>
                    </footer>
                  </div>
                </article>
              </li>
            </ul>

            <p className="list-status">Exibindo 10 de 10 títulos cadastrados no catálogo</p>
          </div>
        </section>

        {/* ================= LISTAGEM SECUNDÁRIA: PRÓXIMOS LANÇAMENTOS ================= */}
        <section id="lancamentos" className="section" aria-labelledby="lancamentos-titulo">
          <div className="container">
            <header className="section__header section__header--releases">
              <p className="section__eyebrow">Listagem secundária</p>
              <h2 id="lancamentos-titulo" className="section__title">
                Próximos lançamentos
              </h2>
              <p className="section__subtitle">Os jogos independentes mais aguardados. Ative um lembrete para não perder.</p>
            </header>

            <ul className="release-grid">
              {/* --- Lançamento 1: Hollow Knight: Silksong --- */}
              <li className="release-grid__item">
                <article className="card release-card">
                  <div className="card__media release-card__media">
                    <img className="card__image" src="/images/hollow-knight-silksong.jpg" alt="Arte de Hollow Knight: Silksong" loading="lazy" />
                    <button id="favoritar-silksong" type="button" className="favorite-button" aria-label="Adicionar Hollow Knight: Silksong à wishlist" aria-pressed="false">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                  </div>
                  <div className="release-card__body">
                    <span className="tag tag--status">Mais aguardado</span>
                    <h3 className="release-card__title">Hollow Knight: Silksong</h3>
                    <p className="release-card__studio">por Team Cherry</p>
                    <footer className="release-card__footer">
                      <p className="release-card__date">
                        Previsto: <strong>2026/2027</strong>
                      </p>
                      <button id="lembrar-silksong" type="button" className="button button--primary button--small">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                        </svg>
                        Lembrar
                      </button>
                    </footer>
                  </div>
                </article>
              </li>

              {/* --- Lançamento 2: Mina the Hollower --- */}
              <li className="release-grid__item">
                <article className="card release-card">
                  <div className="card__media release-card__media">
                    <img className="card__image" src="/images/mina-the-hollower.jpg" alt="Arte de Mina the Hollower" loading="lazy" />
                    <button id="favoritar-mina" type="button" className="favorite-button" aria-label="Adicionar Mina the Hollower à wishlist" aria-pressed="false">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                  </div>
                  <div className="release-card__body">
                    <span className="tag tag--status">Em breve</span>
                    <h3 className="release-card__title">Mina the Hollower</h3>
                    <p className="release-card__studio">por Yacht Club Games</p>
                    <footer className="release-card__footer">
                      <p className="release-card__date">
                        Previsto: <strong>4º tri. 2026</strong>
                      </p>
                      <button id="lembrar-mina" type="button" className="button button--primary button--small">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                        </svg>
                        Lembrar
                      </button>
                    </footer>
                  </div>
                </article>
              </li>

              {/* --- Lançamento 3: Crowsworn --- */}
              <li className="release-grid__item">
                <article className="card release-card">
                  <div className="card__media release-card__media">
                    <img className="card__image" src="/images/crowsworn.jpg" alt="Arte de Crowsworn" loading="lazy" />
                    <button id="favoritar-crowsworn" type="button" className="favorite-button" aria-label="Adicionar Crowsworn à wishlist" aria-pressed="false">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                  </div>
                  <div className="release-card__body">
                    <span className="tag tag--status">Em desenvolvimento</span>
                    <h3 className="release-card__title">Crowsworn</h3>
                    <p className="release-card__studio">por Sunlight Games</p>
                    <footer className="release-card__footer">
                      <p className="release-card__date">
                        Previsto: <strong>2027</strong>
                      </p>
                      <button id="lembrar-crowsworn" type="button" className="button button--primary button--small">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                        </svg>
                        Lembrar
                      </button>
                    </footer>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App
