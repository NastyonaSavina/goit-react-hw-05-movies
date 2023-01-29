import {
    
    MovieWrapper,
    MovieImg,
    MovieCard,
    Title,
    Subtitle,
    SubtitleSmall,
    Text
} from './MovieInfo.styled';




export const MovieInfo = ({ dataMovie }) => {
 
 const { title, release_date, poster_path, genres, overview,vote_average } = dataMovie;
    const  imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
    const  realeseYear = release_date.slice(0, 4);
    
    const dataGenres =
    genres.length > 0
      ? genres.map(({ name }) => name).join(', ')
            : 'No information';
    
    const userScore = `${(vote_average * 10).toFixed(0)}%`;

  return (
      <>
            <MovieWrapper>
                <MovieImg alt={title} src={imageUrl} />
                                    
                <MovieCard>
                    <Title>{title}({realeseYear})</Title>
                    <Text>User Score: {userScore}</Text>
                    <Subtitle>Overview</Subtitle>
                    <Text>{overview}</Text>
                    <SubtitleSmall>Genres</SubtitleSmall>
                    <Text>{dataGenres}</Text>


                </MovieCard>
            </MovieWrapper>
      </>
     
  );
};