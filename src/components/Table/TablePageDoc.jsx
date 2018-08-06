import React from 'react';
import styles from './Table.module.scss';
import Svg from '../ImportImage';
import DocumentFolder from '../DocumentFolder';
import DOCS from './createDocArray';

export default function TablePageDoc() {
  return (
    <table className={styles.table}>
      <thead className={styles.header}>
        <tr>
          <th className={styles.cell_43} rowSpan="2">
            №
          </th>
          <th className={styles.cell_921} rowSpan="2">
            Название
          </th>
          <th className={styles.cell_115} rowSpan="2">
            Тип
          </th>
        </tr>
        <tr />
        <tr className={styles.sort}>
          <th />
          <th>
            <button type="button">
              <Svg name="triangleUp" />
            </button>
            <button type="button">
              <Svg name="triangleDown" />
            </button>
          </th>
          <th />
        </tr>
      </thead>

      <tbody className={styles.body}>{DOCS.map(elem => <DocumentFolder key={elem.number} {...elem} />)}</tbody>
    </table>
  );
}
