import css from './LogoImage.module.css';
import { LogoIcon } from 'components/Icons/LogoIcon';

export const LogoImage = () => {

    return (
        <div className={css.logoBox}>
            <a href="https://irina-anat.github.io/ape-nft/">
                <LogoIcon />
            </a>
        </div>
    )
};


