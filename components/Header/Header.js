import './Header.css'

const template = () => {
  return `
  <header>
      <h1>Simón Guerra</h1>
      <nav>
        <ul id="short-cuts">
          <li>
            <a href="#aboutme">About me</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
      <a id="contacto" href="#contacto">Contacto</a>
      <button id="menu-btn">Menu</button>
      <div id="dropdown-menu" style="display: none">
        <a href="#aboutme">About me</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a id="contacto" href="#contacto">Contacto</a>
      </div>
    </header>
  `
}

const addHeaderListeners = () => {
  const menuBtn = document.getElementById('menu-btn')
  const dropdownMenu = document.getElementById('dropdown-menu')

  menuBtn.addEventListener('click', () => {
    dropdownMenu.style.display =
      dropdownMenu.style.display === 'none' ? 'block' : 'none'
  })
}

const Header = () => {
  return template()
}

export { Header, addHeaderListeners }
