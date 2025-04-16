import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import clsx from 'clsx';
const Navigation = ({ state }) => {
    return (
        <nav className={s.navWrapper}>
            <NavLink
                state={state}
                className={({ isActive }) => clsx(s.link, isActive && s.active)}
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                state={state}
                className={({ isActive }) => clsx(s.link, isActive && s.active)}
                to="/movies"
            >
                Movies
            </NavLink>
        </nav>
    );
};

export default Navigation;
