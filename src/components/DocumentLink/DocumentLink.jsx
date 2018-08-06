import React from 'react';
import PropTypes from 'prop-types';
import Svg from '../ImportImage';
import styles from './DocumentLink.module.scss';

const DocumentLink = props => {
  const { imageName, docName, link } = props;
  return (
    <a href={link} className={styles.document__item} target="_blank" rel="noopener noreferrer">
      <Svg name={imageName} />
      <div className={styles.document__name}>{docName}</div>
    </a>
  );
};
DocumentLink.propTypes = {
  imageName: PropTypes.string.isRequired,
  docName: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
export default DocumentLink;
