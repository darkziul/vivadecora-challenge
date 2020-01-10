import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Home from './Home';
import Like from './Like';
import Dislike from './Dislike';

const Pages = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/curtidos'><Like/></Route>
        <Route exact path='/nao-curtidos'><Dislike/></Route>
        <Route exact path='/'><Home/></Route>
        <Route path="*"><Redirect to="/"/></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Pages;