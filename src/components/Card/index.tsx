import React, {useState, useMemo} from 'react';

import Rating from '../Rating';
import {wordEllipsis, reachedMaxWords} from '../../utils/ellipsis';

import { Styled } from './styled';
import styled from 'styled-components';

type PropsCard = {
    title:string;
    subtitle:string;
    description:string;
    descriptionMaxCharacters?:number;
    descriptionMaxWords?:number;
    backgroundImage:string|undefined;
    votesAverage:number;
    votes:number;
    clicked(arg?:any):any;
};

const Card:React.FC<PropsCard&React.BaseHTMLAttributes<any>> = ({
    backgroundImage,
    votesAverage,
    votes,
    title,
    subtitle,
    description,
    descriptionMaxCharacters,
    descriptionMaxWords,
    clicked,
    children,
    ...rest
}) => {
    const [maxWords, setMaxWords] = useState(descriptionMaxWords || 22);
    
    useMemo(()=>{
        if(window.innerWidth < 1024) setMaxWords(8);
    }, []);

    return(
        <Styled.Container backgroundImage={backgroundImage} {...rest}>
            <Styled.ButtonClickMask onClick={()=>clicked()}/>
            <Styled.Content>
                <Styled.TitleGroup>
                    <Styled.Title>
                        {title}
                        <Styled.Subtitle>{subtitle}</Styled.Subtitle>
                    </Styled.Title>
                    <Styled.VotesGroup>
                        <Styled.VotesImageGroup>
                            <Rating rating={votesAverage}/>
                        </Styled.VotesImageGroup>
                        <Styled.VotesText>
                            ({votes} avaliaç{votes > 1 ? 'ões':'ão'})</Styled.VotesText>
                    </Styled.VotesGroup>
                </Styled.TitleGroup>
                
                {
                    description &&
                    <Styled.DescriptionButton onClick={()=>clicked()}>
                        {wordEllipsis(description, maxWords)}
                        {
                            reachedMaxWords(description, maxWords) 
                            &&
                            <strong>Ver sinopse.</strong>
                        }
                    </Styled.DescriptionButton>
                }
            </Styled.Content>
        </Styled.Container>
    );
};

export const CardFake = () => <Styled.ContainerFake></Styled.ContainerFake>;


export default Card;