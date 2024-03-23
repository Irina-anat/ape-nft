import sprite from 'img/icons/icons.svg';
import css from './Icons.module.css'

export const VectorIcon = () => (
    <svg alt="Vector Icon" className={css.vectorIcon}>
     <use xlinkHref={`${sprite}#icon-vector`}/>
  </svg>
);