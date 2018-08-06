import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import styles from './Table.module.scss';
import Svg from '../ImportImage';

export default function TablePageStatements(props) {
  const statementsData = [
    {
      id: 1,
      subj: 'Тюменская область',
      number: '0508/32/52-18',
      date: '27.06.2018 11:00:25',
      form: 'МТС',
      infrastr: 'ЛКСС г.Тюмень, участок ул.Полевая, 102/1, КК №43-1003- ул.Полевая, 102/1, КК №43-1002',
      timeUse: '',
      files: '',
    },
    {
      id: 2,
      subj: 'Тюменская область',
      number: '0508/32/52-18',
      date: '27.06.2018 11:00:25',
      form: 'МТС',
      infrastr: 'ЛКСС г.Тюмень, участок ул.Полевая, 102/1, КК №43-1003- ул.Полевая, 102/1, КК №43-1002',
      timeUse: '',
      files: '',
    },
    {
      id: 3,
      subj: 'Тюменская область',
      number: '0508/32/52-18',
      date: '27.06.2018 11:00:25',
      form: 'МТС',
      infrastr: 'ЛКСС г.Тюмень, участок ул.Полевая, 102/1, КК №43-1003- ул.Полевая, 102/1, КК №43-1002',
      timeUse: '',
      files: '',
    },
    {
      id: 4,
      subj: 'Тюменская область',
      number: '0508/32/52-18',
      date: '27.06.2018 11:00:25',
      form: 'МТС',
      infrastr: 'ЛКСС г.Тюмень, участок ул.Полевая, 102/1, КК №43-1003- ул.Полевая, 102/1, КК №43-1002',
      timeUse: '',
      files: '',
    },
  ];
  const { countData } = props;
  return (
    <div>
      <p className={styles.title}>
        Найдено заявлений: <b>{countData}</b>
      </p>
      <table className={cn(styles.table, styles.table_statements)}>
        <thead className={styles.header}>
          <tr>
            <th className={styles.cell_43} rowSpan="2">
              №
            </th>
            <th className={styles.cell_100} rowSpan="2">
              Субъект РФ/МРФ Ростелекома
            </th>
            <th className={styles.cell_100} rowSpan="2">
              Номер заявления
            </th>
            <th className={styles.cell_100} rowSpan="2">
              Дата и время поступления заявления
            </th>
            <th className={styles.cell_260} rowSpan="2">
              Наименование и организационно-правовая форма заявителя
            </th>
            <th className={styles.cell_261} rowSpan="2">
              Наименование и описание объекта инфраструктуры, к которому запрашивается доступ{' '}
            </th>
            <th className={styles.cell_100} rowSpan="2">
              Планируемый срок начала использования объекта инфраструктуры
            </th>
            <th className={styles.cell_115} rowSpan="2">
              Дополнительные файлы
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
            <th>
              <button type="button">
                <Svg name="triangleUp" />
              </button>
              <button type="button">
                <Svg name="triangleDown" />
              </button>
            </th>
            <th>
              <button type="button">
                <Svg name="triangleUp" />
              </button>
              <button type="button">
                <Svg name="triangleDown" />
              </button>
            </th>
            <th>
              <button type="button">
                <Svg name="triangleUp" />
              </button>
              <button type="button">
                <Svg name="triangleDown" />
              </button>
            </th>
            <th>
              <button type="button">
                <Svg name="triangleUp" />
              </button>
              <button type="button">
                <Svg name="triangleDown" />
              </button>
            </th>
            <th />
            <th />
          </tr>
        </thead>

        <tbody className={styles.body}>
          {statementsData.map(elem => (
            <tr key={elem.id}>
              <td className={styles.cell_43}>{elem.id}</td>
              <td className={styles.cell_100}>{elem.subj}</td>
              <td className={styles.cell_100}>{elem.number}</td>
              <td className={styles.cell_100}>{elem.date}</td>
              <td className={styles.cell_260}>{elem.form}</td>
              <td className={styles.cell_261}>{elem.infrastr}</td>
              <td className={styles.cell_100} />
              <td className={styles.cell_115} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TablePageStatements.propTypes = {
  countData: PropTypes.number,
};

TablePageStatements.defaultProps = {
  countData: 0,
};
