import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

const Button = ({ typebtn, children, onClick }) => (
  <button
    type="button"
    className={cn('btn', styles.btn, { [styles[typebtn]]: typebtn })}
    onClick={onClick}
    typebtn={typebtn}
  >
    {children}
  </button>
);

Button.propTypes = {
  typebtn: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  typebtn: 'default',
  onClick: () => {},
};

export default Button;
