import heroApeMobile1 from 'img/hero/heroApe480@1x.jpg';
import heroApeMobile2 from 'img/hero/heroApe480@2x.jpg';
import heroApeTablet1 from 'img/hero/heroApe768@1x.png';
import heroApeTablet2 from 'img/hero/heroApe768@2x.png';
import heroApeDesktop1 from 'img/hero/heroApe1280@1x.png';
import heroApeDesktop2 from 'img/hero//heroApe1280@2x.png';
import { animateScroll as scroll } from 'react-scroll';
import css from './Hero.module.css';

export const Hero = () => {
  
  const scrollToSection = () => {
    scroll.scrollTo('mintSection', {
      duration: 1000,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <section className={css.heroContainer}>
      <div className={css.heroSection}>
        <div>
          <span className={css.heroContent}>diD yOu seE iT ?</span>
          <h1 className={css.heroTitle}>YACHT APES</h1>
          <span className={css.heroContent}>Apes aRe eveRywhere</span>
        </div>
        <div className={css.heroImage}>
          <picture>
            <source
              srcSet={`${heroApeDesktop1} 1x, ${heroApeDesktop2} 2x`}
              media="(min-width: 1280px)"
              sizes="min-width: 511px"
            />
            <source
              srcSet={`${heroApeTablet1} 1x, ${heroApeTablet2} 2x`}
              media="(min-width: 768px)"
              sizes="min-width: 283px"
            />
            <source
              srcSet={`${heroApeMobile1} 1x, ${heroApeMobile2} 2x`}
              media="(max-width: 480px)"
              sizes="max-width: 216px"
            />
            <img 
              src={heroApeMobile1}
              alt="The monkey hero in glasses"
              loading="lazy"
            />
          </picture>
        </div>
        <button type="button" className={css.heroBtn} onClick={scrollToSection} aria-label="Scroll to Mint section">
          MEET APES
        </button>
        <p className={css.heroText}>
          Yacht Ape is a collection of unique digital apes that you can own in
          NFT format
        </p>
      </div>
    </section>
  );
};
