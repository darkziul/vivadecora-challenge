import { all, fork } from 'redux-saga/effects';

import movies from './movies/sagas';

export default function* rootWatchAll() {
    yield all([
        fork(movies)
    ])
};