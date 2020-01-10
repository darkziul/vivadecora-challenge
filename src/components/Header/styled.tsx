import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import * as common from '../../styleds/Common';

import Nav from '../Navigation';

const Header = styled.header`
    background-color:${common.colors.red900};
    display:flex;
    align-items:center;
    justify-content:space-between;
    
    min-width:320px;
    padding:20px;

    ${common.media.medium`
        flex-direction: column;
        padding:30px 20px;
    `};

`;
const Logotipo = styled.img`
    min-height:34px;
    max-width:156px;

    ${common.media.medium`
        margin-bottom:30px;
    `};
`;
const LogotipoContainer = styled(NavLink)`

`;
const Navigation  = styled(Nav)`
    display:none;

    li{
        display:block;
        &+li{
            margin-left:40px;
        }
    }
    a{
        color:${common.colors.white};
        text-decoration:none;
        text-transform: uppercase;
        font-size:14px;
        padding: 5px 0;

        &.-active {
            border-bottom:2px solid;
        }
    }

    ${common.media.medium`
        display:flex;
    `};
    

`;

const ButtonActiveSidebar = styled.button`
    background:transparent;
    position:relative;
    padding:10px;
    margin-left:-10px;

    ${common.media.medium`
        display:none;
    `};

`;


export const Styled = {
    Header,
    Logotipo,
    LogotipoContainer,
    Navigation,
    ButtonActiveSidebar,
};