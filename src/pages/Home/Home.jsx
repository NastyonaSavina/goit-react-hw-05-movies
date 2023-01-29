import { getMovieTrending } from '../../servises/FetchMovies';

import { useState, useEffect } from 'react';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { Title } from './Home.styled';





const Home= () =>  {

    const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieTrending().then(data => {
      setMovies(data.results);
    });
  }, []);
  

    return (
      <>
        <Title> Tranding today:</Title>
          {movies.length !== 0 && (
            <MoviesList movies={movies} />
          )}
      </>
    );
};

export default Home;