import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Reducers } from '../../store/reducers';
import { actions } from '../../store/stateDefault';

import { Collection, Actions } from '../rootStateDefaultTypes';

export type CollectionAndActions = Collection & Actions;

const Navigation: React.FC<CollectionAndActions> = ({
    collection,
    actions,
    dispatch,
    children,
    ...rest
}) => {
    const { navigation } = collection;
    const { offSidebar } = actions;

    return (
        <nav>
            <ul {...rest}>
                {
                    navigation.map(item => {
                        return (
                            <li key={item.name}>
                                <NavLink
                                    exact
                                    to={item.url} activeClassName='-active'
                                    onClick={() => offSidebar()}
                                >{item.title}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
};

const mapStateToProps = (state: Reducers): Collection => ({
    collection: state.stateDefault
});
const mapDispatchToProps = (dispatch: Dispatch): Actions => ({ actions: bindActionCreators({ ...actions }, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);