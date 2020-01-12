import { Dispatch } from 'redux';

import { StateDefault, StateDefaultActions } from '../store/stateDefault';
import {DataMovie} from '../store/movies/rootResponseTypes';

export interface Collection {
    collection: StateDefault;
    dispatch?: Dispatch;
};
export interface Actions {
    actions: StateDefaultActions;
};

export type DataModal = {
    dataModal?: DataMovie;
};

export type Modal = {
    data:DataMovie;
    closed(arg?:boolean):any;
};



export interface CollectionAndActions extends Collection, Actions { };
export type CollectionAndActionsBaseHTML = CollectionAndActions & React.BaseHTMLAttributes<any>;
export type CollectionBaseHTML = Collection & React.BaseHTMLAttributes<any>;