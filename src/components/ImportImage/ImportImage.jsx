import React from 'react';
import universal from 'react-universal-component';
import PropTypes from 'prop-types';

export default function Svg({ name }) {
  const UniversalComponent = universal(import(`./images/${name}.svg`));
  return <UniversalComponent name={name} />;
}

Svg.propTypes = {
  name: PropTypes.string.isRequired,
};
