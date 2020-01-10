import styled from 'styled-components';

import * as common from '../../styleds/Common';

import {Styled as StyledCard} from '../../components/Card/styled';
import PageContainer from '../../components/PageContainer';

const Container = styled(PageContainer)`

`;
const Content = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    max-width:1002px;
    margin:0 auto;
    padding: 30px 0;
    
`;
const CardsGroup = styled.div`
    display:flex;
    flex-wrap: wrap;
    position:relative;
    justify-content:center;
    margin: 0 -5px;

    ${common.media.medium`
        flex-grow: 1;
    `};

    ${StyledCard.Container} {
        margin: 0 5px 10px;
        &:hover {
            position:relative;
            top:-2px;
            box-shadow: 0 2px 4px rgba(0,0,0,.3);
            transition: all .2s linear;
        }
        ${common.media.medium`
            margin: 0 15px 30px;
        `};    
    }

    
`;
const Title = styled.h2`
    font-size:22px;
    font-weight:900;
    text-transform: uppercase;
    color:${common.colors.grey800};
    flex-grow: 1;
    margin:0 10px 20px;
    ${common.media.medium`
        font-size:26px;
        margin: 0 0 30px;
    `};
`;

const NotFoundContainer = styled.div`
    height:100%;
    flex-grow: 1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    margin-top:40px;
    ${common.media.medium`
        margin-top:0;
    `}
`;

const NotFoundImage = styled.img`
    width:100%;
    max-width: 168px;
    ${common.media.medium`
        max-width: 267px;
    `};
`;
const NotFoundText = styled.span`
    font-size:18px;
    font-weight:900;
    color:${common.colors.grey800};
    text-transform: uppercase;
    margin:20px 0;
    
    ${common.media.medium`
        font-size:22px;
    `};
`;

export const Styled = {
    Container,
    Content,
    Title,
    CardsGroup,
    NotFoundContainer,
    NotFoundImage,
    NotFoundText,
};