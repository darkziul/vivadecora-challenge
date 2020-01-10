import React from 'react';
import {connect} from 'react-redux';

import {Collection} from '../rootMoviesTypes';
import {Reducers} from '../../store/reducers';

import LikeOrDislike from '../LikeOrDislike';

const Like:React.FC<Collection> = (props) => {
    const {likes} = props.collection;
    
    return(
        <LikeOrDislike title='Filmes curtidos' data={likes}/>
    );
};

const mapStateToProps = (state:Reducers):Collection => ({collection: state.movies});
export default connect(mapStateToProps)(Like);