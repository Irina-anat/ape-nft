import heroApeMobile1 from 'img/hero/heroApe480@1x.png';
import heroApeMobile2 from 'img/hero/heroApe480@2x.png';
import heroApeTablet1 from 'img/hero/heroApe768@1x.png';
import heroApeTablet2 from 'img/hero/heroApe768@2x.png';
import heroApeDesktop1 from 'img/hero/heroApe1280@1x.png';
import heroApeDesktop2 from 'img/hero//heroApe1280@2x.png';
import { useMediaQuery } from 'react-responsive';
import css from './Hero.module.css';

export const Hero = () => {

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const IsTabletOrDesctop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const scrollToSection = () => {
    const section = document.getElementById('#m-map');
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
    }
  };

  return (
    <section className={css.heroContainer}>
      <div className={css.heroSection}>
        <div>
          <span className={css.heroContent}>diD yOu seE iT ?</span>
          {isMobile && <h1 className={css.heroTitle}>YACHT APES</h1>}
          {IsTabletOrDesctop && <h1 className={css.heroTitle}>YACHT</h1>}
          <span className={css.heroSubContent}>Apes aRe eveRywhere</span>
        </div>
        <div className={css.heroImage}>
          <picture>
            <source
              srcSet={`${heroApeDesktop1} 1x, ${heroApeDesktop2} 2x`}
              media="(min-width: 1280px)"
              sizes="min-width: 283px"
            />
            <source
              srcSet={`${heroApeTablet1} 1x, ${heroApeTablet2} 2x`}
              media="(min-width: 768px)"
              sizes="min-width: 283px"
            />
            <source
              srcSet={`${heroApeMobile1} 1x, ${heroApeMobile2} 2x`}
              media="(max-width: 480px)"
              sizes="max-width: 216px 100vw, 216px"
            />
            <img
              src={heroApeMobile1}
              alt="The monkey hero in glasses"
              loading="lazy"
            />
          </picture>
        </div>
        <div className={IsTabletOrDesctop ? `${css.contentBox} ` : ''}>
          {IsTabletOrDesctop && (
            <h1 className={`${css.heroTitle} ${css.heroTitleRight}`}>APES</h1>
          )}
          <div className={IsTabletOrDesctop ? `${css.bottomBox} ` : ''}>
            <a href="#m-map" className={css.heroBtn} onClick={scrollToSection}>
              MEET APES
            </a>
            <p className={css.heroText}>
              Yacht Ape is a collection of unique digital apes that you can own
              in NFT format
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
