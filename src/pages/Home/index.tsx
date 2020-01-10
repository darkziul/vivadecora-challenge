import React, { useMemo } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {actions} from '../../store/movies';
import {CollectionAndActions, Collection,Actions} from '../rootMoviesTypes';
import {Reducers} from '../../store/reducers';

import {Styled} from './styled';

import {ButtonLike, ButtonDislike, ButtonSkip} from '../../components/Button';
import Card, {CardFake} from '../../components/Card';

const Home:React.FC<CollectionAndActions> = (props) => {
    const {actions} = props;
    const {current, error, loading, list} = props.collection;

    useMemo(()=>{
        if(!list?.length) actions.generateList();
    },[]);

    return(
        <Styled.Container backgroundImage={current&&current.picturesBackground}>
            <Styled.Content>
                {
                    !loading &&
                    !error &&
                    current &&
                    <Card 
                        title={current.title}
                        subtitle={`${current.releaseYear} · ${current.genre} · ${current.runtime}`}
                        description={current.description}
                        backgroundImage={current.picturesBackground}
                        votesAverage={current.votesAverage}
                        votes={current.votes}
                        clicked={()=>true}
                    />
                }
                {loading &&<CardFake/>}

                <Styled.Action>
                    <ButtonDislike onClick={()=> actions.dislikeMovie()}>Não curti!</ButtonDislike>
                    <ButtonSkip onClick={()=> actions.skipMovie()}>Pular</ButtonSkip>
                    <ButtonLike onClick={()=> actions.likeMovie()}>Curti!</ButtonLike>
                </Styled.Action>
            </Styled.Content>
        </Styled.Container>
    );
};

const mapStateToProps = (state:Reducers):Collection => ({collection: state.movies});
const mapDispatchToProps = (dispatch:Dispatch):Actions => ({actions: bindActionCreators(actions, dispatch)});
export default connect(mapStateToProps,mapDispatchToProps)(Home);