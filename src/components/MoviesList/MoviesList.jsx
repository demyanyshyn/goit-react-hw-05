import { Link } from 'react-router-dom';
import s from './MoviesList.module.css';
import MovieCardItem from '../MovieCardItem/MovieCardItem';

const MoviesList = ({ movies, state }) => {
    return (
        <>
            <main>
                <section className={s.sectionWrapper}>
                    {movies && (
                        <ul>
                            {movies.results?.map(movie => (
                                <li key={movie?.id}>
                                    <Link
                                        state={state}
                                        to={'/movies/' + movie?.id.toString()}
                                    >
                                        <MovieCardItem movie={movie} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
            </main>
        </>
    );
};

export default MoviesList;
