import React from 'react';

import { DataMovie } from '../../store/movies/rootResponseTypes';

import { Styled } from './styled';

import Card from '../../components/Card';

import imageVideo from '../../assets/video-camera-vazio.png';

type PropsLikeOrDislikeData = {
    data?: DataMovie[];
};
type PropsLikeOrDislike = PropsLikeOrDislikeData & {
    title: string;
};

const NotHasMovie = () => {
    return (
        <Styled.NotFoundContainer>
            <Styled.NotFoundImage src={imageVideo} alt='Sem filmes' />
            <Styled.NotFoundText>
                Nenhum Filme
            </Styled.NotFoundText>
        </Styled.NotFoundContainer>
    );
};
const Cards: React.FC<PropsLikeOrDislikeData> = ({ data }) => {
    return (
        <Styled.CardsGroup>
            {
                data && data.map((item, index) => <Card
                    key={index}
                    title={item.title}
                    subtitle={`${item.releaseYear} · ${item.genre} · ${item.runtime}`}
                    description={item.description}
                    backgroundImage={item.picturesBackground}
                    votesAverage={item.votesAverage}
                    votes={item.votes}
                    clicked={() => true}
                    descriptionMaxWords={8}
                    className='-small'
                />)
            }
        </Styled.CardsGroup>
    );
};
const LikeOrDislike: React.FC<PropsLikeOrDislike> = ({ title, data }) => {

    return (
        <Styled.Container>
            <Styled.Content>
                <Styled.Title>{title}</Styled.Title>
                {
                    data?.length ? <Cards data={data} /> : <NotHasMovie />
                }
            </Styled.Content>
        </Styled.Container>
    );
};

export default LikeOrDislike;