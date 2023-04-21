import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { toast } from 'react-hot-toast';

import { getMovieDetails } from 'utils/api-service';
import { Container } from 'components/Container';

import {
  MovieDetailsWrapper,
  Info,
  Title,
  SubTitle,
  StyledLink,
  BackLink,
  MovieImageWrapper,
  MovieInfoWrapper,
  Rate,
  AdditionalInfoWrapper,
} from './MoviePage.styled';


const MoviePage = () => {
  const location = useLocation();

  const backLinkRef = useRef(location.state?.from ?? '/movies');

  const { movieId } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);

        setMovie(data);
      } catch (error) {
        toast.error(error);
      }
    };
    getDetails();
  }, [movieId]);

  return (
    <Container>
      <MovieDetailsWrapper>
        <BackLink to={backLinkRef.current}>Go back</BackLink>
        <MovieImageWrapper>
          <img
            width="320px"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </MovieImageWrapper>
        <MovieInfoWrapper>
          <Title>{movie.title}</Title>
          <Rate>User score: {movie.vote_average}</Rate>
          <SubTitle>Overview</SubTitle>
          <Info>{movie.overview}</Info>
          <SubTitle>Genres</SubTitle>
          <Info> {movie.genres?.map(genre => genre.name).join(', ')}</Info>
        </MovieInfoWrapper>
      </MovieDetailsWrapper>
      <SubTitle>Additional Info</SubTitle>
      <AdditionalInfoWrapper>
        <StyledLink to="cast"> Cast </StyledLink>
        <StyledLink to="reviews"> Reviews </StyledLink>
      </AdditionalInfoWrapper>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};


export default MoviePage;