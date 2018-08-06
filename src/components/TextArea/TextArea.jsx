import PropTypes from 'prop-types';
import React from 'react';

export default function TextArea(props) {
  const onChange = e => props.onChange(e.target.value);
  return <textarea {...props} onChange={onChange} />;
}

TextArea.propTypes = {
  className: PropTypes.string,
  textAreaId: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
};
TextArea.defaultProps = {
  className: '',
  textAreaId: '',
  name: '',
  text: '',
};
