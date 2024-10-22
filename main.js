import './style.css'
import { Header, addHeaderListeners } from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Main, addMainListeners } from './components/Main/Main'
import { addAboutListeners } from './components/AboutMe/AboutMe'

const render = () => {
  document.querySelector('#app').innerHTML = `
    ${Header()}
    ${Main()}
    
  `
}

render()
addAboutListeners()
addMainListeners()
addHeaderListeners()
