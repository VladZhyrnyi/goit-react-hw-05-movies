import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';

import { Layout } from './Layout';
// import { MainPage } from 'pages/MainPage';
// import { MoviesPage } from 'pages/MoviesPage';
// import { MoviePage } from 'pages/MoviePage';
// import { Cast } from './Cast';
// import { Reviews } from './Reviews';

const MainPage = lazy(() => import('pages/MainPage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MoviePage = lazy(() => import('pages/MoviePage'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MoviePage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<div>Wrong url</div>} />
        </Route>
      </Routes>
    </>
  );
};
