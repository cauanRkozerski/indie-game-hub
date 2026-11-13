import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CatalogoJogos from './components/CatalogoJogos'
import ProximosLancamentos from './components/ProximosLancamentos'
import Footer from './components/Footer'
import { jogos } from './data/jogos'
import { lancamentos } from './data/lancamentos'
import './App.css'

function App() {
  // Lista com os ids dos jogos favoritados (wishlist)
  const [favoritos, setFavoritos] = useState<string[]>([])

  // Se o id já está na wishlist, remove. Se não está, adiciona.
  function alternarFavorito(id: string) {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((favoritoId) => favoritoId !== id))
    } else {
      setFavoritos([...favoritos, id])
    }
  }

  return (
    <>
      <Header quantidadeFavoritos={favoritos.length} />

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


        <CatalogoJogos
          jogos={jogos}
          totalDeJogos={jogos.length}
          favoritos={favoritos}
          onFavoritar={alternarFavorito}
        />

        <ProximosLancamentos lancamentos={lancamentos} favoritos={favoritos} onFavoritar={alternarFavorito} />
      </main>

      <Footer />
    </>
  )
}

export default App
