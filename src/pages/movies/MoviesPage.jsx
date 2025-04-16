import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import SearchBar from '../../components/SearchBar/SearchBar';
import s from './MoviesPage.module.css';
import { useEffect, useRef, useState } from 'react';
import { fetchMoviesByQuery } from '../../utils/fetch';
import MovieCardItem from '../../components/MovieCardItem/MovieCardItem';
import MoviesList from '../../components/MoviesList/MoviesList';

const MoviesPage = ({}) => {
    const [movies, setMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const goBackRef = useRef(location.state ?? '/');

    const query = searchParams.get('query');
    useEffect(() => {
        const getData = async () => {
            console.log('query:', query);
            if (!query) return;
            try {
                const updateMovie = await fetchMoviesByQuery(query);
                setMovies(updateMovie);
            } catch (error) {
                console.log(error);
            }
        };

        getData();
        return console.dir(movies);
    }, [searchParams]);

    const handleChangeSearchString = string => {
        searchParams.set('query', string);
        setSearchParams(searchParams);
    };

    return (
        <>
            <Header>
                <div className={s.logo}></div>
                <Navigation state={location} />
            </Header>
            <div>
                <SearchBar
                    handleChangeSearchString={handleChangeSearchString}
                />
                <Link className={s.link} to={goBackRef.current}>
                    Go back
                </Link>
            </div>

            {movies ? (
                movies.results.length === 0 ? (
                    <h3>No results by your query</h3>
                ) : (
                    <MoviesList state={location} movies={movies} />
                )
            ) : (
                query && <h3>Loading</h3>
            )}
        </>
    );
};

export default MoviesPage;
