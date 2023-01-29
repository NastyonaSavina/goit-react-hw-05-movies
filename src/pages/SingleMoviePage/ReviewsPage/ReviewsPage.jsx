import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

import { getMovieReviews } from '../../../servises/FetchMovies';

import {
    ReviewItem,
    Subtitle,
    Text,
    List
}
    from './ReviewsPage.styled';


export default function ReviewsPage() {

    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState('');


    useEffect(() => {
        getMovieReviews(movieId).then(({ results }) => 
        setMovieReviews(results)
        )
        
    }, [movieId]);

    return (
        <>
            <List>
           
            {movieReviews.length !== 0 
                ? movieReviews.map(review => [
                    
                        <ReviewItem key={review.id}>
                            <Subtitle>{review.author}</Subtitle>
                            <Text>{ review.content}</Text>
                        </ReviewItem>
                   
                    ])
                    
                
                : (<Text>We don`t have any reviews for this movie</Text>)
                }
            </List>
        </>
        
        )
    }