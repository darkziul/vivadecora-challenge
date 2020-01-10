import styled from 'styled-components';

import PageContainer from '../../components/PageContainer';

import * as common from '../../styleds/Common';

import {Styled as StyledHeader} from '../../components/Header/styled';
import {Styled as StyledCard} from '../../components/Card/styled';
const Action = styled.div`
    display:flex;
    
`;

type PropsContainer = {
    backgroundImage?:string;
};
const Container = styled(PageContainer)<PropsContainer>`
    background: linear-gradient(0deg, ${common.colors.red900} 0%, ${common.colors.red600} 100%);
    &:before{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        content:'';
        background-image: ${({backgroundImage}) => backgroundImage?`url(${backgroundImage})`: `transparent`};
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        opacity:.2;
    }
    ${StyledHeader.Header} {
        background-color:transparent;    
    }

    ${StyledCard.Container}, ${StyledCard.ContainerFake}{
        margin-bottom: 20px;
        ${common.media.medium`
            margin-bottom: 40px;
        `}
    }

`;

const Content = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    height:100%;
    padding: 20px 0;
    ${common.media.medium`
        padding: 40px 0;
    `}
`;

export const Styled = {
    Container,
    Action,
    Content,
}