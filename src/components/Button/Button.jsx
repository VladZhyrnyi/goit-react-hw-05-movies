import styled from 'styled-components';

const StyledButton = styled.button`
  
  height: 36px;

  padding: 10px 20px;


  font-size: 16px;

  border: 1px solid #000;
  border-radius: 4px;

  background-color: transparent;

  &:focus,
  &:hover {
    background-color: #efefef;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = ({ type='button', onClick, children }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
