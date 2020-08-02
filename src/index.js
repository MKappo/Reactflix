import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video'
import PageNotFound from './pages/PageNotFound';


ReactDOM.render(

  <BrowserRouter>

    <Switch>

      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={PageNotFound} />

    </Switch>

  </BrowserRouter>,

  /* 
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  */

  document.getElementById('root')
);

