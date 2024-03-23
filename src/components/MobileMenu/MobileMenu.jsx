import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { LogoImage } from 'components/LogoImage/LogoImage';
import { SocialList } from 'components/SocialList/SocialList';
import css from './MobileMenu.module.css';


const modalRoot = document.getElementById('modal-root');

export const MobileMenu = ({ toggleMenu, isOpenMenu }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpenMenu) {
        toggleMenu(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpenMenu, toggleMenu]);

  const handleMenuItemClick = (event, sectionId) => {
  event.preventDefault();
  toggleMenu(false);
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }
};

  return createPortal(
    <div className={`${css.mobileMenu} ${isOpenMenu ? css.openMenu : ''}`}>
      <div className={css.mobileBox}>
         <div style={{ filter: 'invert(100%) brightness(200%)' }}>
        <LogoImage/> 
      </div> 
        <div style={{ filter: 'invert(100%) brightness(200%)' }}>
          <button
          type='button'
          aria-label='Close'
          className={`${css.btnMenu} ${css.mobileItem}`}
          onClick={toggleMenu}
        >
          CLOSE
        </button>
        <SocialList className={css.socialItem}/>
      </div> 
      </div> 
      <ul className={css.menuItems}>
          <li>
            <a href="#about" onClick={(event) => handleMenuItemClick(event, '#about')}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#m-map" onClick={(event) => handleMenuItemClick(event, '#m-map')}>
              M-MAP
            </a>
          </li>
          <li>
            <a href="#faq" onClick={(event) => handleMenuItemClick(event, '#faq')}>
              FAQ
            </a>
        </li>
        <li>
            <a href="#arts" onClick={(event) => handleMenuItemClick(event, '#arts')}>
              ARTS
            </a>
        </li>
        <li>
            <a href="#mint" onClick={(event) => handleMenuItemClick(event, '#mint')}>
              MINT
            </a>
          </li>
      </ul>
      <p className={css.menuText}>
        © Yacht ape 2024 all rights reserved
      </p>
    </div>,
    modalRoot
  );
};
