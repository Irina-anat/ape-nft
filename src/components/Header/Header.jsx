import { useState } from 'react';
import { useScroll } from 'hooks/useScroll';
import { SocialList } from 'components/SocialList/SocialList';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { LogoImage } from 'components/LogoImage/LogoImage';
import css from './Header.module.css';

export const Header = () => {
  const isScrolled = useScroll();

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const closeMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <header className={css.headerBox}>
      <div>
        <LogoImage className={css.headerBox} />
      </div>
      <div>
        <button
          type="button"
          aria-label={isOpenMenu ? 'Close' : 'Open'}
          className={`${css.btnMenu} ${css.headerItem} ${
            isScrolled ? css.scrolled : ''
          } ${isOpenMenu ? css.openMenu : ''}`}
          onClick={isOpenMenu ? closeMenu : toggleMenu}
        >
          {isOpenMenu ? 'CLOSE' : 'MENU'}
        </button>
        <BurgerMenu isOpenMenu={isOpenMenu} toggleMenu={toggleMenu} />
        <SocialList />
      </div>
    </header>
  );
};


