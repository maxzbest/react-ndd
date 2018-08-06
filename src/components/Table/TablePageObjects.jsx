import PropTypes from 'prop-types';
import React from 'react';
import styles from './Table.module.scss';
import Svg from '../ImportImage';

export default function TablePageObjects(props) {
  const { countData } = props;
  return (
    <div>
      <p className={styles.title}>
        Найдено объектов инфраструктуры: <b>{countData}</b>
      </p>
      <table className={styles.table}>
        <thead className={styles.header}>
          <tr>
            <th rowSpan="2">№</th>
            <th rowSpan="2" className={styles.sorted}>
              МРФ Ростелекома
            </th>
            <th rowSpan="2">Наименование объекта инфраструктуры</th>
            <th rowSpan="2">
              Перечень специальных объектов инфраструктуры (местонахождение специального объекта инфраструктуры)
            </th>
            <th rowSpan="2">
              Перечень актов, которыми установлены требования к специальным объектам инфраструктуры и нормы их
              проектирования, технические требования к размещению сетей электросвязи (их отдельных элементов) на
              специальных объектах инфраструктуры, общие требования по техническому обслуживанию специальных объектов
              инфраструктуры
            </th>
            <th rowSpan="2">
              Перечень актов, которыми установлены требования к сопряженным объектам инфраструктуры, технологические
              нормы и требования к размещению сетей электросвязи (их отдельных элементов) на сопряженных объектах
              инфраструктуры, нормы проектирования сопряженных объектов инфраструктуры, иные требования, обеспечивающие
              возможность размещения сетей электросвязи (их отдельных элементов) на сопряженных объектах инфраструктуры
            </th>
            <th colSpan="2">Порядок формирования тарифов за предоставление доступа к инфраструктуре</th>
          </tr>
          <tr>
            <th>
              Ссылки на документы, устанавливающие порядок формирования тарифов за предоставление доступа к
              инфраструктуре
            </th>
            <th> Условия дифференциации тарифов</th>
          </tr>
          <tr className={styles.sort}>
            <th />
            <th className={styles.sorted}>
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
            <th />
            <th />
          </tr>
        </thead>

        <tbody className={styles.body}>
          <tr>
            <td>1</td>
            <td>Волга</td>
            <td>Столбовые и стоечные опоры</td>
            <td>Саратовская область, Балаковский район, с. Быков Отрог, ул. Рабочая</td>
            <td>устанавливается п. 5 Правил НДД</td>
            <td>устанавливается п. 6 Правил НДД</td>
            <td>
              <a href="/price">
                <Svg className={styles.svg} name="folder" /> Прейскурант МРФ Центр
              </a>
            </td>
            <td>
              <a href="/price">
                <Svg className={styles.svg} name="folder" /> Прейскурант МРФ Центр
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

TablePageObjects.propTypes = {
  countData: PropTypes.number,
};

TablePageObjects.defaultProps = {
  countData: 0,
};
