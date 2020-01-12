import React from 'react';

import imageCheck from '../../assets/favorite.png';
import imageNoCheck from '../../assets/favorite_.png';

import {Styled} from './styled';

type PropsRating = {
    limitRating?:number;
    rating:number;
    onlyCheck?:boolean;
};
type ListRating = {
    image:string;
    alt:string;
};
const Rating = ({rating,limitRating, onlyCheck}:PropsRating) => {

    const limit = limitRating || 5;

    const listRating = (rating:number, limit:number, onlyCheck?:boolean): ListRating[] =>{
        let list:ListRating[] = [];
        for(let i=0; limit>i;i++){
            if(rating) {
                list.push({
                    image: imageCheck,
                    alt: '*'
                });
                rating--;    
            }else !onlyCheck && list.push({
                image: imageNoCheck,
                alt: ''
            });
        }
        return list;
    };


    return(
        <>
            {
                listRating(rating,limit, onlyCheck).map((item,i) => <Styled.Image src={item.image} alt={item.alt} key={i}/>)
            }
        </>
    );
}


export default Rating;