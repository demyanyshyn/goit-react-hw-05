import { useEffect, useState } from 'react';
import s from './MovieCast.module.css';
import { fetchCastById } from '../../utils/fetch';
import { useParams } from 'react-router-dom';

const MovieCast = () => {
    const [cast, setCast] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        const getCast = async () => {
            try {
                const credits = await fetchCastById(movieId);
                setCast(credits);
                console.dir('Cast: ', credits);
            } catch (error) {
                console.dir('Cast Error', error);
            }
        };
        getCast();
    }, [movieId]);

    if (!cast) return <h3>Loading</h3>;
    return (
        <>
            <ul className={s.castList}>
                {cast.cast?.map(actor => (
                    <li key={actor?.id} className={s.castItem}>
                        <img
                            src={
                                'https://image.tmdb.org/t/p/w200/' +
                                actor?.profile_path
                            }
                            alt=""
                        />
                        <span>{actor?.name}</span>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MovieCast;
