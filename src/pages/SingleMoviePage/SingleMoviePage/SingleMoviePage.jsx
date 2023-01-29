import { useLocation, useParams,Outlet } from "react-router-dom";
import { useState,useEffect,Suspense } from "react";

import { getSingleMovieDetails } from '../../../servises/FetchMovies';
import { MovieInfo } from '../../../components/MovieInfo/MovieInfo';

import {
    LinkBack,
    IconArrow,
    DetailLink,
    DetailWrapper
  } from './SingleMoviePage.styled';


const SingleMoviePage = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const BackLinkHref = location.state?.from ?? '/';


    const [dataMovie, setDataMovie] = useState(null);


    useEffect(() => {
        getSingleMovieDetails(movieId).then( movieData  => 
        setDataMovie(movieData)
        );
    }, [movieId]);

      
    return (
        <>
            <LinkBack to={BackLinkHref} >
                <IconArrow />
                Back
            </LinkBack>

            {dataMovie && <MovieInfo dataMovie={dataMovie} />}
            <DetailWrapper>
                    <p>Additional info:</p>
                    <ul>
                    <li>
                        <DetailLink  to="cast" state={{ from: BackLinkHref }}>
                        Cast
                        </DetailLink >
                    </li>
                    <li>
                        <DetailLink  to="reviews" state={{ from: BackLinkHref }}>
                        Reviews
                        </DetailLink >
                    </li>
                    </ul>
                </DetailWrapper>
                
             <Suspense fallback={<p>Loading inside Movie ...</p>}>
                <Outlet />
            </Suspense>
          
            

           
       

        </>
    )
}

export default SingleMoviePage;