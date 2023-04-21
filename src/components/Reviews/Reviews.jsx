import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'utils/api-service';

import { Loader } from 'components/Loader';
import { toast } from 'react-hot-toast';
import { Review } from 'components/Review/Review';
import { Button } from 'components/Button';
import styled from 'styled-components';

const ReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ReviewItem = styled.li`
  &:nth-child(2n) {
    background-color: #efefef;
  }
`;

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      try {
        setIsLoading(true);

        const { results, total_results } = await getMovieReviews(movieId, page);

        if (results.length === 0) {
          toast.error("Can't find anything");
          return;
        }

        setReviews(reviews => [...reviews, ...results]);
        setTotal(total_results);
      } catch (error) {
        toast.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId, page]);

  return (
    <>
      <ReviewList>
        {reviews?.map(review => (
          <ReviewItem key={review.id}>
            <Review review={review} />
          </ReviewItem>
        ))}
      </ReviewList>
      <Loader isLoading={isLoading} />

      {total > reviews.length && (
        <Button onClick={() => setPage(page => page + 1)}>Load more</Button>
      )}
    </>
  );
};

export default Reviews;
