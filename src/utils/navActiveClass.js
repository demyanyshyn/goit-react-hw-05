import clsx from 'clsx';

export const setNavActiveClass = ({ isActive, s }) => {
    return clsx(s.link, isActive && s.active);
};
