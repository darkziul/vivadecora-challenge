import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './pages';
import store from './store';
import GlobalStyled from './styleds/GlobalStyled';

ReactDOM.render(
    <Provider store={store}>
        <App/>
       <GlobalStyled/>
    </Provider>
    , document.getElementById('root'));