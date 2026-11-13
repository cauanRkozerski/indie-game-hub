import type { Lancamento } from '../data/lancamentos'
import CardLancamento from './CardLancamento'

type ProximosLancamentosProps = {
  lancamentos: Lancamento[]
  favoritos: string[]
  onFavoritar: (id: string) => void
}

// Listagem secundária: próximos lançamentos do cenário indie
function ProximosLancamentos({ lancamentos, favoritos, onFavoritar }: ProximosLancamentosProps) {
  return (
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
          {lancamentos.map((lancamento) => (
            <li key={lancamento.id} className="release-grid__item">
              <CardLancamento
                lancamento={lancamento}
                favorito={favoritos.includes(lancamento.id)}
                onFavoritar={onFavoritar}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ProximosLancamentos
