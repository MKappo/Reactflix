import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '..//Button'
//import ButtonLink from './components/ButtonLink'


function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo da KPOFlix" />
      </a>
      <Button as='a' className="ButtonLink" href="https://youtu.be/AUPKNAatbHU">
        Novo Vídeo
      </Button>
    </nav>
  )
}

export default Menu



