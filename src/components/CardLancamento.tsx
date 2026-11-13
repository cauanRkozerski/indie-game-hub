import type { Lancamento } from '../data/lancamentos'
import { IconeCoracao, IconeSino } from './Icones'

type CardLancamentoProps = {
  lancamento: Lancamento
  favorito: boolean
  onFavoritar: (id: string) => void
}

// Card de um item da listagem secundária (próximos lançamentos)
function CardLancamento({ lancamento, favorito, onFavoritar }: CardLancamentoProps) {
  return (
    <article className="card release-card">
      <div className="card__media release-card__media">
        <img className="card__image" src={lancamento.imagem} alt={`Arte de ${lancamento.titulo}`} loading="lazy" />

        <button
          type="button"
          className={favorito ? 'favorite-button favorite-button--active' : 'favorite-button'}
          aria-label={favorito ? `Remover ${lancamento.titulo} da wishlist` : `Adicionar ${lancamento.titulo} à wishlist`}
          aria-pressed={favorito}
          onClick={() => onFavoritar(lancamento.id)}
        >
          <IconeCoracao />
        </button>
      </div>

      <div className="release-card__body">
        <span className="tag tag--status">{lancamento.status}</span>
        <h3 className="release-card__title">{lancamento.titulo}</h3>
        <p className="release-card__studio">por {lancamento.estudio}</p>

        <footer className="release-card__footer">
          <p className="release-card__date">
            Previsto: <strong>{lancamento.previsao}</strong>
          </p>
          <button type="button" className="button button--primary button--small">
            <IconeSino />
            Lembrar
          </button>
        </footer>
      </div>
    </article>
  )
}

export default CardLancamento
