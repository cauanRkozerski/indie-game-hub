import { useState } from 'react'
import { IconeBusca, IconeCoracao, IconeFechar, IconeLogo, IconeMenu } from './Icones'

type HeaderProps = {
  quantidadeFavoritos: number
}

function Header({ quantidadeFavoritos }: HeaderProps) {
  // Esse estado só interessa ao cabeçalho (abrir/fechar o menu no celular),
  // por isso ele fica aqui dentro e não no App.
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#inicio" className="brand" aria-label="IndieGameHub — página inicial">
          <span className="brand__logo" aria-hidden="true">
            <IconeLogo />
          </span>
          <span className="brand__name">IndieGameHub</span>
          <span className="brand__badge">INDIE VAULT</span>
        </a>

        <nav
          id="menu-principal"
          className={menuAberto ? 'main-nav main-nav--open' : 'main-nav'}
          aria-label="Navegação principal"
        >
          <ul className="main-nav__list">
            <li>
              <a href="#inicio" className="main-nav__link main-nav__link--active" aria-current="page">
                Início
              </a>
            </li>
            <li>
              <a href="#catalogo" className="main-nav__link">
                Catálogo
              </a>
            </li>
            <li>
              <a href="#lancamentos" className="main-nav__link">
                Lançamentos
              </a>
            </li>
            <li>
              <a href="#sobre" className="main-nav__link">
                Sobre
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <form className="search" role="search" onSubmit={(evento) => evento.preventDefault()}>
            <span className="search__icon">
              <IconeBusca />
            </span>
            <label htmlFor="campo-busca" className="visually-hidden">
              Buscar jogos ou estúdios
            </label>
            <input id="campo-busca" className="search__input" type="search" placeholder="Buscar jogos ou estúdios..." />
            <kbd className="search__shortcut">Ctrl K</kbd>
          </form>

          <button type="button" className="icon-button icon-button--search" aria-label="Abrir busca">
            <IconeBusca />
          </button>

          <a href="#catalogo" className="wishlist-button" aria-label={`Wishlist com ${quantidadeFavoritos} jogos`}>
            <IconeCoracao />
            <span className="wishlist-button__label">Wishlist</span>
            <span className="wishlist-button__count">{quantidadeFavoritos}</span>
          </a>

          <button
            type="button"
            className="icon-button icon-button--menu"
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuAberto}
            aria-controls="menu-principal"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            {menuAberto ? <IconeFechar /> : <IconeMenu />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
