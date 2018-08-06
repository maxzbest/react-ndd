import 'react-select/dist/react-select.css';
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import styles from './Select.module.scss';

export default function SelectForm(props) {
  const handleChange = selectedOption => {
    const { handleSelect } = props;
    handleSelect(selectedOption);
  };

  const { options, value } = props;

  return (
    <Select
      className={styles.select}
      name="form-field-name"
      escapeClearsValue={false}
      value={value}
      placeholder="Поиск"
      clearable={false}
      onChange={handleChange}
      noResultsText="Совпадений не найдено"
      options={options}
    />
  );
}

SelectForm.defaultProps = {
  options: [],
  handleSelect: () => {},
};

SelectForm.propTypes = {
  value: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  handleSelect: PropTypes.func,
};
