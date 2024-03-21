import sprite from 'img/icons/icons.svg';
import css from './Icons.module.css'

export const TwitterIcon = () => (
    <svg alt="Twitter Icon" className={css.socialIcon}>
     <use xlinkHref={`${sprite}#icon-twitter`}/>
  </svg>
);