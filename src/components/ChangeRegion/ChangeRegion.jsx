import React from 'react';
import PropTypes from 'prop-types';
import Svg from '../ImportImage';
import styles from './ChangeRegion.module.scss';

const ChangeRegion = ({ isModalOpen, region }) => (
  <div className={styles.region}>
    <span>Ваш регион:</span>
    <button type="button" onClick={isModalOpen} className={styles.region__link}>
      {region}
      <Svg name="arrow-down" />
    </button>
  </div>
);

export default ChangeRegion;

ChangeRegion.propTypes = {
  isModalOpen: PropTypes.func,
  region: PropTypes.string,
};

ChangeRegion.defaultProps = {
  isModalOpen: () => {},
  region: 'Ульновская область',
};
