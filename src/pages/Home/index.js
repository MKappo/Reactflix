import React from 'react';
import Menu from '../../components/Menu/';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import dadosIniciais from '../../data/dados_iniciais.json';
import styled from '../../../node_modules/styled-components';

const AppWrapper = styled.div`
  background: var(--grayDark)
`;

function Home() {
  return (
    <AppWrapper>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        videoDescription={"Experimentações de um baixista em desenvolvimento"}
        url={dadosIniciais.categorias[0].videos[0].url}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />


      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />


      <Carousel
        category={dadosIniciais.categorias[5]}
      />

      <Footer />

    </AppWrapper>
  );
}

export default Home;
