import type { Lancamento } from '../data/lancamentos'
import { IconeCoracao, IconeSino } from './Icones'

type CardLancamentoProps = {
  lancamento: Lancamento
  favorito: boolean
  onFavoritar: (id: string) => void
  lembreteAtivo: boolean
  onLembrar: (id: string) => void
}

function CardLancamento({ lancamento, favorito, onFavoritar, lembreteAtivo, onLembrar }: CardLancamentoProps) {
  return (
    <article className="card release-card">
      <div className="card__media release-card__media">
        <img className="card__image" src={lancamento.imagem} alt={lancamento.titulo} />

        <button
          type="button"
          className={favorito ? 'favorite-button favorite-button--active' : 'favorite-button'}
          onClick={() => onFavoritar(lancamento.id)}
        >
          <IconeCoracao />
        </button>
      </div>

      <div className="release-card__body">
        <span className="tag tag--status">{lancamento.status}</span>
        <h3 className="release-card__title">{lancamento.titulo}</h3>
        <p className="release-card__studio">Estúdio: {lancamento.estudio}</p>
        <p className="release-card__platforms">Plataformas: {lancamento.plataformas}</p>

        <footer className="release-card__footer">
          <p className="release-card__date">
            Previsto: <strong>{lancamento.previsao}</strong>
          </p>
          <button
            type="button"
            className={
              lembreteAtivo ? 'button button--reminder-active button--small' : 'button button--primary button--small'
            }
            onClick={() => onLembrar(lancamento.id)}
          >
            <IconeSino />
            {lembreteAtivo ? 'Lembrete ativo' : 'Lembrar'}
          </button>
        </footer>
      </div>
    </article>
  )
}

export default CardLancamento
