import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ButtonsSlider } from './ButtonsSlider';
import { VectorIcon } from 'components/Icons/VectorIcon';
import { useMediaQuery } from 'react-responsive';
import 'swiper/css';
import 'swiper/css/navigation';
import css from './Mind.module.css';

export const Mind = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <section id="#m-map" className={css.mindSection}>
      <h2 className={css.mindTitle}>MIND map</h2>
      {isMobile ? (
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={40}
          className={css.boxSwiper}
        >
          <SwiperSlide>
            <div className={css.cardBox}>
              <div className={css.textBox}>
                <span>All owners of APE NFTs</span>
                <span>and all future</span>
                <span>collections will receive</span>
                <span>a percentage of sales</span>
                <span>based on the number of</span>
                <span>NFTs they own</span>
              </div>
              <h3 className={css.cardTitle}>YAPE DROP</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.cardBox}>
              <div className={css.textBox}>
                <span>Launch of the</span>
                <span>2nd YACHT</span>
                <span>Collection</span>
                <span>Releasing the</span>
                <span>first version of</span>
                <span>the Ape Slam</span>
                <span>Game</span>
              </div>
              <h3 className={css.cardTitle}>New Collection</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.cardBox}>
              <div className={css.textBox}>
                <span>Launch your own</span>
                <span>token, the</span>
                <span>proceeds of</span>
                <span>which will go to</span>
                <span>a global fund to</span>
                <span>LAUNCH YACHT</span>
                <span>CLUB AND PROMOTE</span>
                <span>it</span>
              </div>
              <h3 className={css.cardTitle}>Token</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <div
                className={`${css.cardBox} ${
                  isActive ? css.active : css.notActive
                }`}
              >
                <div className={css.textBox}>
                  <div className={css.vectorBox}>
                    <a
                      href="https://irina-anat.github.io/ape-nft/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <VectorIcon className={css.vectorIcon} />
                    </a>
                  </div>
                </div>
                <h3 className={css.cardTitle}>Learn more in mind map</h3>
              </div>
            )}
          </SwiperSlide>
          <ButtonsSlider />
        </Swiper>
      ) : (
        <div className={css.mindContainer}>
          <div className={css.cardBox}>
            <div className={css.textBox}>
              <span>All owners of</span>
              <span>APE NFTs and all</span>
              <span>future</span>
              <span>collections will</span>
              <span>receive a</span>
              <span>percentage of</span>
              <span>sales based on</span>
              <span>the number of</span>
              <span>NFTs they own</span>
            </div>
            <h3 className={css.cardTitle}>YAPE DROP</h3>
          </div>
          <div className={css.cardBox}>
            <div className={css.textBox}>
              <span>Launch of the</span>
              <span>2nd YACHT</span>
              <span>Collection</span>
              <span>Releasing the</span>
              <span>first version of</span>
              <span>the Ape Slam</span>
              <span>Game</span>
            </div>
            <h3 className={css.cardTitle}>New Collection</h3>
          </div>
          <div className={css.cardBox}>
            <div className={css.textBox}>
              <span>Launch your own</span>
              <span>token, the</span>
              <span>proceeds of</span>
              <span>which will go to</span>
              <span>a global fund to</span>
              <span>LAUNCH YACHT</span>
              <span>CLUB AND PROMOTE</span>
              <span>it</span>
            </div>
            <h3 className={css.cardTitle}>Token</h3>
          </div>
          <div className={`${css.cardBox} ${css.active}`}>
            <div className={css.textBox}>
              <div className={css.vectorBox}>
                <a
                  href="https://irina-anat.github.io/ape-nft/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <VectorIcon className={css.vectorIcon} />
                </a>
              </div>
            </div>
            <h3 className={css.cardTitle}>Learn <br/> more <br/> in mind map</h3>
          </div>
        </div>
      )}
    </section>
  );
};
