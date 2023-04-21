import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

import { Loader } from './Loader';
import { Header } from './Header';

const Main = styled.main`
  padding: 15px 0;
`;

export const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
