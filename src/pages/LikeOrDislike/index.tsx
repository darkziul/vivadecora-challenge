import React, {useState} from 'react';

import { DataMovie } from '../../store/movies/rootResponseTypes';
import imageVideo from '../../assets/video-camera-vazio.png';

import Card from '../../components/Card';
import Modal from '../../components/Modal';

import { Styled } from './styled';

type PropsLikeOrDislikeData = {
    data?: DataMovie[];
};
type PropsLikeOrDislike = PropsLikeOrDislikeData & {
    title: string;
};
type PropOnClicked = {
    onClicked(arg?:any):void;
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
const Cards: React.FC<PropsLikeOrDislikeData&PropOnClicked> = ({ data, onClicked }) => {
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
                    descriptionMaxWords={8}
                    clicked={()=>onClicked(item)}
                    className='-small'
                />)
            }
        </Styled.CardsGroup>
    );
};
const LikeOrDislike: React.FC<PropsLikeOrDislike> = ({ title, data }) => {

    const [dataModal, setDataModal] = useState<DataMovie|undefined>();
    

    return (
        <>
        {dataModal && <Modal closed={()=>setDataModal(undefined)} data={dataModal}/>}
        <Styled.Container>
            <Styled.Content>
                <Styled.Title>{title}</Styled.Title>
                {
                    data?.length ? <Cards data={data} onClicked={(e)=>setDataModal(e)} /> : <NotHasMovie />
                }
            </Styled.Content>
        </Styled.Container>
        </>
    );
};

export default LikeOrDislike;