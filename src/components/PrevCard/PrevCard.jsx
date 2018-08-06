import PropTypes from 'prop-types';
import React from 'react';
import styles from './PrevCard.module.scss';

export default function PrevCard(props) {
  const { icon, title, text } = props;

  return (
    <div className={styles.card}>
      <article className={styles.card__item}>
        <header className={styles.card__header}>{icon}</header>
        <div className={styles.card__title}>
          <p className={styles.card__title_text}>{title}</p>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.card__footer_wrap}>
            <p className={styles.card__footer_text}>{text}</p>
          </div>
        </div>
      </article>
    </div>
  );
}

PrevCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
