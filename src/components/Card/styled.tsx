import styled, {css,keyframes} from 'styled-components';

import {Styled as StyledRating} from '../Rating/styled';

import * as common from '../../styleds/Common';

type PropsCantainer = {
    backgroundImage?:string;
};

const LeftToRightFadeInOut = keyframes`
    0% {
        transform: translateX(-15px);
        opacity: 0;
    }
    100%{
        transform: translateX(0);
        opacity: 1;
    }

`;

const gradientLeftToRight = keyframes`
    0%{
        background-position: 300% 0%;
    }
    100%{
        background-position: 0% 0%;
    }

`;

const Content = styled.div`
    width:100%;
    padding: 60px 15px 15px 15px;
    text-shadow: 0 1px 3px rgba(0,0,0,.2);
    align-self:flex-end;
    background: linear-gradient(0deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,.2) 80%, rgba(0,0,0,0) 100%);
    ${common.media.medium`
        padding: 90px 30px 30px 30px;
    `};
    
`;

const DescriptionButton = styled.button`
    display:block;
    margin-top:20px;
    font-size:14px;
    line-height:1.3;
    border:0;
    outline:none;
    background:transparent;
    text-align:left;
    color:${common.colors.white};

    >strong {
        font-weight:700;
        margin-left:5px;
        text-decoration: underline;
        white-space:nowrap;
        cursor:pointer;
    }

    ${common.media.medium`
        font-size:16px;
    `}

`;

const VotesGroup = styled.div`
    display:flex;
    
    
    justify-content: space-between;
    align-items: center;
    margin-top:10px;
    ${common.media.medium`
        flex-direction: column;
        align-items:flex-end;
        justify-content: flex-end;
    `};
`;
const VotesText = styled.span`
    font-size:12px;
    ${common.media.medium`
        margin-top:10px;
    `};
`;
const VotesImageGroup = styled.div`
    display:flex;

    ${StyledRating.Image}{
        max-width:16px;
        &+img{
            margin-left:4px;
            ${common.media.medium`
                margin-left:8px;
            `};
        }
        ${common.media.medium`
            max-width:22px;
        `};
    }
`;

const Title = styled.h2`
    padding-right:15px;
    text-transform: uppercase;
    font-size:22px;
    font-weight:700;
    ${common.media.medium`
        font-size:26px;
    `}
`;
const Subtitle = styled.small`
    display:none;
    margin-top:15px;
    font-size:12px;
    line-height:1;
    text-transform: uppercase;
    ${common.media.medium`
        display:block;
    `};
    
`;
const TitleGroup = styled.div`
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    ${common.media.medium`
        flex-direction: row;
    `};
`;

const ButtonClickMask = styled.a`
    
    width:100%;
    height:100%;
    display:block;
    position:absolute;
    left:0;
    top:0;
    z-index:10;
    ${common.media.medium`
        display:none;
    `};
`;

const ContainerDefault = styled.div`
    width:100%;
    min-height:350px;
    max-width:294px;
    position:relative;
    display:flex;
    ${common.media.medium`
        min-height:460px;
        max-width:700px;
        border-radius: 6px;
    `};
`;

const ContainerFake = styled(ContainerDefault)`
    background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.5) 50%, rgba(0,0,0,0) 100%);
    background-size: 300%;
    animation: ${gradientLeftToRight} 3s linear infinite;
    opacity:.5;
`;

const VersionSmall = css`   
    min-height:174px;
    max-width:145px;

    ${common.media.medium`
        min-height:350px;
        max-width:294px;
    `};

    ${TitleGroup}{
        font-size: 16px;
        ${common.media.medium`
            flex-direction: column;
        `};
    }
    ${Subtitle}{
        display:none;
    }
    ${Title}{
        font-size:22px;
    }

    ${VotesImageGroup}{
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
    };

    ${VotesText}{
        margin-top:0;
        display:none;
        ${common.media.medium`
             display:block;
        `};
    }
    ${VotesGroup}{
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
    }
    ${DescriptionButton}{
       display:none;
        ${common.media.medium`
             display:block;
             font-size:14px;
        `};
    }
    ${Content}{
        padding: 30px 15px 15px 15px;
        ${common.media.medium`
            padding: 60px 15px 15px 15px;
        `};
    }
`;

const Container = styled(ContainerDefault)<PropsCantainer>`
    animation: ${LeftToRightFadeInOut} .3s linear;
    background-image: ${({backgroundImage})=>backgroundImage?`url(${backgroundImage})`:'transparent'};
    background-color:${common.colors.grey700};
    background-size:cover;
    background-position: 50%;
    background-repeat: no-repeat;
    border-radius: 4px;
    overflow:hidden;
    color:${common.colors.white};


    &.-small{
        ${VersionSmall};
    };
    
`;

export const Styled = {
    Container,
    Title,
    Subtitle,
    TitleGroup,
    DescriptionButton,
    Content,  
    VotesGroup,
    VotesText,
    VotesImageGroup,
    // Rating,
    ContainerFake,
    ButtonClickMask,
};