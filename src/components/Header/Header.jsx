import { SocialList } from 'components/SocialList/SocialList';
import { useState } from 'react';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { LogoImage } from 'components/LogoImage/LogoImage';
import css from './Header.module.css';


export const Header = () => {

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  
  return (
    <header className={css.headerBox}>
      <div >
        <LogoImage className={css.headerBox}/>
      </div>
      <div>
        <button
          type='button'
          aria-label='Open'
          className={`${css.btnMenu} ${css.headerItem}`}
          onClick={toggleMenu}
        >
          MENU
        </button>
         <MobileMenu isOpenMenu={isOpenMenu} toggleMenu={toggleMenu}/>
        <SocialList/>
      </div>
    </header>
  );
};




// export const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isOpenMenu, setIsOpenMenu] = useState(false);

//   const toggleMenu = () => {
//     setIsOpenMenu(!isOpenMenu);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setIsScrolled(scrollTop > 0);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);


//   return (
//     <header className={css.headerBox}>
//       <div>
//         <a className={`${css.headerBox} ${isScrolled ? css.scrolled : ''}`} href="../../../public/index.html">
//           <picture>
//             <source
//               srcSet={`${logoDesktop1x} 1x, ${logoDesktop2x} 2x`}
//               media="(min-width: 1280px)"
//               sizes="min-width: 72px"
//             />
//             <source
//               srcSet={`${logoTablet1x} 1x, ${logoTablet2x} 2x`}
//               media="(min-width: 768px)"
//               sizes="min-width: 48px"
//             />
//             <source
//               srcSet={`${logoMobile1x} 1x, ${logoMobile2x} 2x`}
//               media="(max-width: 767px)"
//               sizes="min-width: 48px"
//             />
//             <img
//               className={css.logoImage}
//               src={logoMobile1x}
//               alt="LogoImage"
//               loading="lazy"
//             />
//           </picture>
//         </a>
//       </div>
//       <div>
//         <button
//           type='button'
//           aria-label={isOpenMenu ? 'Close' : 'Open'}
//           className={`${css.btnMenu} ${css.headerItem}`}
//           onClick={toggleMenu}
//           style={{ color: isOpenMenu ? '#FFF' : '#1E1E1E' }}
//         >
//           {isOpenMenu ? 'CLOSE' : 'MENU'}
//         </button>
//          <MobileMenu isOpenMenu={isOpenMenu} toggleMenu={toggleMenu}/>
//         <SocialList/>
//       </div>
//     </header>
//   );
// };





