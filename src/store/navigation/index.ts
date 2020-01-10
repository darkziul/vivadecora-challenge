import {Action} from '../rootTypes';

/**
 *  Duck Pattern  (modificado)
 */

//@types
export type NavigationActions = {
    onSidebar():Action;
    offSidebar():Action;
    toggleSidebar():Action;
};
export type NavigationItem = {
    title:string;
    url:string;
};
export type NavigatonState = {
    data:NavigationItem[];
    visibleSidebar:boolean;
};

 //types action
export const TYPES = {
    ACTIVATE_SIDEBAR: 'navigation/ACTIVATE_SIDEBAR',
    DISABLE_SIDEBAR: 'navigation/DISABLE_SIDEBAR',
    TOGGLE_ACTIVATE_SIDEBAR: 'navigation/TOGGLE_ACTIVATE_SIDEBAR',
};

//actions
export const actions:NavigationActions = {
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
const INITIAL_STATE:NavigatonState  = {
    visibleSidebar:false,
    data: [
        {title:'Filmes não curados', url:'/'},
        {title:'Filmes curtidos', url:'/curtidos'},
        {title:'Filmes não curtidos', url:'/nao-curtidos'},
    ]
}
const reducer = (state:NavigatonState = INITIAL_STATE, action:Action):NavigatonState => {
        
        switch (action.type) {
            case TYPES.ACTIVATE_SIDEBAR:
                return {...state, visibleSidebar: true};
            case TYPES.DISABLE_SIDEBAR:
                return {...state, visibleSidebar: false};
            case TYPES.TOGGLE_ACTIVATE_SIDEBAR:
                let {visibleSidebar} = state;
                visibleSidebar = !visibleSidebar;
                return {...state, visibleSidebar};
            default:
                return state;
        }
};

export default reducer;