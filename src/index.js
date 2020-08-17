import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import PageNotFound from './pages/PageNotFound';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(

  <BrowserRouter>

    <Switch>

      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={PageNotFound} exact />

    </Switch>

  </BrowserRouter>,

  /*
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    */

  document.getElementById('root'),
);
