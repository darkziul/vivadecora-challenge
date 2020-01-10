import styled from 'styled-components';

import * as common from '../../styleds/Common';

const Image = styled.img`
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
`;



export const Styled = {
    Image
};