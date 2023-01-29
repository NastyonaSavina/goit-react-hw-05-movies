import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

import { getCastMovie } from '../../../servises/FetchMovies';

import {
    ActorItem,
    ActorImg,
    Text,
    List
}
    from './CastPage.styled';


export default function CastPage() {

    const { movieId } = useParams();
    const [castMovie, setCastMovie] = useState(null);


    useEffect(() => {
        getCastMovie(movieId).then( ({cast} ) => 
        setCastMovie(cast)
        );
    }, [movieId]);

  
    return (
        <>
            <List>
                {castMovie && castMovie.map(cast => [
                    <ActorItem key={cast.id}>
                        {cast.profile_path
                            ? <ActorImg alt={cast.original_name} src={`https://image.tmdb.org/t/p/original${cast.profile_path}`} />
                            : <Text>No image</Text>}
                        <Text>Actor: {cast.original_name}</Text>
                        <Text>Character: {cast.character}</Text>


                    </ActorItem>
                ])}
                
            </List>
            
            
        </>
        
        )
    }