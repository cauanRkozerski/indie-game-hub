import type { Jogo } from '../data/jogos'

type FiltroGenerosProps = {
  generos: string[]
  jogos: Jogo[]
  generoSelecionado: string
  onSelecionarGenero: (genero: string) => void
}

function FiltroGeneros({ generos, jogos, generoSelecionado, onSelecionarGenero }: FiltroGenerosProps) {
  function contarPorGenero(genero: string) {
    if (genero === 'Todos') {
      return jogos.length
    }
    return jogos.filter((jogo) => jogo.genero === genero).length
  }

  return (
    <div className="container filters">
      <p className="filters__label">Filtrar por gênero:</p>

      <ul className="chip-list">
        {generos.map((genero) => (
          <li key={genero} className="chip-list__item">
            <button
              type="button"
              className={genero === generoSelecionado ? 'chip chip--active' : 'chip'}
              onClick={() => onSelecionarGenero(genero)}
            >
              {genero} <span className="chip__count">({contarPorGenero(genero)})</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="filters__selects">
        <div className="select-field select-field--platform">
          <select className="select" defaultValue="todas">
            <option value="todas">Plataforma: Todas</option>
            <option value="pc">PC</option>
            <option value="switch">Switch</option>
            <option value="playstation">PlayStation</option>
            <option value="xbox">Xbox</option>
          </select>
        </div>
        <div className="select-field">
          <select className="select" defaultValue="populares">
            <option value="populares">Ordenar: Mais populares</option>
            <option value="avaliacao">Ordenar: Melhor avaliação</option>
            <option value="menor-preco">Ordenar: Menor preço</option>
            <option value="recentes">Ordenar: Mais recentes</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default FiltroGeneros
