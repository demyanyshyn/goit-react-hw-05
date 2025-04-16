import s from './Header.module.css';
import crypto from 'crypto';
const Header = ({ children }) => {
    return (
        <header className={s.header}>
            <ul className={s.list}>
                {children?.map(item => (
                    <li key={window.crypto.randomUUID()} className={s.item}>
                        {item}
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Header;
