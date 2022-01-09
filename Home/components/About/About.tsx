import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMugHot,
  faEnvelope,
  faStickyNote,
} from '@fortawesome/free-solid-svg-icons';

import {
  faTwitter,
  faGithub,
  faGoodreads,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import { socialLinks } from './style';

export const About: FC = () => (
  <section id="about">
    <p>Hi, I&apos;m TK!</p>
    <p style={socialLinks}>
      Find me{' '}
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/imteekay"
        title="github"
      >
        building on github <FontAwesomeIcon icon={faGithub} />
      </a>
    </p>
    <p style={socialLinks}>
      and sharing my{' '}
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/wordsofteekay"
        title="twitter"
      >
        thoughts on twitter <FontAwesomeIcon icon={faTwitter} />
      </a>
    </p>
    <p>
      Find my books reviews on
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.goodreads.com/iamteekay"
        title="goodreads"
      >
        {' '}
        goodreads <FontAwesomeIcon icon={faGoodreads} />
      </a>
    </p>
    <p className="no-margin">You can support my work on</p>
    <a
      className="icon"
      target="_blank"
      rel="noopener noreferrer"
      href="https://ko-fi.com/teekay"
      title="kofi"
    >
      ko-fi <FontAwesomeIcon icon={faMugHot} />
    </a>
    , and
    <a
      className="icon"
      target="_blank"
      rel="noopener noreferrer"
      href="https://teekay.substack.com/"
      title="substack"
    >
      {' '}
      substack <FontAwesomeIcon icon={faEnvelope} />
    </a>
    <p className="no-margin-bottom">
      For work stuff:{' '}
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/imtk"
        title="linkedin"
      >
        linkedin <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </p>
    <p className="no-margin">
      <span> or my</span>
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="./cv.pdf"
        title="cv"
      >
        {' '}
        cv <FontAwesomeIcon icon={faStickyNote} />
      </a>
    </p>
  </section>
);
