import type { Lancamento } from '../data/lancamentos'
import CardLancamento from './CardLancamento'

type ProximosLancamentosProps = {
  lancamentos: Lancamento[]
  favoritos: string[]
  onFavoritar: (id: string) => void
  lembretes: string[]
  onLembrar: (id: string) => void
}

function ProximosLancamentos({
  lancamentos,
  favoritos,
  onFavoritar,
  lembretes,
  onLembrar,
}: ProximosLancamentosProps) {
  return (
    <section id="lancamentos" className="section">
      <div className="container">
        <header className="section__header section__header--releases">
          <p className="section__eyebrow">2. Listagem secundária</p>
          <h2 className="section__title">Próximos lançamentos</h2>
          <p className="section__subtitle">Os jogos independentes mais aguardados. Ative um lembrete para não perder.</p>
        </header>

        <ul className="release-grid">
          {lancamentos.map((lancamento) => (
            <li key={lancamento.id} className="release-grid__item">
              <CardLancamento
                lancamento={lancamento}
                favorito={favoritos.includes(lancamento.id)}
                onFavoritar={onFavoritar}
                lembreteAtivo={lembretes.includes(lancamento.id)}
                onLembrar={onLembrar}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ProximosLancamentos
