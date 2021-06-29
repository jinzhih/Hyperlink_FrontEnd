import React from 'react';
// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'regenerator-runtime';
import { createGlobalStyle } from 'styled-components';
import { Routes } from './routes/Routes';

import Header from './header/Header';
import Footer from './footer/Footer';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }
`;

const App = () => {
  return (
    <React.Fragment>
       <GlobalStyle />
       <Header />
       <div className='body'>
         <Routes />
       </div>
       <Footer />
    </React.Fragment>
  )
};
 

export default App;
