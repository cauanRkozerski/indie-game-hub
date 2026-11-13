// Formato de cada jogo da listagem principal (Catálogo de jogos)
export type Jogo = {
  id: string
  titulo: string
  estudio: string
  genero: string
  descricao: string
  imagem: string
  plataformas: string[]
  preco: number
  ano: number
  nota: number
}

// Gêneros usados nos botões de filtro ("Todos" mostra o catálogo inteiro)
export const generos: string[] = [
  'Todos',
  'Metroidvania',
  'Roguelike',
  'Plataforma',
  'RPG',
  'Deckbuilder',
  'Simulação',
]

// Vetor com os jogos do catálogo.
// Na Fase 4 esses dados vão vir de um JSON externo carregado com fetch.
export const jogos: Jogo[] = [
  {
    id: 'hollow-knight',
    titulo: 'Hollow Knight',
    estudio: 'Team Cherry',
    genero: 'Metroidvania',
    descricao:
      'Explore Hallownest, um vasto reino arruinado de insetos e heróis, em uma aventura de ação 2D desenhada à mão.',
    imagem: '/images/hollow-knight.jpg',
    plataformas: ['PC', 'Switch', 'PS4', 'Xbox'],
    preco: 46.99,
    ano: 2017,
    nota: 4.9,
  },
  {
    id: 'dead-cells',
    titulo: 'Dead Cells',
    estudio: 'Motion Twin',
    genero: 'Roguelike',
    descricao:
      'Ação roguelite em plataforma com combate fluido, esquivas precisas e um castelo que muda a cada morte.',
    imagem: '/images/dead-cells.jpg',
    plataformas: ['PC', 'Switch', 'PS4', 'Xbox'],
    preco: 47.49,
    ano: 2018,
    nota: 4.8,
  },
  {
    id: 'celeste',
    titulo: 'Celeste',
    estudio: 'Maddy Makes Games',
    genero: 'Plataforma',
    descricao:
      'Ajude Madeline a escalar a Montanha Celeste e enfrentar seus demônios internos em um plataforma desafiador e sensível.',
    imagem: '/images/celeste.jpg',
    plataformas: ['PC', 'Switch', 'PS4', 'Xbox'],
    preco: 36.99,
    ano: 2018,
    nota: 5.0,
  },
  {
    id: 'sea-of-stars',
    titulo: 'Sea of Stars',
    estudio: 'Sabotage Studio',
    genero: 'RPG',
    descricao:
      'RPG por turnos com visual retrô deslumbrante e a jornada épica de dois Guerreiros do Solstício.',
    imagem: '/images/sea-of-stars.jpg',
    plataformas: ['PC', 'Switch', 'PS5', 'Xbox'],
    preco: 99.9,
    ano: 2023,
    nota: 4.7,
  },
  {
    id: 'hades',
    titulo: 'Hades',
    estudio: 'Supergiant Games',
    genero: 'Roguelike',
    descricao:
      'Desafie o deus dos mortos e lute para escapar do Submundo neste roguelike de ação inspirado na mitologia grega.',
    imagem: '/images/hades.jpg',
    plataformas: ['PC', 'Switch', 'PS5', 'Xbox'],
    preco: 73.99,
    ano: 2020,
    nota: 4.9,
  },
  {
    id: 'balatro',
    titulo: 'Balatro',
    estudio: 'LocalThunk',
    genero: 'Deckbuilder',
    descricao:
      'Um roguelike deckbuilder inspirado no pôquer, cheio de combinações absurdas e coringas poderosos.',
    imagem: '/images/balatro.jpg',
    plataformas: ['PC', 'Switch', 'PS5', 'Mobile'],
    preco: 44.99,
    ano: 2024,
    nota: 4.9,
  },
  {
    id: 'stardew-valley',
    titulo: 'Stardew Valley',
    estudio: 'ConcernedApe',
    genero: 'Simulação',
    descricao:
      'Herde a antiga fazenda do seu avô e construa uma nova vida no campo, entre plantações, amizades e mistérios.',
    imagem: '/images/stardew-valley.jpg',
    plataformas: ['PC', 'Switch', 'PS4', 'Xbox', 'Mobile'],
    preco: 24.99,
    ano: 2016,
    nota: 4.9,
  },
  {
    id: 'cuphead',
    titulo: 'Cuphead',
    estudio: 'Studio MDHR',
    genero: 'Plataforma',
    descricao:
      'Ação run and gun com chefes desafiadores e animação desenhada à mão no estilo dos desenhos dos anos 1930.',
    imagem: '/images/cuphead.jpg',
    plataformas: ['PC', 'Switch', 'PS4', 'Xbox'],
    preco: 36.99,
    ano: 2017,
    nota: 4.7,
  },
  {
    id: 'ori',
    titulo: 'Ori and the Will of the Wisps',
    estudio: 'Moon Studios',
    genero: 'Metroidvania',
    descricao:
      'Uma aventura emocionante em uma floresta vibrante, com plataforma precisa e trilha sonora orquestral marcante.',
    imagem: '/images/ori-will-of-the-wisps.jpg',
    plataformas: ['PC', 'Switch', 'Xbox'],
    preco: 59.99,
    ano: 2020,
    nota: 4.8,
  },
  {
    id: 'undertale',
    titulo: 'Undertale',
    estudio: 'Toby Fox',
    genero: 'RPG',
    descricao:
      'O RPG em que ninguém precisa morrer: converse, poupe ou lute contra os monstros de um mundo subterrâneo.',
    imagem: '/images/undertale.jpg',
    plataformas: ['PC', 'Switch', 'PS4', 'Xbox'],
    preco: 19.99,
    ano: 2015,
    nota: 4.8,
  },
]
