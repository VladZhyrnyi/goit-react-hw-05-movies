import { Link, useLocation } from 'react-router-dom';
import { MovieCard } from 'components/MovieCard';
import styled from 'styled-components';

const List = styled.ul`
  margin: auto;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const MovieList = ({ movies }) => {
  const location = useLocation()
  return (
    <List>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{from: location}}>
              <MovieCard movie={movie} />
            </Link>
          </li>
        );
      })}
    </List>
  );
};
