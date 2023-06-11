import Link from 'next/link';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { homeLinkStyle, iconStyle } from './styles';

export const HomeLink: FC = () => (
  <Link
    href="/"
    id="menu-icon"
    data-testid="home-link"
    className={homeLinkStyle}
  >
    <FontAwesomeIcon icon={faLongArrowAltLeft} className={iconStyle} />
    Home
  </Link>
);
