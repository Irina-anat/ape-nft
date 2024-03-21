import sprite from 'img/icons/icons.svg';
import css from './Icons.module.css'

export const ShipIcon = () => (
    <svg alt="Ship Icon" className={css.socialIcon}>
     <use xlinkHref={`${sprite}#icon-ship`}/>
  </svg>
);