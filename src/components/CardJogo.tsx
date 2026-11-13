import type { Jogo } from '../data/jogos'
import { IconeCoracao } from './Icones'

type CardJogoProps = {
  jogo: Jogo
  favorito: boolean
  onFavoritar: (id: string) => void
}

function CardJogo({ jogo, favorito, onFavoritar }: CardJogoProps) {
  const precoFormatado = `R$ ${jogo.preco.toFixed(2).replace('.', ',')}`
  const notaFormatada = jogo.nota.toFixed(1).replace('.', ',')

  return (
    <article className="card game-card">
      <div className="card__media game-card__media">
        <img className="card__image" src={jogo.imagem} alt={jogo.titulo} />

        <button
          type="button"
          className={favorito ? 'favorite-button favorite-button--active' : 'favorite-button'}
          onClick={() => onFavoritar(jogo.id)}
        >
          <IconeCoracao />
        </button>

        <span className="rating-badge">
          <span className="rating-badge__star">★</span> {notaFormatada}
        </span>
      </div>

      <div className="game-card__body">
        <p className="game-card__meta">
          <span className="tag tag--genre">{jogo.genero}</span>
          <span className="game-card__studio">
            por <strong>{jogo.estudio}</strong>
          </span>
        </p>

        <h3 className="game-card__title">{jogo.titulo}</h3>
        <p className="game-card__description">{jogo.descricao}</p>

        <ul className="platform-list">
          {jogo.plataformas.map((plataforma) => (
            <li key={plataforma} className="platform-list__item">
              {plataforma}
            </li>
          ))}
        </ul>

        <footer className="game-card__footer">
          <div>
            <p className="game-card__price">{precoFormatado}</p>
            <p className="game-card__year">Ano: {jogo.ano}</p>
          </div>
          <a href="#catalogo" className="button button--primary button--small">
            Ver detalhes <span className="button__arrow">→</span>
          </a>
        </footer>
      </div>
    </article>
  )
}

export default CardJogo
