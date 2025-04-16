import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import s from './MovieDetailsPage.module.css';
import { useEffect, useRef, useState } from 'react';
import NotFound from '../NotFound/NotFound';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import { fetchMovieById } from '../../utils/fetch';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const location = useLocation();
    const goBackRef = useRef(location.state ?? '/');

    useEffect(() => {
        const getDetails = async () => {
            try {
                const details = await fetchMovieById(movieId);
                setMovieDetails(details);
            } catch (error) {
                console.log('Movie Details Fetch:', error);
                setMovieDetails('404');
            }
        };

        getDetails();
    }, []);
    console.log('movieDetails: ', movieDetails);

    if (movieDetails === '404') return <NotFound />;
    if (!movieDetails) return <h2>Loading</h2>;
    return (
        <>
            <Header>
                <div className={s.logo}></div>
                <Navigation />
            </Header>

            <main>
                <Link to={goBackRef.current}>Go back</Link>
                <section className={s.origin}>
                    <div className={s.imgWrapper}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`}
                            alt=""
                        />
                    </div>
                    <div className={s.detailsWrapper}>
                        <div className={s.detailsInner}>
                            <h2 className={s.title}>{movieDetails?.title}</h2>
                            <span className={s.vote}>
                                User vote:
                                {movieDetails?.vote_average}
                            </span>
                            <h3 className={s.overviewTitle}></h3>
                            <span className={s.overview}>
                                {movieDetails?.overview}
                            </span>
                            <ul className={s.genreList}>
                                {movieDetails.genres?.map(genre => (
                                    <li key={genre.id} className={s.genreItem}>
                                        {genre.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <ul className={s.navAddList}>
                            <li className={s.navAddItem}>
                                <Link to="cast">Cast</Link>
                            </li>
                            <li className={s.navAddItem}>
                                <Link to="reviews">Reviews</Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div className={s.outletWrapper}>
                        <Outlet />
                    </div>
                </section>
            </main>
        </>
    );
};

export default MovieDetailsPage;
