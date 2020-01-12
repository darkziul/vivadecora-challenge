import React from 'react';

import ImageLike  from '../../assets/curti.png';
import ImageDislike  from '../../assets/n-curti.png';

import {Styled} from './styled';

const Button:React.FC<React.BaseHTMLAttributes<any>> = ({children, ...rest}) => <Styled.Button {...rest}>{children}</Styled.Button>;


export const ButtonLike:React.FC<React.BaseHTMLAttributes<any>> = ({children, ...rest}) => {
    return(
        <Styled.Button {...rest}>
            <Styled.IconImage src={ImageLike}/>
            <Styled.Text>{children}</Styled.Text>
        </Styled.Button>
    );
};

export const ButtonDislike:React.FC<React.BaseHTMLAttributes<any>> = ({children, ...rest}) => {
    return(
        <Styled.Button {...rest}>
            <Styled.IconImage src={ImageDislike}/>
            <Styled.Text>{children}</Styled.Text>
        </Styled.Button>
    );
};

export const ButtonSkip:React.FC<React.BaseHTMLAttributes<any>> = ({children, ...rest}) => {
    return(
        <Styled.Button {...rest}>
            <Styled.Text>{children}</Styled.Text>
        </Styled.Button>
    );
};

export default Button;