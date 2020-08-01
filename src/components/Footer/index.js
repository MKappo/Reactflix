import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Footer.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.instagram.com/mkapobianco/">
               
        <img src={Logo} alt="Logo KPO Bass" />
      

      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
