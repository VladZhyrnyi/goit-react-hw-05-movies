import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMovieBySearch } from 'utils/api-service';

import { SearchInput } from 'components/SearchInput/SearchInput';
import { MovieList } from 'components/MovieList';
import { Loader } from 'components/Loader';
import { toast } from 'react-hot-toast';
import { Button } from 'components/Button';
import { Container } from 'components/Container';

import {
  MoviesPageWrapper,
  QueryWrapper,
  TotalInfo,
} from './MoviesPage.styled';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') || '';

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = useCallback(async (query, page) => {
    setIsLoading(true);

    try {
      const data = await getMovieBySearch(query, page);

      if (data.results.length === 0) {
        toast.error("Can't find anything");
      }

      setMovies(movies => [...movies, ...data.results]);
      setTotal(data.total_results);
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!query) {
      return;
    }

    getMovies(query, page);
  }, [getMovies, query, page]);

  const handleSearchInputSubmit = query => {
    setSearchParams({ query });
    setPage(1);
    setTotal(0);
    setMovies([]);
  };

  const handleLoadMoreBtn = () => {
    setPage(page => page + 1);
  };

  const checkLoadMore = () => {
    return total > movies.length;
  };

  return (
    <Container>
      <MoviesPageWrapper>
        <QueryWrapper>
          <SearchInput onSubmit={handleSearchInputSubmit} value={query} />
          {total > 0 && <TotalInfo>Found {total} results.</TotalInfo>}
        </QueryWrapper>
        {movies && <MovieList movies={movies} />}
        <Loader isLoading={isLoading} />
        {checkLoadMore() && (
          <Button onClick={handleLoadMoreBtn}>Load more</Button>
        )}
      </MoviesPageWrapper>
    </Container>
  );
};

export default MoviesPage;
