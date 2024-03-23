import logoMobile1x from 'img/logo/logo480@1x.png';
import logoMobile2x from 'img/logo/logo480@2x.png';
import logoTablet1x from 'img/logo/logo768@1x.png';
import logoTablet2x from 'img/logo/logo768@2x.png';
import logoDesktop1x from 'img/logo/logo1280@1x.png';
import logoDesktop2x from 'img/logo/logo1280@2x.png';
import { useEffect, useState } from 'react';
import css from './LogoImage.module.css';

export const LogoImage = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
         <a   href="/">
         <picture  className={isScrolled ? css.scrolled : ''}>
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
    )
};