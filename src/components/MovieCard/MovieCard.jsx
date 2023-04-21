import {
  CardWrapper,
  ImageWrapper,
  InfoWrapper,
  Title,
  SubInfoWrapper,
} from './MovieCard.styled';

export const MovieCard = ({
  movie: { original_title, poster_path, release_date, vote_average },
}) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <img
          width="100%"
          src={`https://image.tmdb.org/t/p/w342${poster_path}`}
          alt={original_title}
        />
      </ImageWrapper>
      <InfoWrapper>
        <Title>{original_title}</Title>
        <SubInfoWrapper>
          <p>{formatDate(release_date)}</p>
          <p>{vote_average}</p>
        </SubInfoWrapper>
      </InfoWrapper>
    </CardWrapper>
  );
};

function formatDate (date) {
  return new Date(date).toLocaleDateString();
}