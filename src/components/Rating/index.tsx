import React from 'react';

import {Styled} from './styled';

import imageCheck from '../../assets/favorite.png';
import imageNoCheck from '../../assets/favorite_.png';

type PropsRating = {
    limitRating?:number;
    rating:number;
};
type ListRating = {
    image:string;
    alt:string;
};
const Rating = ({rating,limitRating}:PropsRating) => {

    const limit = limitRating || 5;
    const listRating = (rating:number, limit:number): ListRating[] =>{
        let list:ListRating[] = [];
        for(let i=0; limit>i;i++){
            if(rating) {
                list.push({
                    image: imageCheck,
                    alt: '*'
                });
                rating--;    
            }else list.push({
                image: imageNoCheck,
                alt: ''
            });
        }
        return list;
    };


    return(
        <>
            {
                listRating(rating,limit).map((item,i) => <Styled.Image src={item.image} alt={item.alt} key={i}/>)
            }
        </>
    );
}


export default Rating;