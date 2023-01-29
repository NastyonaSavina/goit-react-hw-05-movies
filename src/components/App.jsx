import { lazy, Suspense } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const SingleMoviePage = lazy(() => import('../pages/SingleMoviePage/SingleMoviePage'));
const Home = lazy(() => import('../pages/Home/Home'));


export const App = () => {
  return (
    <BrowserRouter basename="goit-react-hw-05-movies">
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>

            <Routes>
              <Route path="" element={<Home />} />
              <Route path="movies/:movieId" element={<SingleMoviePage />} />

          </Routes>
        </Suspense>
      </Layout >
    </BrowserRouter>
  );
};