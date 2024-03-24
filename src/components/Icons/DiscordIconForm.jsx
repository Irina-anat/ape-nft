import sprite from 'img/icons/icons.svg';
import css from './Icons.module.css'

export const DiscordIconForm = () => (
    <svg alt="Discord Icon" className={css.discordForm}>
     <use xlinkHref={`${sprite}#icon-discord`}/>
  </svg>
);