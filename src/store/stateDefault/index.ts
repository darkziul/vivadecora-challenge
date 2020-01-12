import {Action} from '../rootTypes';
import {DataMovie} from '../movies/rootResponseTypes';

/**
 *  Duck Pattern  (modificado)
 */

//@types
export type StateDefaultItem = {
    title:string;
    url:string;
    name:string;
};
export type StateDefault = {
    navigation:StateDefaultItem[];
    visibleSidebar:boolean;
};

 //types action
export const TYPES = {
    ACTIVATE_SIDEBAR: 'navigation/ACTIVATE_SIDEBAR',
    DISABLE_SIDEBAR: 'navigation/DISABLE_SIDEBAR',
    TOGGLE_ACTIVATE_SIDEBAR: 'navigation/TOGGLE_ACTIVATE_SIDEBAR',
    SET_MODAL_DATA: 'navigation/SET_MODAL_DATA',
};

export type StateDefaultActions = {
    onSidebar():Action;
    offSidebar():Action;
    toggleSidebar():Action;
};

//actions
export const actions:StateDefaultActions = {
    onSidebar(){
        return {
            type: TYPES.ACTIVATE_SIDEBAR,
            payload:{},
        }
    },
    offSidebar(){
        return {
            type: TYPES.DISABLE_SIDEBAR,
            payload:{},
        }
    },
    toggleSidebar(){
        return {
            type: TYPES.TOGGLE_ACTIVATE_SIDEBAR,
            payload:{},
        }
    }
}

// //reducer
const INITIAL_STATE:StateDefault  = {
    visibleSidebar:false,
    navigation: [
        {title:'Filmes não curados', url:'/',name:'home'},
        {title:'Filmes curtidos', url:'/curtidos',name:'like'},
        {title:'Filmes não curtidos', url:'/nao-curtidos',name:'dislike'},
    ]
}
const reducer = (state:StateDefault = INITIAL_STATE, action:Action):StateDefault => {
        
        switch (action.type) {
            case TYPES.ACTIVATE_SIDEBAR:
                return {...state, visibleSidebar: true};
            case TYPES.DISABLE_SIDEBAR:
                return {...state, visibleSidebar: false};
            case TYPES.TOGGLE_ACTIVATE_SIDEBAR:
                return {...state, visibleSidebar:!state.visibleSidebar};
            default:
                return state;
        }
};

export default reducer;