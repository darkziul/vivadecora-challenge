import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {Reducers} from '../../store/reducers';
import {actions} from '../../store/navigation';

import {NavigatonState, NavigationActions} from '../../store/navigation';



export interface Collection{
    collection: NavigatonState;
    dispatch?: Dispatch;
};
export interface Actions{
    actions: NavigationActions;
};

export type CollectionAndActions =  Collection & Actions;

const Navigation:React.FC<CollectionAndActions> = ({
    collection,
    actions,
    dispatch,
    children,
    ...rest
}) => {
    const {data}  = collection;
    const {offSidebar} = actions;
    
    return(
        <nav>
              <ul {...rest}>
                {
                    data.map((item,index)=>{
                        return(
                            <li key={index}>
                                <NavLink
                                    exact
                                    to={item.url} activeClassName='-active'
                                    onClick={()=>offSidebar()}
                                    >{item.title}</NavLink>
                            </li>
                        )   
                    })
                }
            </ul>
        </nav>
    )
};

const mapStateToProps  = (state:Reducers):Collection => ({
    collection: state.navigation
});
const mapDispatchToProps = (dispatch:Dispatch):Actions => ({actions: bindActionCreators({...actions}, dispatch)});
export default  connect(mapStateToProps,mapDispatchToProps)(Navigation);