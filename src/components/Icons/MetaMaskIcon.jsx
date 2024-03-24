import sprite from 'img/icons/icons.svg';
import css from './Icons.module.css'

export const MetaMaskIcon= () => (
    <svg alt="Fox icon" className={css.metaMask}>
     <use xlinkHref={`${sprite}#icon-MetaMask`}/>
  </svg>
);