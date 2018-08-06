import React from 'react';
import styles from './FormDate.module.scss';
import Datepicker from '../Datepicker';

export default function FormDate() {
  return (
    <div>
      <div className={styles.label}>Дата обращения</div>
      <div className={styles.field}>
        <div className={styles.label}>От</div>
        <Datepicker />
        <div className={styles.label}>До</div>
        <Datepicker />
      </div>
    </div>
  );
}
