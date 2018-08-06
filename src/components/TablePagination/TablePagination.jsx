import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';
import styles from './TablePagination.module.scss';

const ITEMS_COUNT_PER_PAGE = 50;

export default function TablePagination(props) {
  const { activePage, onChange, totalItemsCount } = props;

  const currentInterval = () => {
    const a = 1 + ITEMS_COUNT_PER_PAGE * (activePage - 1);
    const b = a + ITEMS_COUNT_PER_PAGE - 1;
    return b < totalItemsCount ? `${a} - ${b}` : `${a} - ${totalItemsCount}`;
  };

  return (
    <div>
      <p className={styles.interval}>
        {currentInterval()} из {totalItemsCount}
      </p>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={ITEMS_COUNT_PER_PAGE}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={6}
        onChange={onChange}
        innerClass={styles.pagination}
        itemClass={styles.section}
        linkClass={styles.link}
        disabledClass={styles.disabled}
        activeClass={styles.active}
        firstPageText="Первая"
        lastPageText="Последняя"
        prevPageText="← Предыдущая"
        nextPageText="Следующая →"
      />
    </div>
  );
}

TablePagination.propTypes = {
  activePage: PropTypes.number,
  onChange: PropTypes.func,
  totalItemsCount: PropTypes.number,
};

TablePagination.defaultProps = {
  activePage: 1,
  onChange: () => {},
  totalItemsCount: 0,
};
