import PropTypes from 'prop-types';
import React from 'react';

export default function Input(props) {
  const onChange = e => props.onChange(e.target.value);
  return <input {...props} onChange={onChange} />;
}

Input.propTypes = {
  className: PropTypes.string,
  typeInput: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  inputId: PropTypes.string,
  name: PropTypes.string.isRequired,
  patternInput: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
};
Input.defaultProps = {
  className: '',
  typeInput: 'text',
  placeholder: '',
  value: '',
  inputId: '',
  patternInput: '',
};
