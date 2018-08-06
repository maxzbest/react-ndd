import React from 'react';
import { Link } from 'react-router-dom';
import PrevCard from '../PrevCard';
import Svg from '../ImportImage';
import styles from './PageMain.module.scss';
import DocumentLink from '../DocumentLink';

const previews = [
  {
    id: 1,
    svg: 'point',
    title: 'Информация об объектах инфраструктуры',
    text: 'Перечень объектов инфраструктуры ПАО «Ростелеком», к которым предоставляется доступ',
    link: 'obj',
  },
  {
    id: 2,
    svg: 'inbox',
    title: 'Порядок и условия выполнения запросов',
    text:
      'Сведения о порядке выполнения запросов на предоставление информации о доступе к инфраструктуре ПАО «Ростелеком»',
    link: 'queries',
  },
  {
    id: 3,
    svg: 'book',
    title: 'Реестр заявлений о предоставлении доступа к инфраструктуре',
    text: 'Реестр заявлений о предоставлении доступа к объектам инфраструктуры ПАО «Ростелеком»',
    link: 'advertisement',
  },
  {
    id: 4,
    svg: 'document',
    title: 'Библиотека документов',
    text: 'Нормативно-правовые акты, тарифы и иные документы о доступе к инфраструктуре ПАО «Ростелеком»',
    link: 'doc',
  },
  {
    id: 5,
    svg: 'search-blue',
    title: 'Реестр обнаруженного имущества',
    text: 'Информация об обнаруженном имуществе, размещенном на объектах инфраструктуры ПАО «Ростелеком»',
    link: 'havings',
  },
];

const PageMain = () => (
  <div className={styles.container}>
    <div className={styles.prevcards}>
      <div className={styles.prevcards__title}>
        Веб-портал предназначен для публикации в сети Интернет сведений об объектах инфраструктуры ПАО «Ростелеком» и
        реестра заявлений на предоставление доступа к инфраструктуре, направляемых различными компаниями в ПАО
        «Ростелеком»
      </div>
      <div className={styles.prevcards__items}>
        {previews.map(elem => (
          <Link key={elem.id} to={elem.link}>
            <PrevCard icon={<Svg name={elem.svg} />} title={elem.title} text={elem.text} />
          </Link>
        ))}
      </div>
    </div>
    <div className={styles.documents}>
      <h2 className={styles.documents__title}>Основополагающие документы</h2>
      <div className={styles.documents__container}>
        <DocumentLink
          imageName="pdf"
          docName="Постановление Правительства РФ «Об утверждении Правил недискриминационного доступа к инфраструктуре для размещения сетей электросвязи"
          link="http://ndd.rostelecom.ru/docs/postanovlenie_pravitelstva_ob_NDD.pdf"
        />
        <DocumentLink
          imageName="pdf"
          docName="Приказ ФАС «Об утверждении форм раскрытия информации, предусмотренной Правилами недискриминационного доступа к инфраструктуре для размещения сетей электросвязи, а также правил заполнения указанных форм»"
          link="http://ndd.rostelecom.ru/docs/postanovlenie_pravitelstva_ob_NDD.pdf"
        />
      </div>
      <h2 className={styles.documents__title}>Публичная оферта</h2>
      <div className={styles.documents__container}>
        <DocumentLink
          imageName="pdf"
          docName="Публичная оферта о заключении договора на выполнение работ по осмотру, измерению и обследованию объектов инфраструктуры ПАО «Ростелеком»"
          link="http://ndd.rostelecom.ru/docs/postanovlenie_pravitelstva_ob_NDD.pdf"
        />
        <DocumentLink
          imageName="doc"
          docName="Приложения к публичной оферте о заключении договора на выполнение работ по осмотру, измерению и обследованию объектов инфраструктуры ПАО «Ростелеком»"
          link="http://ndd.rostelecom.ru/docs/postanovlenie_pravitelstva_ob_NDD.pdf"
        />
      </div>
    </div>
  </div>
);
export default PageMain;
