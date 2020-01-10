import React from 'react';

import {connect} from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {Reducers} from '../../store/reducers';
import {actions} from '../../store/navigation';

import {CollectionAndActions, Collection, Actions} from '../Navigation';

import {Styled} from './styled';

import logotipo from '../../assets/logo-viva-decora.png';

const Header:React.FC<CollectionAndActions&React.BaseHTMLAttributes<any>> = ({collection,actions, ...rest}) => {
    const  {visibleSidebar} = collection;
    const {toggleSidebar} = actions;

    return(
        <Styled.Header {...rest}>
            <Styled.ButtonActiveSidebar onClick={()=>toggleSidebar()}>
                <img src='./assets/menu-lateral.png' alt='='/>
            </Styled.ButtonActiveSidebar>
            <Styled.LogotipoContainer exact to='/'>
                <Styled.Logotipo src={logotipo} alt='Viva Decora' />
            </Styled.LogotipoContainer>
            {!visibleSidebar && <Styled.Navigation/>}
        </Styled.Header>
    );
};

const mapStateToProps  = (state:Reducers):Collection => ({collection: state.navigation});
const mapDispatchToProps = (dispatch:Dispatch):Actions => ({actions: bindActionCreators({...actions}, dispatch)});
export default  connect(mapStateToProps, mapDispatchToProps)(Header);