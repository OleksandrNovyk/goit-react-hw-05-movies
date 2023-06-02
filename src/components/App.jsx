import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import css from './Home/home.module.css';

const Movies = lazy(() => import('./Movies/Movies'));
const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('./Home/Home'));
const MovieDetails = lazy(() => import('./Movies/MovieDetails'));
const MovieCast = lazy(() => import('./Movies/MoviesCast'));
const MoviesReviews = lazy(() => import('./Movies/MoviesReviews'));

export const App = () => {
  return (
    <div className={css.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MoviesReviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
