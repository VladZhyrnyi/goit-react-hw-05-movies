import defaultAvatar from 'images/actorAvatar.png';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 140px;
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 210px;

  object-position: 50% 50%;

  background-color: #cfcfcf;
`;

const Image = styled.img``;

const InfoWrapper = styled.div`
height: 76px;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: 500;
`;

const Character = styled.p`
  font-size: 14px;

  color: #2e2e2e;
`;

export const ActorCard = ({ actor: { profile_path, name, character } }) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <Image
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w200${profile_path}`
              : defaultAvatar
          }
          alt={name}
        />
      </ImageWrapper>
      <InfoWrapper>
        <Name>{name}</Name>
        <Character>{character}</Character>
      </InfoWrapper>
    </CardWrapper>
  );
};
