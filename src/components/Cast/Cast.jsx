import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'utils/api-service';

import styled from 'styled-components';
import { ActorCard } from 'components/ActorCard';

const CastWrapper = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: scroll;
`;

const Cast = () => {
  const [actors, setActors] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const { cast } = await getMovieCast(movieId);

        setActors(cast.sort((prev, next) => prev.cast_id - next.cast_id));
      } catch (error) {
        console.log(error);
      }
    };

    getCast();
  }, [movieId]);

  return (
    <CastWrapper>
      {actors?.map(actor => (
        <li key={actor.id}>
          <ActorCard actor={actor} />
        </li>
      ))}
    </CastWrapper>
  );
};

export default Cast;