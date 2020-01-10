import styled from 'styled-components';

import * as common from '../../styleds/Common';

type PropsButtonStyled = {
    color?:string;
};
const Button = styled.button<PropsButtonStyled>`
    background: ${common.colors.white};
    height: 60px;
    padding: 0 24px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 60px;
    border:0;
    outline:0;
    ${common.boxShadow.a};
    & + button {
        margin-left:10px;
        ${common.media.medium`
            margin-left:20px;
        `};
    }
    cursor:pointer;
    &:active{
        position:relative;
        transform: translateY(1px);
    }


`;

const IconImage = styled.img`
    max-width: 26px;
`;

const Text = styled.span`
    margin-left:10px;
    text-transform: uppercase;
    font-weight:700;
    ${IconImage} ~ &  {
        display:none;
        ${common.media.medium`
            display:inline-block;
        `}
    }
`;


export const Styled = {
    Button,
    IconImage,
    Text,
}