import logoMobile1x from 'img/logo/logo480@1x.png';
import logoMobile2x from 'img/logo/logo480@2x.png';
import logoTablet1x from 'img/logo/logo768@1x.png';
import logoTablet2x from 'img/logo/logo768@2x.png';
import logoDesktop1x from 'img/logo/logo1280@1x.png';
import logoDesktop2x from 'img/logo/logo1280@2x.png';
import { SocialList } from 'components/SocialList/SocialList';
import { useState, useEffect } from 'react';
import css from './Header.module.css';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const openMenu = () => {
    setIsOpen(true); 
  };

  const closeMenu = () => {
    setIsOpen(false); 
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header className={css.headerBox}>
      <div>
        <a className={`${css.headerBox} ${isScrolled ? css.scrolled : ''}`} href="/">
          <picture>
            <source
              srcSet={`${logoDesktop1x} 1x, ${logoDesktop2x} 2x`}
              media="(min-width: 1280px)"
              sizes="min-width: 72px"
            />
            <source
              srcSet={`${logoTablet1x} 1x, ${logoTablet2x} 2x`}
              media="(min-width: 768px)"
              sizes="min-width: 48px"
            />
            <source
              srcSet={`${logoMobile1x} 1x, ${logoMobile2x} 2x`}
              media="(max-width: 767px)"
              sizes="min-width: 48px"
            />
            <img
              className={css.logoImage}
              src={logoMobile1x}
              alt="LogoImage"
              loading="lazy"
            />
          </picture>
        </a>
      </div>
      <div>
        <button type='button' aria-label='Open'
          className={`${css.btnMenu} ${css.headerItem}`}
          onClick={openMenu}>MENU</button>
         <MobileMenu isOpen={isOpen} onClose={closeMenu}/>
        <SocialList/>
      </div>
    </header>
  );
};
