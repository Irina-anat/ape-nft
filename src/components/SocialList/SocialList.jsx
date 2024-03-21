import { DiscordIcon } from 'components/Icons/DiscordIcon';
import css from './SocialList.module.css';
import { ShipIcon } from 'components/Icons/ShipIcon';
import { TwitterIcon } from 'components/Icons/TwitterIcon';

export const SocialList = () => {
    return (
        <>
            <ul className={css.socialList}>
          <li className={css.socialItem}>
            <a
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiscordIcon />
            </a>
          </li>
          <li className={css.socialItem}>
            <a
              href="https://ship.edu/academics/colleges/coehs/social_work/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShipIcon />
            </a>
          </li>
          <li className={css.socialItem}>
            <a
              href="https://twitter.com/?lang=uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
          </li>
        </ul>
        </>
    )
}