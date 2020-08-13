import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`

    background-color: black;
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%; 
    display: flex;
    flex-direction: column;
    ${({ paddingAll }) => css`
      padding: ${paddingAll};
    `}
`;

function PageDefault({ children, paddingAll }) {
  return (

    <>

      <Menu />

      <Main paddingAll={paddingAll}>
        {children}
      </Main>

      <Footer />

    </>

  );
}

PageDefault.defaultProps = {
  paddingAll: '',
  children: '',
};

PageDefault.propTypes = {
  children: PropTypes.string,
  paddingAll: PropTypes.string,
};

export default PageDefault;
