# IndieGameHub

Trabalho de Conclusão da Disciplina (TCD) de Desenvolvimento em Ambiente Web.

## Autor
Cauan Kozerski

## Sobre o Projeto
O **IndieGameHub** é uma página dedicada à divulgação, descoberta e valorização de jogos digitais independentes (indie games). A aplicação apresenta um catálogo com títulos autorais e aclamados pela crítica, mostrando gênero, estúdio, avaliação da comunidade, plataformas, preço e ano de lançamento, além de uma seção com os próximos lançamentos mais aguardados do cenário independente.

### Listagens
- **Listagem principal — Catálogo de jogos:** 10 jogos com título, estúdio, gênero, descrição, imagem, plataformas, preço, ano e nota.
- **Listagem secundária — Próximos lançamentos:** 3 jogos com título, estúdio, status, previsão de lançamento e imagem.

## Tecnologias
- React + TypeScript (projeto criado com Vite)
- CSS puro com variáveis em `:root` e media queries (mobile first)

## Estrutura de pastas (Fase 3)
```
src/
├── components/
│   ├── Header.tsx              # cabeçalho, menu mobile e contador da wishlist
│   ├── Hero.tsx                # destaque da semana
│   ├── FiltroGeneros.tsx       # botões de filtro por gênero
│   ├── CatalogoJogos.tsx       # listagem principal (grade de jogos)
│   ├── CardJogo.tsx            # card de um jogo
│   ├── ProximosLancamentos.tsx # listagem secundária
│   ├── CardLancamento.tsx      # card de um lançamento
│   ├── Footer.tsx              # rodapé
│   └── Icones.tsx              # ícones SVG reutilizados
├── data/
│   ├── jogos.ts                # type Jogo + vetor com os 10 jogos
│   └── lancamentos.ts          # type Lancamento + vetor com os 3 lançamentos
├── App.css
├── App.tsx                     # guarda o estado e monta a página
└── main.tsx
```

## Como executar
```bash
npm install
npm run dev
```

## Fases do Projeto
- **Fase 1:** wireframes mobile, tablet e desktop (pasta `docs/`).
- **Fase 2:** página completa no `App.tsx`, estilizada com CSS em `App.css`, fiel aos wireframes e responsiva.
- **Fase 3:** página separada em componentes, listagens renderizadas a partir de vetores de objetos com `map` e interações com `useState`:
  - favoritar jogos e lançamentos (o contador da wishlist no cabeçalho é atualizado);
  - filtrar o catálogo por gênero;
  - ativar/desativar o lembrete dos próximos lançamentos;
  - abrir/fechar o menu no celular.
