import {combineReducers} from 'redux';

import navigation, {NavigatonState} from './navigation';
import movies, {MoviesState} from './movies';

//@types
export type Reducers = {
    navigation: NavigatonState;
    movies: MoviesState;
};

export default combineReducers<Reducers>({
    navigation,
    movies,
});