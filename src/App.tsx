import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FiltroGeneros from './components/FiltroGeneros'
import CatalogoJogos from './components/CatalogoJogos'
import ProximosLancamentos from './components/ProximosLancamentos'
import Footer from './components/Footer'
import { generos, jogos } from './data/jogos'
import { lancamentos } from './data/lancamentos'
import './App.css'

function App() {
  // Lista com os ids dos jogos favoritados (wishlist)
  const [favoritos, setFavoritos] = useState<string[]>([])
  // Gênero escolhido no filtro do catálogo
  const [generoSelecionado, setGeneroSelecionado] = useState('Todos')

  // Se o id já está na wishlist, remove. Se não está, adiciona.
  function alternarFavorito(id: string) {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((favoritoId) => favoritoId !== id))
    } else {
      setFavoritos([...favoritos, id])
    }
  }

  // Jogos que aparecem na tela de acordo com o gênero selecionado
  const jogosFiltrados =
    generoSelecionado === 'Todos' ? jogos : jogos.filter((jogo) => jogo.genero === generoSelecionado)

  return (
    <>
      <Header quantidadeFavoritos={favoritos.length} />

      <main id="inicio">
        <Hero />

        <FiltroGeneros
          generos={generos}
          jogos={jogos}
          generoSelecionado={generoSelecionado}
          onSelecionarGenero={setGeneroSelecionado}
        />

        <CatalogoJogos
          jogos={jogosFiltrados}
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
