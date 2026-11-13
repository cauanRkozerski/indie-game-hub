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
  // Começa com os 3 jogos favoritados mostrados no wireframe
  const [favoritos, setFavoritos] = useState<string[]>(['hollow-knight', 'celeste', 'hades'])
  const [generoSelecionado, setGeneroSelecionado] = useState<string>('Todos')
  const [busca, setBusca] = useState<string>('')
  const [lembretes, setLembretes] = useState<string[]>([])

  function alternarFavorito(id: string) {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((item) => item !== id))
    } else {
      setFavoritos([...favoritos, id])
    }
  }

  function alternarLembrete(id: string) {
    if (lembretes.includes(id)) {
      setLembretes(lembretes.filter((item) => item !== id))
    } else {
      setLembretes([...lembretes, id])
    }
  }

  // Filtra os jogos pelo gênero clicado e pelo texto digitado na busca
  const jogosFiltrados = jogos.filter((jogo) => {
    const bateGenero = generoSelecionado === 'Todos' || jogo.genero === generoSelecionado
    const termo = busca.toLowerCase()
    const bateBusca =
      jogo.titulo.toLowerCase().includes(termo) || jogo.estudio.toLowerCase().includes(termo)

    return bateGenero && bateBusca
  })

  return (
    <>
      <Header
        quantidadeFavoritos={favoritos.length}
        busca={busca}
        onMudarBusca={setBusca}
      />

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

        <ProximosLancamentos
          lancamentos={lancamentos}
          favoritos={favoritos}
          onFavoritar={alternarFavorito}
          lembretes={lembretes}
          onLembrar={alternarLembrete}
        />
      </main>

      <Footer />
    </>
  )
}

export default App
