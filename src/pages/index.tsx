import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Reducers } from '../store/reducers';
import { Collection } from '../components/rootStateDefaultTypes';
import HomePage from './Home';
import LikePage from './Like';
import DislikePage from './Dislike';


const Pages: React.FC<Collection> = ({ collection }) => {
  const { navigation } = collection;
  return (
    <BrowserRouter>
      <Switch>
        {
          navigation.map(nav => {
            let page: React.FC;
            switch (nav.name) {
              case 'home': page = HomePage; break;
              case 'like': page = LikePage; break;
              case 'dislike': page = DislikePage; break;
              default: return;
            }
            return <Route exact path={nav.url} component={page} key={nav.name} />
          })
        }
        <Route path="*"><Redirect to="/" /></Route>
      </Switch>
    </BrowserRouter>
  );
}
const mapStateToProps = (state: Reducers): Collection => ({
  collection: state.stateDefault
});
export default connect(mapStateToProps)(Pages);