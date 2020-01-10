import styled, {keyframes} from 'styled-components';

import * as common from '../../styleds/Common';

import  Nav from '../Navigation';

const maxWidthSidebar:string = '260px';
const leftToRight = keyframes`
    0%{margin-left: -${maxWidthSidebar};}
    100%{margin-left:0;}
`;
const rightToLeft = keyframes`
    0%{margin-left: 0;}
    100%{margin-left: -${maxWidthSidebar};}
`;

type PropsSidebar = {
    duration: number;
};
const Sidebar = styled.aside<PropsSidebar>`
    position:relative;
    z-index:1;
    width:100%;
    max-width:${maxWidthSidebar};
    background-color:${common.colors.grey800};
    padding:15px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    >nav {
        a{
            font-weight:700;
            color:#fff;
            text-decoration:none;
            text-transform: uppercase;
            font-size:18px;
            white-space:nowrap;
            padding:3px 0;
            margin:10px 0;
            display:inline-block;

            &.-active{
                border-bottom: 2px solid ${common.colors.white};
            }
        }
    }

    &.-init{
        animation: ${props=>props.duration||300}ms ${leftToRight} linear;
    }
    &.-out{
        animation: ${props=>props.duration||300}ms ${rightToLeft} linear;
    }

`;
const Navigation = styled(Nav)`
    
`;
const Main = styled.div`
    display:flex;
    height:100vh;  
`;
const Content = styled.div`
    min-width:320px;
    width:100%;
    flex-grow: 1;
`;
const Container = styled.div`
    width: 100%;
    overflow-x:hidden;
    display:flex;
    align-items: stretch;
    flex-direction: column;
    position:relative;
    z-index:1;
`;


export const Styled = {
    Sidebar,
    Navigation,
    Main,
    Content,
    Container,
}