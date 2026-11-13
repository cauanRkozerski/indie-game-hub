// Formato de cada item da listagem secundária (Próximos lançamentos)
export type Lancamento = {
  id: string
  titulo: string
  estudio: string
  status: string
  previsao: string
  imagem: string
}

// Vetor local com os lançamentos. Essa listagem continua local também na Fase 4.
export const lancamentos: Lancamento[] = [
  {
    id: 'silksong',
    titulo: 'Hollow Knight: Silksong',
    estudio: 'Team Cherry',
    status: 'Mais aguardado',
    previsao: '2026/2027',
    imagem: '/images/hollow-knight-silksong.jpg',
  },
  {
    id: 'mina-the-hollower',
    titulo: 'Mina the Hollower',
    estudio: 'Yacht Club Games',
    status: 'Em breve',
    previsao: '4º tri. 2026',
    imagem: '/images/mina-the-hollower.jpg',
  },
  {
    id: 'crowsworn',
    titulo: 'Crowsworn',
    estudio: 'Sunlight Games',
    status: 'Em desenvolvimento',
    previsao: '2027',
    imagem: '/images/crowsworn.jpg',
  },
]
