import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { CollectionAndActionsBaseHTML, Collection, Actions } from '../rootStateDefaultTypes';
import { Reducers } from '../../store/reducers';
import { actions } from '../../store/stateDefault';


import logotipoImage from '../../assets/logo-viva-decora.png';
import menuLateralImage from '../../assets/menu-lateral.png';

import { Styled } from './styled';

const Header: React.FC<CollectionAndActionsBaseHTML> = ({ collection, actions, ...rest }) => {
    const { visibleSidebar } = collection;
    const { toggleSidebar } = actions;

    return (
        <Styled.Header {...rest}>
            <Styled.ButtonActiveSidebar onClick={() => toggleSidebar()}>
                <img src={menuLateralImage} alt='=' />
            </Styled.ButtonActiveSidebar>
            <Styled.LogotipoContainer exact to='/'>
                <Styled.Logotipo src={logotipoImage} alt='Viva Decora' />
            </Styled.LogotipoContainer>
            {!visibleSidebar && <Styled.Navigation />}
        </Styled.Header>
    );
};

const mapStateToProps = (state: Reducers): Collection => ({ collection: state.stateDefault });
const mapDispatchToProps = (dispatch: Dispatch): Actions => ({ actions: bindActionCreators({ ...actions }, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(Header);