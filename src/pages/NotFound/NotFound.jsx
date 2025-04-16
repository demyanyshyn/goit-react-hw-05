import { Link } from 'react-router-dom';
import s from './NotFound.module.css';

const NotFound = () => {
    return (
        <div>
            <h2>404 NotFound</h2>
            <Link to="/">Go Home</Link>
        </div>
    );
};

export default NotFound;
