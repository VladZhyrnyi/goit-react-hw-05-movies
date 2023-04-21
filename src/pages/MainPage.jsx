import { useState, useEffect } from 'react';

import styled from 'styled-components';

import { MovieList } from 'components/MovieList';
import { getTrendingFilms } from 'utils/api-service';
import { Container } from 'components/Container';


const MainPageTitle = styled.h1`
  padding-left: 25px;
  padding-bottom: 10px;
  margin-bottom: 10px;

  font-size: 24px;
  line-height: 30px;
  font-weight: 400;

  border-bottom: 1px solid;
`;

const MainPage = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      try {
        const data = await getTrendingFilms();
        setTopMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getFilms();
  }, []);

  return (
    <Container>
      <MainPageTitle>Top rated films</MainPageTitle>
      <MovieList movies={topMovies} />
    </Container>
  );
};

export default MainPage;
