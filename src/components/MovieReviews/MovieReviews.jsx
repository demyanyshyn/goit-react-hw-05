import s from './MovieReviews.module.css';
import { fetchCastById, fetchReviewsById } from '../../utils/fetch';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BsPersonFill } from 'react-icons/bs';

const MovieReviews = () => {
    const [reviews, setReviews] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        const getReviews = async () => {
            try {
                const review = await fetchReviewsById(movieId);
                setReviews(review);
                console.dir('Reviews: ', review);
            } catch (error) {
                console.dir('Review Error', error);
            }
        };
        getReviews();
    }, [movieId]);

    if (!reviews) return <h3>Loading</h3>;
    if (reviews.results.length === 0) return <h3>No review yet</h3>;
    return (
        <>
            <ul className={s.reviewsList}>
                {reviews.results?.map(review => (
                    <li key={review?.id} className={s.reviewsItem}>
                        <p className={s.reviewsContent}>{review?.content}</p>
                        <span className={s.reviewsAuthor}>
                            <BsPersonFill /> {review?.author}
                        </span>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MovieReviews;
