import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Moment from 'moment';
import 'moment/locale/ru';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from './Datepicker.module.scss';

const Datepicker = props => {
  const { selected } = props;
  const onChange = e => props.onChange(e);

  return (
    <DatePicker selected={selected} onChange={onChange} locale="ru" dateFormat="DD.MM.YYYY" className={styles.date} />
  );
};
export default Datepicker;

Datepicker.propTypes = {
  selected: PropTypes.instanceOf(Moment),
  onChange: PropTypes.func,
};

Datepicker.defaultProps = {
  selected: null,
  onChange: () => {},
};
