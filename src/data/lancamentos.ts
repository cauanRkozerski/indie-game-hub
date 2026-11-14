// Tipo para os itens da listagem secundária (Próximos lançamentos)
export type Lancamento = {
  id: string
  titulo: string
  estudio: string
  status: string
  previsao: string
  plataformas: string
  imagem: string
}

// Vetor local de objetos da listagem secundária
export const lancamentos: Lancamento[] = [
  {
    id: 'silksong',
    titulo: 'Hollow Knight: Silksong',
    estudio: 'Team Cherry',
    status: 'Mais aguardado',
    previsao: '2026/2027',
    plataformas: 'PC, Switch, Xbox Series, PS5',
    imagem: '/images/hollow-knight-silksong.jpg',
  },
  {
    id: 'mina-the-hollower',
    titulo: 'Mina the Hollower',
    estudio: 'Yacht Club Games',
    status: 'Em breve',
    previsao: 'Q4 2026',
    plataformas: 'PC, Nintendo Switch, PS5',
    imagem: '/images/mina-the-hollower.jpg',
  },
  {
    id: 'crowsworn',
    titulo: 'Crowsworn',
    estudio: 'Mongoose Rodeo',
    status: 'Em desenvolvimento',
    previsao: '2027',
    plataformas: 'PC, PlayStation e Xbox',
    imagem: '/images/crowsworn.jpg',
  },
]
