import { useScroll } from 'hooks/useScroll';
import css from './MenuItems.module.css';


export const MenuItems = ({ handleMenuItemClick }) => {
  
  const isScrolled = useScroll();

  return (
    <ul className={css.menuItems}>
      <li>
        <a
          className={`${css.menuLink} ${isScrolled ? css.scrolled : ''}`}
          href="#about"
          onClick={event => handleMenuItemClick(event, '#about')}
        >
          ABOUT
        </a>
      </li>
      <li>
        <a
          className={`${css.menuLink} ${isScrolled ? css.scrolled : ''}`}
          href="#m-map"
          onClick={event => handleMenuItemClick(event, '#m-map')}
        >
          M-MAP
        </a>
      </li>
      <li>
        <a
          className={`${css.menuLink} ${isScrolled ? css.scrolled : ''}`}
          href="#faq"
          onClick={event => handleMenuItemClick(event, '#faq')}
        >
          FAQ
        </a>
      </li>
      <li>
        <a
          className={`${css.menuLink} ${isScrolled ? css.scrolled : ''}`}
          href="#arts"
          onClick={event => handleMenuItemClick(event, '#arts')}
        >
          ARTS
        </a>
      </li>
      <li>
        <a
          className={`${css.menuLink} ${isScrolled ? css.scrolled : ''}`}
          href="#mint"
          onClick={event => handleMenuItemClick(event, '#mint')}
        >
          MINT
        </a>
      </li>
    </ul>
  );
};
