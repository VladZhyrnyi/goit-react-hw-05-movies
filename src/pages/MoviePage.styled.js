import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieDetailsWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(Link)`
  height: 36px;
  padding: 10px 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;

  border: 1px solid #2e2e2e;
  border-radius: 4px;
`;

export const BackLink = styled(StyledLink)`
  position: absolute;
  top: 18px;
  right: 18px;
`;

export const MovieImageWrapper = styled.div`
  width: 340px;

  border-radius: 15px;
`;

export const MovieInfoWrapper = styled.div``;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
`;

export const Rate = styled.p`
  font-size: 16px;
  color: #444;
`;

export const SubTitle = styled.h2`
  margin-top: 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;

  border-bottom: 1px solid #000;
`;
export const Info = styled.p`
  margin-top: 20px;
`;

export const AdditionalInfoWrapper = styled.div`
  padding: 10px 0;
  display: flex;
  gap: 10px;
`;