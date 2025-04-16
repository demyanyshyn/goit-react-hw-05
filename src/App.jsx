import { Route, Routes } from 'react-router-dom';
import './App.css';
import { lazy, Suspense } from 'react';

// import MoviesPage from './pages/movies/MoviesPage';

// import HomePage from './pages/home/HomePage';
// import NotFound from './pages/NotFound/NotFound';
// import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
// import MovieReviews from './components/MovieReviews/MovieReviews';
// import MovieCast from './components/MovieCast/MovieCast';

// lazy
const MoviesPage = lazy(() => import('./pages/movies/MoviesPage'));
const HomePage = lazy(() => import('./pages/home/HomePage'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const MovieDetailsPage = lazy(() =>
    import('./pages/MovieDetailsPage/MovieDetailsPage')
);
const MovieReviews = lazy(() =>
    import('./components/MovieReviews/MovieReviews')
);
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));

const App = () => {
    return (
        <>
            <Suspense fallback={<h2>Loading....</h2>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/movies" element={<MoviesPage />} />
                    <Route
                        path="/movies/:movieId"
                        element={<MovieDetailsPage />}
                    >
                        <Route path="reviews" element={<MovieReviews />} />
                        <Route path="cast" element={<MovieCast />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </>
    );
};
export default App;
