import axios from 'axios';
const AUTH = {
    headers: {
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmE0YmJhNDBhMDlmOGViZGY1OTg0NjRkMjYxZjE5MyIsIm5iZiI6MTc0NDcxNTcwOC4yODYsInN1YiI6IjY3ZmUzZmJjMzExMGJkODJkZmFkNjZlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MF8__6J29yma_VIoPpqwlze0uzayS4q4JRW_Z-NVlmM',
        accept: 'application/json',
    },
};

export const fetchTrendingMovies = async () => {
    const URL =
        'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

    const response = await axios.get(URL, AUTH);
    return response.data;
};

export const fetchMoviesByQuery = async (query, page = 1) => {
    const URL = `https://api.themoviedb.org/3/search/movie?&language=en-US&query=${query}&page=${page}`;

    const response = await axios.get(URL, AUTH);
    return response.data;
};

export const fetchMovieById = async id => {
    const URL = `https://api.themoviedb.org/3/movie/${id}`;

    const response = await axios.get(URL, AUTH);
    return response.data;
};

export const fetchCastById = async id => {
    const URL = `https://api.themoviedb.org/3/movie/${id}/credits`;

    const response = await axios.get(URL, AUTH);
    return response.data;
};
export const fetchReviewsById = async id => {
    const URL = `https://api.themoviedb.org/3/movie/${id}/reviews`;

    const response = await axios.get(URL, AUTH);
    return response.data;
};
