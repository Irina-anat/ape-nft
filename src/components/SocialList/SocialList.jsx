import { DiscordIcon } from 'components/Icons/DiscordIcon';
import { ShipIcon } from 'components/Icons/ShipIcon';
import { TwitterIcon } from 'components/Icons/TwitterIcon';
import css from './SocialList.module.css';
import { useScroll } from 'hooks/useScroll';

export const SocialList = () => {
  const isScrolled = useScroll();

    return (
        <>
            <ul className={`${css.socialList} ${isScrolled ? css.scrolled : ''}`}>
          <li className={css.socialItem}>
            <a
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiscordIcon/>
            </a>
          </li>
          <li className={css.socialItem}>
            <a
              href="https://ship.edu/academics/colleges/coehs/social_work/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShipIcon/>
            </a>
          </li>
          <li className={css.socialItem}>
            <a
              href="https://twitter.com/?lang=uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon/>
            </a>
          </li>
        </ul>
        </>
    )
}