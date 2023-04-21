import { Container } from 'components/Container';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 70px;
  padding: 15px;

  display: flex;
  align-items: center;

  background-color: #cfcfcf;
  border-bottom: 1px solid #2e2e2e;
`;

const StyledNav = styled.nav`
  margin-left: 50px;
  display: flex;
  gap: 30px;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 24px;

  &:hover,
  &:focus {
    color: #efefef;
  }

  &.active {
    border-bottom: 4px solid #efefef;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledNav>
          <StyledNavLink to={'/'}>Home</StyledNavLink>
          <StyledNavLink to={'/movies'}>Movies</StyledNavLink>
        </StyledNav>
      </Container>
    </StyledHeader>
  );
};
