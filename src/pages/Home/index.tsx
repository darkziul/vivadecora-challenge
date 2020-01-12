import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { actions } from '../../store/movies';
import { CollectionAndActions, Collection, Actions } from '../rootMoviesTypes';
import { Reducers } from '../../store/reducers';
import {DataMovie} from '../../store/movies/rootResponseTypes';

import { ButtonLike, ButtonDislike, ButtonSkip } from '../../components/Button';
import Card, { CardFake } from '../../components/Card';
import Modal from '../../components/Modal';
import { Styled } from './styled';

const Home: React.FC<CollectionAndActions> = ({
    actions,
    collection,
}) => {
    const { current, error, loading, list } = collection;
    const [dataModal, setDataModal] = useState<DataMovie|undefined>();
    
    useMemo(() => {
        if (!list?.length) actions.generateList();
    }, [actions,list]);



    return (
        <>
            {dataModal && <Modal closed={()=>setDataModal(undefined)} data={dataModal}/>}
            <Styled.Container backgroundImage={current && current.picturesBackground}>
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
                            clicked={(e) => {
                                setDataModal(current);
                            }}
                        />
                    }
                    {loading && <CardFake />}

                    <Styled.Action>
                        <ButtonDislike onClick={() => actions.dislikeMovie()}>Não curti!</ButtonDislike>
                        <ButtonSkip onClick={() => actions.skipMovie()}>Pular</ButtonSkip>
                        <ButtonLike onClick={() => actions.likeMovie()}>Curti!</ButtonLike>
                    </Styled.Action>
                </Styled.Content>
            </Styled.Container>
        </>
    );
    
};

const mapStateToProps = (state: Reducers): Collection => ({ collection: state.movies });
const mapDispatchToProps = (dispatch: Dispatch): Actions => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(Home);