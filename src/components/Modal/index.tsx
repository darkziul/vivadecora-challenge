import React, {useEffect} from 'react';

import {Modal as ModalT} from '../rootStateDefaultTypes';
import Rating from '../Rating';

import { Styled } from './styled';



const Modal: React.FC<ModalT> = ({data,closed}) => {

    useEffect(()=>{
        const body = window.document.body;
        body.style.overflow = 'hidden';

        return () => {
            body.style.overflow = '';
        };
        
    });

    return (
        <Styled.Container>
            <Styled.Content>
                <Styled.Picture src={data.picturesPoster}/>

                <Styled.Title>{data?.title}</Styled.Title>
                <Styled.Subtitle>{`${data.releaseYear} · ${data.genre} · ${data.runtime}`} </Styled.Subtitle>

                <Styled.VotesImageGroup>
                    <Rating rating={data.votesAverage} onlyCheck={true} />
                </Styled.VotesImageGroup>
                <Styled.VotesText>({data.votes} avaliaç{data.votes > 1 ? 'ões':'ão'})</Styled.VotesText>

                <Styled.Description>
                    {data.description}
                </Styled.Description>

                <Styled.Button onClick={()=>closed()}>✖</Styled.Button>
            </Styled.Content>
            <Styled.CloseArea onClick={()=>closed()} />
        </Styled.Container>
    );
}
export default Modal;