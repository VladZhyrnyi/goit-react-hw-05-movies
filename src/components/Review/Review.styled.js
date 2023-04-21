const { default: styled } = require('styled-components');

export const ReviewWrapper = styled.div`
padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-bottom: 1px solid #2e2e2e;
`;

export const UserName = styled.h3`
  font-size: 16px;
  font-weight: 500;
`;

export const Date = styled.p`
  font-size: 14px;
`;

export const Content = styled.p``;
