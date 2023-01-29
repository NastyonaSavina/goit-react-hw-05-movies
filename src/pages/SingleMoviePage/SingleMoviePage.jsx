import { useLocation, useParams,Outlet } from "react-router-dom";
import { useState,useEffect } from "react";

import { getSingleMovieDetails } from '../../servises/FetchMovies';
import { MovieInfo } from '../../components/SingleMovieDetails/MovieInfo';

import {
    LinkBack,
    IconArrow,
  } from './SingleMoviePage.styled';


const SingleMoviePage = () => {
    const { movieId } = useParams();
    const location = useLocation();

    const [dataMovie, setDataMovie] = useState(null);


    useEffect(() => {
        getSingleMovieDetails(movieId).then( movieData  => 
        setDataMovie(movieData)
        );
        console.log(dataMovie);
    }, []);


  
    return (
        <>
            <LinkBack to={location.state?.from ?? ''} >
                <IconArrow />
                Back
            </LinkBack>

            {dataMovie && <MovieInfo dataMovie={dataMovie} />}

           
            <Outlet /> 

        </>
    )
}

export default SingleMoviePage;