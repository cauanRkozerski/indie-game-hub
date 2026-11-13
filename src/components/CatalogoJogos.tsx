import type { Jogo } from '../data/jogos'
import CardJogo from './CardJogo'

type CatalogoJogosProps = {
  jogos: Jogo[]
  totalDeJogos: number
  favoritos: string[]
  onFavoritar: (id: string) => void
}

// Listagem principal: grade com os cards dos jogos
function CatalogoJogos({ jogos, totalDeJogos, favoritos, onFavoritar }: CatalogoJogosProps) {
  return (
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
          {jogos.map((jogo) => (
            <li key={jogo.id} className="game-grid__item">
              <CardJogo jogo={jogo} favorito={favoritos.includes(jogo.id)} onFavoritar={onFavoritar} />
            </li>
          ))}
        </ul>

        <p className="list-status">
          Exibindo {jogos.length} de {totalDeJogos} títulos cadastrados no catálogo
        </p>
      </div>
    </section>
  )
}

export default CatalogoJogos
