import { useSwiper } from 'swiper/react';
import css from './Mind.module.css';

export const ButtonsSlider = () => {
  const swiper = useSwiper();

  return (
    <div className={css.btnBox}>
      <button className={css.sliderBtn}
          type="button"
          aria-label="previous slide"
          onClick={() => swiper.slidePrev()}
        >
          Prev
        </button>
        <button className={css.sliderBtn}
          type="button"
          aria-label="next slide"
          onClick={() => swiper.slideNext()}
        >
          Next
        </button>
    </div>
  );
};