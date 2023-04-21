import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 620px;
  }

  @media screen and (min-width: 1280px) {
    width: 1220px;
  }
`;

export const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
