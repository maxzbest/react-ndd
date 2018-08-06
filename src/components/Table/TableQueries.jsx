import React from 'react';
import PropTypes from 'prop-types';
import Svg from '../ImportImage';
import styles from './Table.module.scss';

export default function TableQueries(props) {
  const { countData } = props;
  return (
    <div>
      <p className={styles.title}>
        Найдено запросов: <b>{countData}</b>
      </p>
      <table className={styles.table}>
        <thead className={styles.header}>
          <tr>
            <th rowSpan="2">№</th>
            <th className={styles.sorted} rowSpan="2">
              Федеральный округ, субъект РФ, муниципальный район, городской округ, населенный пункт (городской,
              сельский)
            </th>
            <th rowSpan="2">Наименование объекта инфраструктуры</th>
            <th rowSpan="2">
              Адрес для направления запроса на предоставление информации о доступе к конкретным объектам инфраструктуры
            </th>
            <th colSpan="2">
              Срок выполнения запроса на предоставление информации о доступе к конкретным объектам инфраструктуры
            </th>
            <th>
              Размер платы за предоставление информации о доступе к конкретным объектам инфраструктуры в случае, когда
              требуется проведение работ по осмотру, измерению, обследованию объекта инфраструктуры
            </th>
            <th rowSpan="2">
              Перечень требований к содержанию запроса на предоставление информации о доступе к конкретным объектам
              инфраструктуры и условиям его выполнения
            </th>
          </tr>
          <tr>
            <th>
              В случае, когда не требуется выполнение работ по осмотру, измерению, обследованию объекта инфраструктуры
            </th>
            <th>
              В случае, когда требуется проведение работ по осмотру, измерению, обследованию объекта инфраструктуры
            </th>
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
            <td>Ярославская область</td>

            <td>
              Специальные объекты инфраструктуры, в т.ч.: - сооружения связи, в том числе линейно-кабельные сооружения
              связи (за исключением кабелей связи, в том числе их части); - здания, сооружения либо отдельные помещения
              в них, специально созданные для размещения сетей электросвязи (их отдельных элементов); - столбовые и
              стоечные опоры. Сопряженные объекты инфраструктуры
            </td>

            <td>
              {
                ' Филиал ПАО /"Ростелеком/" в Ярославской и Костромской областях 150000, г. Ярославль, ул.\n\
                  Комсомольская, д.22 YR_Office@center.rt.ru Факс:+7(4852) 328491 Телефон:+7(4852) 204041'
              }
            </td>

            <td>25 рабочих дней со дня получения запроса</td>
            <td>30 рабочих дней со дня получения запроса</td>

            <td>
              <div>
                <a href="/15">
                  <Svg className={styles.svg} name="folder" />
                  <span>Прейскурант МРФ Центр</span>
                </a>
              </div>
            </td>

            <td>
              <div>
                <a href="/16">
                  <Svg className={styles.svg} name="folder" />
                  <span>Образцы Запроса и Заявления</span>
                </a>
              </div>
            </td>
          </tr>

          <tr>
            <td>1</td>
            <td>Ярославская область</td>
            <td>
              Специальные объекты инфраструктуры, в т.ч.: - сооружения связи, в том числе линейно-кабельные сооружения
              связи (за исключением кабелей связи, в том числе их части); - здания, сооружения либо отдельные помещения
              в них, специально созданные для размещения сетей электросвязи (их отдельных элементов); - столбовые и
              стоечные опоры. Сопряженные объекты инфраструктуры
            </td>
            <td>
              {
                ' Филиал ПАО /"Ростелеком/" в Ярославской и Костромской областях 150000, г. Ярославль, ул.\n\
                Комсомольская, д.22 YR_Office@center.rt.ru Факс:+7(4852) 328491 Телефон:+7(4852) 204041'
              }
            </td>
            <td>25 рабочих дней со дня получения запроса</td>
            <td>30 рабочих дней со дня получения запроса</td>
            <td>
              <div>
                <a href="/17">
                  <Svg className={styles.svg} name="folder" />
                  <span>Прейскурант МРФ Центр</span>
                </a>
              </div>
            </td>
            <td>
              <div>
                <a href="/18">
                  <Svg className={styles.svg} name="folder" />
                  <span>Образцы Запроса и Заявления</span>
                </a>
              </div>
            </td>
          </tr>

          <tr>
            <td>1</td>
            <td>Ярославская область</td>
            <td>
              Специальные объекты инфраструктуры, в т.ч.: - сооружения связи, в том числе линейно-кабельные сооружения
              связи (за исключением кабелей связи, в том числе их части); - здания, сооружения либо отдельные помещения
              в них, специально созданные для размещения сетей электросвязи (их отдельных элементов); - столбовые и
              стоечные опоры. Сопряженные объекты инфраструктуры
            </td>
            <td>
              {
                ' Филиал ПАО /"Ростелеком/" в Ярославской и Костромской областях 150000, г. Ярославль, ул.\n\
                Комсомольская, д.22 YR_Office@center.rt.ru Факс:+7(4852) 328491 Телефон:+7(4852) 204041'
              }
            </td>
            <td>25 рабочих дней со дня получения запроса</td>
            <td>30 рабочих дней со дня получения запроса</td>
            <td>
              <div />

              <div>
                <a href="/19">
                  <Svg className={styles.svg} name="folder" />
                  <span>Прейскурант МРФ Центр</span>
                </a>
              </div>
            </td>
            <td>
              <div />
              <div>
                <a href="/20">
                  <Svg className={styles.svg} name="folder" />
                  <span>Образцы Запроса и Заявления</span>
                </a>
              </div>
            </td>
          </tr>

          <tr>
            <td>1</td>
            <td>Ярославская область</td>
            <td>
              Специальные объекты инфраструктуры, в т.ч.: - сооружения связи, в том числе линейно-кабельные сооружения
              связи (за исключением кабелей связи, в том числе их части); - здания, сооружения либо отдельные помещения
              в них, специально созданные для размещения сетей электросвязи (их отдельных элементов); - столбовые и
              стоечные опоры. Сопряженные объекты инфраструктуры
            </td>
            <td>
              {
                ' Филиал ПАО /"Ростелеком/" в Ярославской и Костромской областях 150000, г. Ярославль, ул.\n\
                Комсомольская, д.22 YR_Office@center.rt.ru Факс:+7(4852) 328491 Телефон:+7(4852) 204041'
              }
            </td>
            <td>25 рабочих дней со дня получения запроса</td>
            <td>30 рабочих дней со дня получения запроса</td>
            <td>
              <div />

              <div>
                <a href="/21">
                  <Svg className={styles.svg} name="folder" />
                  <span>Прейскурант МРФ Центр</span>
                </a>
              </div>
            </td>
            <td>
              <div />
              <div>
                <a href="/22">
                  <Svg className={styles.svg} name="folder" />
                  <span>Образцы Запроса и Заявления</span>
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

TableQueries.propTypes = {
  countData: PropTypes.number,
};

TableQueries.defaultProps = {
  countData: 0,
};
