import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

function CadastroVideo() {
  return (
    <div>
      Página de Cadastro de Video
    </div>
  )
}

ReactDOM.render(

  <BrowserRouter>

    <Switch>

      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/" component={App} />

    </Switch>

  </BrowserRouter>,

  /* 
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  */

  document.getElementById('root')
);

