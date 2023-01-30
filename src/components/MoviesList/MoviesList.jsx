import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';


import {
    List,
    MovieItem,
    MovieLink,
    MovieName
} from './MovieList.styled';


export function MoviesList({ movies }) {
    const location = useLocation();
  
    return (
        <>
            <List>
                {movies.map(movie => [
                    <MovieItem key={movie.id}>
                        <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
                            <MovieName>{ movie.title}</MovieName>
                        </MovieLink>
       
                    </MovieItem> 
                ])}
                
            </List>
            
            
        </>
        
        )
}
    

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};