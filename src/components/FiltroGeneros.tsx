import type { Jogo } from '../data/jogos'

type FiltroGenerosProps = {
  generos: string[]
  jogos: Jogo[]
  generoSelecionado: string
  onSelecionarGenero: (genero: string) => void
}

// Barra de filtros acima do catálogo (botões de gênero + selects de ordenação)
function FiltroGeneros({ generos, jogos, generoSelecionado, onSelecionarGenero }: FiltroGenerosProps) {
  // Conta quantos jogos existem em cada gênero para mostrar no botão
  function contarJogos(genero: string) {
    if (genero === 'Todos') {
      return jogos.length
    }
    return jogos.filter((jogo) => jogo.genero === genero).length
  }

  return (
    <div className="container filters">
      <p id="filtro-genero-titulo" className="filters__label">
        Filtrar por gênero
      </p>

      <ul className="chip-list" aria-labelledby="filtro-genero-titulo">
        {generos.map((genero) => (
          <li key={genero} className="chip-list__item">
            <button
              type="button"
              className={genero === generoSelecionado ? 'chip chip--active' : 'chip'}
              aria-pressed={genero === generoSelecionado}
              onClick={() => onSelecionarGenero(genero)}
            >
              {genero} <span className="chip__count">({contarJogos(genero)})</span>
            </button>
          </li>
        ))}
      </ul>

      {/* Selects apenas visuais por enquanto, seguindo o wireframe */}
      <div className="filters__selects">
        <label className="select-field select-field--platform">
          <span className="visually-hidden">Filtrar por plataforma</span>
          <select className="select" defaultValue="todas">
            <option value="todas">Plataforma: Todas</option>
            <option value="pc">PC</option>
            <option value="switch">Switch</option>
            <option value="playstation">PlayStation</option>
            <option value="xbox">Xbox</option>
          </select>
        </label>
        <label className="select-field">
          <span className="visually-hidden">Ordenar jogos</span>
          <select className="select" defaultValue="populares">
            <option value="populares">Ordenar: Mais populares</option>
            <option value="avaliacao">Ordenar: Melhor avaliação</option>
            <option value="menor-preco">Ordenar: Menor preço</option>
            <option value="recentes">Ordenar: Mais recentes</option>
          </select>
        </label>
      </div>
    </div>
  )
}

export default FiltroGeneros
