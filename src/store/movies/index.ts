import {Action} from '../rootTypes';
import {DataMovie, DiscoverMoviesResult} from './rootResponseTypes';
/**
 *  Duck Pattern  (modificado)
 */


//@types
export type MoviesActions = {
    likeMovie():Action;
    dislikeMovie():Action;
    skipMovie():Action;
    increasePage():Action;
    generateList():Action;
};
export type MoviesStateFirst = {
    list?:DiscoverMoviesResult[];
    current?: DataMovie;
    page?:number;

};
export type MovieStateSecond = {
    likes?:DataMovie[];
    dislikes?:DataMovie[];
};
export type MoviesState = {
    loading:boolean;
} & MovieStateSecond & MoviesStateFirst & MoviesStateError;

export type MoviesStateError = {
    error?: boolean|string;
};
export interface ActionResponseMovie {
    type:string;
    payload: MoviesStateFirst & MovieStateSecond & MoviesStateError;
};

//types
export const TYPES = {
    REQUEST_GENERATE: 'movies/REQUEST_GENERATE',
    REQUEST_GENERATE_SUCCESS: 'movies/REQUEST_GENERATE_SUCCESS',
    REQUEST_LIKE : 'movies/REQUEST_LIKE',
    REQUEST_LIKE_SUCCESS : 'movies/REQUEST_LIKE_SUCCESS',
    REQUEST_DISLIKE : 'movies/REQUEST_DISLIKE',
    REQUEST_DISLIKE_SUCCESS : 'movies/REQUEST_DISLIKE_SUCCESS',
    REQUEST_SKIP: 'movies/REQUEST_SKIP',
    REQUEST_SKIP_SUCCESS: 'movies/REQUEST_SKIP_SUCCESS',
    SUCCESS:  'movies/SUCCESS',
    FAILURE:  'movies/FAILURE',
    INCREASE_PAGE: 'movies/INCREASE_PAGE',
};



//actions
export const actions:MoviesActions = {
    likeMovie(){
        return {
            type: TYPES.REQUEST_LIKE,
            payload:{}
        }
    },
    dislikeMovie(){
        return {
            type: TYPES.REQUEST_DISLIKE,
            payload:{}
        }
    },
    skipMovie(){
        return {
            type: TYPES.REQUEST_SKIP,
            payload:{}
        }
    },
    increasePage(){
        return {
            type: TYPES.INCREASE_PAGE,
            payload:{}
        }
    },
    generateList(){
        return {
            type: TYPES.REQUEST_GENERATE,
            payload:{}
        }
    }
};




//reducer
const INITIAL_STATE:MoviesState = {
    loading: false,
    error: false,
    list: [],
    likes: [],
    dislikes: [],
    page: 0,
    current:undefined,
};

const reducer = (state:MoviesState = INITIAL_STATE, action:ActionResponseMovie):MoviesState => {
        
    switch (action.type) {
        case TYPES.REQUEST_DISLIKE_SUCCESS:
            return {
                ...state,
                error:false,
                loading:false,
                dislikes: action.payload.dislikes,
                current: action.payload.current,
                list: action.payload.list,
            };
        case TYPES.REQUEST_LIKE_SUCCESS:
            return {
                ...state,
                error:false,
                loading:false,
                likes: action.payload.likes,
                current: action.payload.current,
                list: action.payload.list,
            };
        case TYPES.REQUEST_SKIP_SUCCESS:
            return {
                ...state,
                error:false,
                loading:false,
                current: action.payload.current,
                list: action.payload.list,
            };
        case TYPES.REQUEST_GENERATE_SUCCESS:
            return {
                ...state,
                loading:false,
                error:false,
                list: action.payload.list,
                current: action.payload.current,
                page: action.payload.page,
            };
        case TYPES.SUCCESS:
            return {...state,error:false,loading:false};

        case TYPES.REQUEST_DISLIKE:
        case TYPES.REQUEST_LIKE:
        case TYPES.REQUEST_SKIP:
        case TYPES.REQUEST_GENERATE:
            return {
                ...state,
                error:false,
                loading:true,
            };
        
        case TYPES.FAILURE:
            return {
                ...state,
                loading:false,
                error: action.payload.error,
                current: undefined,
            };
        default:
            return state;
    }
};

export default reducer;