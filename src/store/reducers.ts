import { combineReducers } from 'redux';

import stateDefault, { StateDefault } from './stateDefault';
import movies, { MoviesState } from './movies';

//@types
export type Reducers = {
    stateDefault: StateDefault;
    movies: MoviesState;
};

export default combineReducers<Reducers>({
    stateDefault,
    movies,
});