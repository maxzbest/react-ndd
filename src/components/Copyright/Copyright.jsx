import React from 'react';
import styles from './Copyright.module.scss';

const Copyright = () => (
  <div className={styles.copyright}>
    <div className={styles.copyright__info}>
      © 2018
      <a className={styles.copyright__link} href="http://rt.ru" target="_blank" rel="noopener noreferrer">
        ПАО «Ростелеком»
      </a>
    </div>
    <div className={styles.copyright__support}>
      Сайт поддерживает следующие браузеры: Internet Explorer версии 10 и выше, последние версии Chrome, Opera, Firefox,
      Safari, Edge.
    </div>
  </div>
);
export default Copyright;
