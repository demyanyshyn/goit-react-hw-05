import { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import s from './HomePage.module.css';
import { fetchTrendingMovies } from '../../utils/fetch';
import MovieCardItem from '../../components/MovieCardItem/MovieCardItem';
import { Link, useLocation } from 'react-router-dom';
import MoviesList from '../../components/MoviesList/MoviesList';

const HomePage = () => {
    const [movies, setMovies] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const getMovies = async () => {
            if (movies !== null) return;
            try {
                const nowInTrend = await fetchTrendingMovies({});
                setMovies(nowInTrend);
            } catch (error) {
                console.log(error);
            }
        };

        getMovies();
        return console.dir(movies);
    }, []);

    return (
        <>
            <Header>
                <div className={s.logo}></div>
                <Navigation state={location} />
            </Header>

            {movies ? <MoviesList movies={movies} /> : <p>Loading</p>}
        </>
    );
};

export default HomePage;
