import data from '../Data/Data'
import './AboutMe.css'
import { logos } from '../Data/Data'

const template = () => {
  return `
    <section class="aboutme" id="aboutme">
      <h2>About me</h2>
      <img class="avatar" src=${data.avatar} alt=${data.name}/>
      <ul>
      ${logos
        .map(
          (logo) => `<li>
      <img src="${logo.src}" alt="${logo.nombre}">
      </li>`
        )
        .join('')}
    </ul>
      <p>${data.aboutMe}</p>
      <p>${data.address}</p>
      <a href=${`mailto:${data.email} class="btn">Contact me</a>`}
    </section>
  `
}

export const AboutMe = () => {
  return template()
}

export const addAboutListeners = () => {
  const avatar = document.querySelector('.avatar')

  avatar.addEventListener('click', (e) => e.target.classList.toggle('rotate'))
}
