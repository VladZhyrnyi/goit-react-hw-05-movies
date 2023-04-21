import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 280px;
  padding: 10px;
  border-radius: 20px;
  background-color: #efefef;

  transition: transform 100ms ease;

  &:hover, &focus {
    transform: scale(1.01);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 390px;
  border-radius: 10px;
  overflow: hidden;
`;

export const InfoWrapper = styled.div`
  padding-top: 10px;
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h2`
font-size: 20px`;

export const SubInfoWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;
