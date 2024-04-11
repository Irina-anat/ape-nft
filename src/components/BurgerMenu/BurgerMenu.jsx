import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useMediaQuery } from 'react-responsive';
import { LogoImage } from 'components/LogoImage/LogoImage';
import { SocialList } from 'components/SocialList/SocialList';
import { MenuItems } from 'components/MenuItems/MenuItems';
import css from './BurgerMenu.module.css';

const modalRoot = document.getElementById('modal-root');

export const BurgerMenu = ({ toggleMenu, isOpenMenu }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  useEffect(() => {
    const handleKeyDown = event => {
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
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
    }
  };

  return createPortal(
    isMobile ? (
      <div className={`${css.mobileMenu} ${isOpenMenu ? css.openMenu : ''}`}>
        <div className={css.mobileBox}>
          <div style={{ filter: 'invert(100%) brightness(200%)' }}>
            <LogoImage />
          </div>
          <div style={{ filter: 'invert(100%) brightness(200%)' }}>
            <button
              type="button"
              aria-label="Close"
              className={`${css.btnMenu} ${css.mobileItem}`}
              onClick={toggleMenu}
            >
              CLOSE
            </button>
            <SocialList />
          </div>
        </div>
        <MenuItems handleMenuItemClick={handleMenuItemClick}/>
        <p className={css.menuText}>© Yacht ape 2024 all rights reserved</p>
      </div>
    ) : (
      <div className={`${css.menuLarge} ${isOpenMenu ? css.openMenu : ''}`}>
          <MenuItems handleMenuItemClick={handleMenuItemClick}/>
      </div>
    ),
    modalRoot,
  );
};
