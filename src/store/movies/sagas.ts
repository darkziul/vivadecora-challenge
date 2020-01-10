import { takeLatest, put, call, select,all } from 'redux-saga/effects';

import axios, {AxiosResponse} from 'axios';

import httpBuildQuery from '../../utils/httpBuildQuery';
import {minutesToHours} from '../../utils/toHours';
import shuffle from '../../utils/shuffle';

import {TYPES, ActionResponseMovie} from './index';

import {Reducers} from '../reducers';
import {ResponseMovie, DataMovie, ResponseDiscoverMovies, DiscoverMoviesResult} from './rootResponseTypes';

//selectors
type Querydiscover = {
    language: string;
    sort_by:string;
    page:number;
    api_key:string;
};
type ListAndCurrent = {
    list: DiscoverMoviesResult[];
    current: DataMovie;
};

const selectors = {
    getPage(state:Reducers){
        return state.movies.page as number;
    },
    getData(state:Reducers){
        return state.movies.list as DiscoverMoviesResult[];
    },
    getLikesData(state:Reducers){
        return state.movies.likes as DataMovie[];
    },
    getDislikesData(state:Reducers){
        return state.movies.dislikes as DataMovie[];
    },
    getCurrent(state:Reducers){
        return state.movies.current as DataMovie;
    },

};

const URL_API = 'https://api.themoviedb.org/3';
const API_KEY  = 'd0b09c5a8d5721bbe323cc439cbe013f';
const INITIAL_QUERY:Querydiscover = {
    language: 'pt-BR',
    sort_by: 'popularity.desc',
    api_key: API_KEY,
    page: 1,
};


// image url - https://developers.themoviedb.org/3/configuration/get-api-configuration
// dataResponse ref -  https://developers.themoviedb.org/3/movies/get-movie-details
// json to typescript ref - https://quicktype.io/typescript/
const getUrlImage = (path:string):string => {
    const sizeWidth:number = window.outerWidth > 600 ? 1280: 780;
    return `https://image.tmdb.org/t/p/w${sizeWidth}/${path}`
};
const formatterDataMovie = (data:ResponseMovie):DataMovie => {
    const time = minutesToHours(data.runtime);
    return {
        votesAverage: Math.floor(data.vote_average/2),
        votes: data.vote_count,
        runtime: `${time.hours}h ${time.minutes}m`,
        releaseYear: (new Date(data.release_date)).getFullYear(),
        title: data.title,
        description: data.overview,
        genre: data.genres.map(genre=> genre.name).join('/ '),
        picturesBackground: getUrlImage(data.backdrop_path),
        picturesPoster: getUrlImage(data.poster_path),
    };
};

function* getDiscoverMovies(query:Querydiscover = INITIAL_QUERY){
    const httpQuery = httpBuildQuery(query);
    const url = `${URL_API}/discover/movie?${httpQuery}`;
    const response:AxiosResponse<ResponseDiscoverMovies> = yield call(axios.get, url);
    return response.data.results;
};
function* getMovie(id?:number){
    const url = `${URL_API}/movie/${id}?language=pt-BR&api_key=${API_KEY}`;
    const response:AxiosResponse<ResponseMovie> = yield call(axios.get,url);
    return formatterDataMovie(response.data);
};
function* listAndCurrent(list:DiscoverMoviesResult[]){
    const firstItemList = list.shift();
    const current:DataMovie = yield call(getMovie, firstItemList?.id);
    return {
        list,
        current,
    }
};
function* generateList(){
    try{
        let listData:DiscoverMoviesResult[] = yield select(selectors.getData);
        let page:number = yield select(selectors.getPage);
            page +=1;
        let listDataResponse:DiscoverMoviesResult[] = yield call(getDiscoverMovies,{...INITIAL_QUERY, page});
        let {list, current}:ListAndCurrent = yield call(listAndCurrent,shuffle(listDataResponse));
        
        yield put<ActionResponseMovie>({
            type: TYPES.REQUEST_GENERATE_SUCCESS,
            payload: {
                list: [...listData, ...list],
                page,
                current
            },
        })
    }catch(err){
        const messageError:string = err.message;
        yield put<ActionResponseMovie>({
            type: TYPES.FAILURE,
            payload: {
                error: messageError
            }
        });
    }
};

function* likeMovie(){
    try {
        const   listData:DiscoverMoviesResult[] = yield select(selectors.getData);
        if(!listData.length) return yield call(generateList);
        const   listItem:DataMovie = yield select(selectors.getCurrent);
        const   likes:DataMovie[] = yield select(selectors.getLikesData);
        const   {list, current}:ListAndCurrent = yield call(listAndCurrent, shuffle(listData));
        likes.push(listItem);
        yield put<ActionResponseMovie>({
            type: TYPES.REQUEST_LIKE_SUCCESS,
            payload: {
                list,
                likes,
                current
            },
        });
    } catch(err){
        const messageError:string = err.message;
        yield put<ActionResponseMovie>({
            type: TYPES.FAILURE,
            payload: {
                error: messageError
            }
        });
    }
};
function* dislikeMovie(){
    try {
        const   listData:DiscoverMoviesResult[] = yield select(selectors.getData);
        if(!listData.length) return yield call(generateList);
        const   listItem:DataMovie = yield select(selectors.getCurrent);
        const   dislikes:DataMovie[] = yield select(selectors.getDislikesData);
        const   {list, current}:ListAndCurrent = yield call(listAndCurrent, shuffle(listData))
        dislikes.push(listItem);
        yield put<ActionResponseMovie>({
            type: TYPES.REQUEST_DISLIKE_SUCCESS,
            payload: {
                list,
                dislikes,
                current
            },
        });

    }catch(err){
        const messageError:string = err.message;
        yield put<ActionResponseMovie>({
            type: TYPES.FAILURE,
            payload: {
                error: messageError
            }
        });
    }
};
function* skipMovie(){
    try{
        const listData:DiscoverMoviesResult[] = yield select(selectors.getData);
        if(!listData.length) return yield call(generateList);
        const {list, current}:ListAndCurrent = yield call(listAndCurrent, shuffle(listData));
            yield put<ActionResponseMovie>({
                type: TYPES.REQUEST_SKIP_SUCCESS,
                payload: {
                    list,
                    current
                },
            });
    }catch(err){
        const messageError:string = err.message;
        yield put<ActionResponseMovie>({
            type: TYPES.FAILURE,
            payload: {
                error: messageError
            }
        });
    }
};

export default function* watchAll(){
    yield all([
        takeLatest(TYPES.REQUEST_GENERATE, generateList),
        takeLatest(TYPES.REQUEST_LIKE, likeMovie),
        takeLatest(TYPES.REQUEST_DISLIKE, dislikeMovie),
        takeLatest(TYPES.REQUEST_SKIP, skipMovie),
    ]);
};