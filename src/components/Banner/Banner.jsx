import { CrossIcon } from 'components/Icons/CrossIcon';
import css from './Banner.module.css'; 


export const Banner = () => {
  return (
    <div className={css.banner}>
      <div className={css.scrollText}>
        <div className={css.crossBox}>
          <CrossIcon />
        </div>
        <div className={css.containerItem}>
          <span>HAVE NO LIMITS</span>
          <div className={css.crossBox}>
            <CrossIcon />
          </div>
        </div>
        <div className={css.containerItem}>
          <span>BREAC RULES</span>
          <div className={css.crossBox}>
            <CrossIcon />
          </div>
        </div>
        <div className={css.containerItem}>
          <span>DESTROY STEREOTYPES</span>
           <div className={css.crossBox}>
           <CrossIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
