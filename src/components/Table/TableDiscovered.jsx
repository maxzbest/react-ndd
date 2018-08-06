import PropTypes from 'prop-types';
import React from 'react';
import styles from './Table.module.scss';
import Svg from '../ImportImage';

export default function TableDiscoveredObjects(props) {
  const { countData } = props;
  return (
    <div>
      <p className={styles.title}>
        Найдено: <b>{countData}</b>
      </p>
      <table className={styles.table}>
        <colgroup>
          <col className={styles.cell_size} />
          <col className={styles.cell_smallMiddle} />
          <col className={styles.cell_smallMiddle} />
          <col className={styles.cell_smallMiddle} />
          <col className={styles.cell_largest} />
          <col className={styles.cell_smallMiddle} />
          <col className={styles.cell_small} />
        </colgroup>
        <thead className={styles.header}>
          <tr>
            <th>№</th>
            <th className={styles.sorted}>МРФ Ростелекома</th>
            <th>Субъект РФ</th>
            <th>Дата обнаружения</th>
            <th>Наименование и&nbsp;местонахождения обнаруженного имущества</th>
            <th>Протяженность, м</th>
            <th>Маркировка кабеля</th>
          </tr>
          <tr className={styles.sort}>
            <th>&nbsp;</th>
            <th className={styles.sorted}>
              <div>
                <button type="button">
                  <Svg name="triangleUp" />
                </button>
                <button type="button">
                  <Svg name="triangleDown" />
                </button>
              </div>
            </th>
            <th>
              <div>
                <button type="button">
                  <Svg name="triangleUp" />
                </button>
                <button type="button">
                  <Svg name="triangleDown" />
                </button>
              </div>
            </th>
            <th>
              <div>
                <button type="button">
                  <Svg name="triangleUp" />
                </button>
                <button type="button">
                  <Svg name="triangleDown" />
                </button>
              </div>
            </th>
            <th>
              <div>
                <button type="button">
                  <Svg name="triangleUp" />
                </button>
                <button type="button">
                  <Svg name="triangleDown" />
                </button>
              </div>
            </th>
            <th>
              <div>
                <button type="button">
                  <Svg name="triangleUp" />
                </button>
                <button type="button">
                  <Svg name="triangleDown" />
                </button>
              </div>
            </th>
            <th>
              <div>
                <button type="button">
                  <Svg name="triangleUp" />
                </button>
                <button type="button">
                  <Svg name="triangleDown" />
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className={styles.body}>
          <tr>
            <td>1</td>
            <td>Юг</td>
            <td>Волгоградская область</td>
            <td>15.07.2013</td>
            <td>
              Кабель на участкe г. Волгоград, муфта М (б/н) в ККС №466 (ул. Рихарда Зорге) - ККС № 824 (ул. Н. Отрады)
            </td>
            <td>11389</td>
            <td>ВОК</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Юг</td>
            <td>Волгоградская область</td>
            <td>15.07.2013</td>
            <td>
              Кабель на участке г. Волгоград, муфта М (б/н) в ККС №4 (ул. Землячки) - адм/зд ОДКБ (ул. Землячки, 76)
            </td>
            <td>3042</td>
            <td>ВОК</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

TableDiscoveredObjects.propTypes = {
  countData: PropTypes.number,
};

TableDiscoveredObjects.defaultProps = {
  countData: 0,
};
