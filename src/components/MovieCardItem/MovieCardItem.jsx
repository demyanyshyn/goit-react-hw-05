import { Link } from 'react-router-dom';
import s from './MovieCardItem.module.css';
const MovieCardItem = ({ movie }) => {
    const {
        backdrop_path: img,
        poster_path: poster,
        id,
        title,
        release_date,
    } = movie;
    const release = new Date(release_date);
    return (
        <>
            {/* <img src={'https://image.tmdb.org/t/p/w200' + img} alt={title} /> */}
            <img src={'https://image.tmdb.org/t/p/w200' + poster} alt={title} />
            <div className={s.titleWrapper}>
                <p>{title}</p> <p>{release.getFullYear()}</p>
            </div>
        </>
    );
};

export default MovieCardItem;
