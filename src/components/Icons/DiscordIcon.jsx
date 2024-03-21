import sprite from 'img/icons/icons.svg';
import css from './Icons.module.css'

export const DiscordIcon = () => (
    <svg alt="Discord Icon" className={css.socialIcon}>
     <use xlinkHref={`${sprite}#icon-discord`}/>
  </svg>
);





