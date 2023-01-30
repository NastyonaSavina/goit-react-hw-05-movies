import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';


import { getMovieByQuery } from '../../servises/FetchMovies';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import Notiflix from 'notiflix';


const SearchMoviePage = () => {
    
 const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query' ?? '');
  

  useEffect(() => {

      if (query === null) {
      return Notiflix.Notify.info('Enter movie name');
    } else {
      getMovieByQuery(query).then((data) => {
        setMovies(data.results);
        });
    }
    
    
  }, [query]);

    const updateQueryString = movieName => {
      setSearchParams(movieName !== '' ? { query: movieName } : {});
     
    };


    return (
    <>
    <Searchbar onSubmit={updateQueryString} />

        
    {movies.length > 0 && (
            <MoviesList movies={movies} />
          )}      
       
    </>     
    
  );

}

export default SearchMoviePage;