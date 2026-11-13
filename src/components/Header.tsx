import { useState } from 'react'
import { IconeBusca, IconeCoracao, IconeFechar, IconeLogo, IconeMenu } from './Icones'

type HeaderProps = {
  quantidadeFavoritos: number
  busca: string
  onMudarBusca: (texto: string) => void
}

function Header({ quantidadeFavoritos, busca, onMudarBusca }: HeaderProps) {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#inicio" className="brand">
          <span className="brand__logo">
            <IconeLogo />
          </span>
          <span className="brand__name">IndieGameHub</span>
          <span className="brand__badge">INDIE VAULT</span>
        </a>

        <nav className={menuAberto ? 'main-nav main-nav--open' : 'main-nav'}>
          <ul className="main-nav__list">
            <li>
              <a href="#inicio" className="main-nav__link main-nav__link--active">
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
          <form className="search" onSubmit={(evento) => evento.preventDefault()}>
            <span className="search__icon">
              <IconeBusca />
            </span>
            <input
              className="search__input"
              type="search"
              placeholder="Buscar jogos ou estúdios..."
              value={busca}
              onChange={(evento) => onMudarBusca(evento.target.value)}
            />
            <kbd className="search__shortcut">Ctrl K</kbd>
          </form>

          <a href="#catalogo" className="icon-button icon-button--search" title="Ir para o catálogo">
            <IconeBusca />
          </a>

          <a href="#catalogo" className="wishlist-button">
            <IconeCoracao />
            <span className="wishlist-button__label">Wishlist</span>
            <span className="wishlist-button__count">{quantidadeFavoritos}</span>
          </a>

          <button
            type="button"
            className="icon-button icon-button--menu"
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
