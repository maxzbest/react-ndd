import React from 'react';
import styles from './Tipografy.module.scss';

export default function Tiporgafy() {
  return (
    <section className={`${styles.tiporafi_section}`}>
      <h1>Заголовок!!</h1>
      <p>Просто параграф </p>
      <br />
      <ul>
        <li>test ul</li>
        <li>test ul</li>
      </ul>
      <br />
      <ol>
        <li>test ol</li>
        <li>test ol</li>
      </ol>
      <br />
      <a href="/">Ссылка</a>
    </section>
  );
}
