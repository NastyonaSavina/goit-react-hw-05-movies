import { lazy, Suspense } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const SingleMoviePage = lazy(() => import('../pages/SingleMoviePage/SingleMoviePage/SingleMoviePage'));
const Home = lazy(() => import('../pages/Home/Home'));
const CastPage = lazy(() => import('../pages/SingleMoviePage/CastPage/CastPage'));
const ReviewsPage = lazy(() => import('../pages/SingleMoviePage/ReviewsPage/ReviewsPage'));
const SearchMoviePage = lazy(() => import('../pages/SearchMoviePage/SearchMoviePage'));


export const App = () => {
  return (
    <BrowserRouter basename="goit-react-hw-05-movies">
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="movies/:movieId" element={<SingleMoviePage />} >
                <Route path="cast" element={<CastPage />} />
                <Route path="reviews" element={<ReviewsPage />} />
              </Route>
              <Route path="movies" element={<SearchMoviePage />} />
          </Routes>
        </Suspense>
      </Layout >
    </BrowserRouter>
  );
};