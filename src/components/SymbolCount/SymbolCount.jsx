import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import styles from './SymbolCount.module.scss';

export default function SymbolCount(props) {
  const { count, type } = props;
  return (
    <div
      className={cn({
        [styles.valid]: type === 'valid',
        [styles.invalid]: type === 'invalid',
      })}
    >
      Осталось {count} символов
    </div>
  );
}

SymbolCount.propTypes = {
  count: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
