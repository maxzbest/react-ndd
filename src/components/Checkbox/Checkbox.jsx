import React, { Component } from 'react';

import PropTypes from 'prop-types';
import styles from './Checkbox.module.scss';

export default class Checkbox extends Component {
  handleModeChange = e => {
    const { handleChange } = this.props;
    handleChange(e.target.checked);
  };

  render() {
    const { isChecked } = this.props;
    return (
      <label htmlFor="feedback-checkbox" className={styles.checkbox__label}>
        <input
          className={styles.checkbox}
          checked={isChecked}
          type="checkbox"
          id="feedback-checkbox"
          onChange={this.handleModeChange}
        />
        Я подтверждаю, что контактные данные верны. В случае указания неправильных данных со мной не смогут связаться.
      </label>
    );
  }
}

Checkbox.propTypes = {
  handleChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool,
};
Checkbox.defaultProps = {
  isChecked: false,
};
