import styled, { keyframes } from 'styled-components';

import * as common from '../../styleds/Common';

import {Styled as StyledRating} from '../Rating/styled';

const fadeOutIn = keyframes`
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
`;
const BottonToTop = keyframes`
    0%{
        transform: translateY(10px);
    }
    100%{
        transform: translateY(0);
    }
`;

const ContainerDefault = styled.div`
    width:100%;
    height:100%;
    position:fixed;
    left:0;
    top:0;
`;
const Container = styled(ContainerDefault)`
    display:flex;
    align-items:center;
    flex-direction:column;
    padding:40px 0 20px;
    z-index:9999;
    overflow:auto;
`;

const Content = styled.div`
    animation: ${BottonToTop} .2s linear;
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    z-index:1;
    width:100%;
    max-width:300px;
    padding:20px;
    margin:10px;
    border-radius:6px;
    background-color:${common.colors.white};
    color:${common.colors.grey800};
    text-align:center;
    ${common.media.medium`
        max-width:680px;
        margin:30px;
        padding:40px;
    `};

    &:before {
        border-radius: 6px 6px 0 0;
        content:'';
        width:100%;
        height:80px;
        display:block;
        position:absolute;
        top:0;
        left:0;
        background-color:${common.colors.red900};

        ${common.media.medium`
            height:110px;
        `}
    }
`;
const CloseArea = styled(ContainerDefault)`
    z-index:0;
    background-color:${common.colors.grey800};
    background-color:rgba(0,0,0,.6);
    animation: ${fadeOutIn} .3s linear;
`;

type PropsPicture = {
    src?:string;
};
const Picture = styled.img<PropsPicture>`
    position:relative;
    margin-top: 40px;
    border-radius: 3px;
    width: 120px;
    height:180px;
    background-size:cover;
    background-position:50%;
    background-color:${common.colors.grey100};
    background-image: ${({src})=>`url(${src})`||'none'};
`;
const Title = styled.h2`
    font-size: 24px;
    line-height:1.2;
    font-weight:900;
    text-transform:uppercase;
    margin:30px 0 5px;

    ${common.media.medium`
        font-size: 26px;
        margin:20px 0 5px;
    `};
`;
const Subtitle = styled.small`
    font-size: 14px;
    line-height:1.3;
    opacity:.6;
    text-transform:uppercase;

    margin-bottom:10px;
`;
const Description = styled.p`
    font-size:14px;
    line-height:1.3;
    text-align:justify;
    margin-top:20px;

    ${common.media.medium`
        font-size:16px;
    `};
`;

const Button = styled.button`
    position:absolute;
    background-color: ${common.colors.white};
    text-align:center;
    cursor:pointer;
    right: 10px;
    top: -20px;
    width:40px;
    height:40px;
    border-radius:40px;
    font-size: 22px;
    line-height:40px;
    &:hover{
        transform:scale(1.1);
    }

    ${common.media.medium`
            right: -23px;
            top: -23px;
            width:46px;
            height:46px;
            border-radius:46px;
            font-size: 22px;
            line-height:46px;
    `};
`;

const VotesText = styled.span`
    margin-top:3px;
    font-size:12px;
    opacity:.6;
    ${common.media.medium`
        margin-top:10px;
    `};
`;
const VotesImageGroup = styled.div`
    display:flex;

    ${StyledRating.Image}{
        max-width:14px;
        &+img{
            margin-left:2px;
            ${common.media.medium`
                margin-left:4px;
            `};
        }
        ${common.media.medium`
            max-width:16px;
        `};
    }
`;

export const Styled = {
    Container,
    Content,
    CloseArea,
    Picture,
    Button,
    Title,
    Subtitle,
    VotesText,
    VotesImageGroup,
    Description,
};