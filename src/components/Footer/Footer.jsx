import React from 'react';
import Navigation from '../Navigation';
import Copyright from '../Copyright';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__container}>
      <Navigation />
      <Copyright />
    </div>
  </footer>
);
export default Footer;
