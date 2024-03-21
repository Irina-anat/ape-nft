import sprite from 'img/icons/icons.svg';
import css from './Icons.module.css'

export const CrossIcon = () => (
    <svg alt="Discord Icon" className={css.crossIcon}>
     <use xlinkHref={`${sprite}#icon-cross`}/>
  </svg>
);