import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Pesquisa from './components/Pesquisa';
import Detalhes from './components/Detalhes';

export default function Routes(){
  return(
    <BrowserRouter>
      <Pesquisa/>
      <Switch>
        <Route exact path="/repositorio/:repositorio" component={Detalhes} />
      </Switch>
    </BrowserRouter>
  );
}