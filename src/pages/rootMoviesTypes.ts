import { Dispatch } from 'redux';

import {MoviesActions, MoviesState} from '../store/movies';

export type Collection = {
    collection: MoviesState;
    dispatch?: Dispatch;
};
export type Actions = {
    actions: MoviesActions;
};
export type CollectionAndActions =  Collection & Actions;