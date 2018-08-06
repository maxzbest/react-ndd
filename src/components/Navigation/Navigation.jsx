import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

const NAVIGATION_BAR = [
  {
    label: 'Объекты',
    link: 'obj',
  },
  {
    label: 'Запросы',
    link: 'queries',
  },
  {
    label: 'Заявления',
    link: 'statement',
  },
  {
    label: 'Документы',
    link: 'doc',
  },
  {
    label: 'Обнаруженное имущество',
    link: 'havings',
  },
  {
    label: 'Обратная связь',
    link: 'feedback',
  },
];

export default function Navigation() {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          {NAVIGATION_BAR.map(elem => (
            <Link key={elem.link} className={styles.link} to={elem.link}>
              {elem.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
