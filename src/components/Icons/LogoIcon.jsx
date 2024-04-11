import sprite from 'img/icons/icons.svg';
import css from './Icons.module.css'
import { useScroll } from 'hooks/useScroll';


export const LogoIcon = () => {
    const isScrolled = useScroll();
    
    return (
        <svg alt="Logo Icon" className={`${css.logoIcon} ${isScrolled ? css.scrolled : ''}`}>
            <use xlinkHref={`${sprite}#icon-logo`} />
        </svg>        
    )
};