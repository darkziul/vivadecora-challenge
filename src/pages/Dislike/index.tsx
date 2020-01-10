import React from 'react';
import {connect} from 'react-redux';

import {Collection} from '../rootMoviesTypes';
import {Reducers} from '../../store/reducers';

import LikeOrDislike from '../LikeOrDislike';

const Like:React.FC<Collection> = (props) => {
    const {dislikes} = props.collection;
    return(
        <LikeOrDislike title='Filmes não curtidos' data={dislikes}/>
    );
};

const mapStateToProps = (state:Reducers):Collection => ({collection: state.movies});
export default connect(mapStateToProps)(Like);