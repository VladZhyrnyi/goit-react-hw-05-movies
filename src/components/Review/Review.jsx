import { dateFormatter } from 'utils/dateFormatter';

import { ReviewWrapper, UserName, Date } from './Review.styled';



export const Review = ({ review: { author, created_at, content } }) => {
  return (
    <ReviewWrapper>
      <UserName>{author}</UserName>
      <Date>{dateFormatter(created_at)}</Date>
      <p>{content}</p>
    </ReviewWrapper>
  );
};
