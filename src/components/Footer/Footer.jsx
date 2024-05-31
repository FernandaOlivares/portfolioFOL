import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.contact}>
      <a href="https://www.linkedin.com/in/fernandaolivareslisperguer/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
        {'  '}
      </a>
      <a href="https://github.com/fernandaolivares" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
        {'  '}
      </a>
      <a href="mailto:folivareslisperguer@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
        {'  '}folivareslisperguer@gmail.com
      </a>
      </div>
      <p className={styles.madeWithLove}>
      Made with{' '}
      <span style={{ color: 'turquoise' }}>
        ♥
      </span>
      {' '} by Fernanda Olivares Lisperguer
    </p>
  </footer>
);

export default Footer;
