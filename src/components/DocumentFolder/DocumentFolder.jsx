import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Svg from '../ImportImage';
import styles from './DocumentFolder.module.scss';

export default class DocumentFolder extends Component {
  state = {
    isOpenDoc: false,
  };

  setClassNameRow = () => {
    const { isOpenDoc } = this.state;
    return isOpenDoc ? styles.show : styles.hide;
  };

  showDoc = () => {
    this.setState(prevState => ({
      isOpenDoc: !prevState.isOpenDoc,
    }));
  };

  renderRows(items) {
    return items.map(item => (
      <tr key={item.id} className={this.setClassNameRow()}>
        <td />
        <td className={styles.innerdoc}>
          <a href={item.link}>{item.name}</a>
        </td>
        <td className={styles.tdimages}>
          <a href={item.link}>
            <Svg name={item.type} />
          </a>
        </td>
      </tr>
    ));
  }

  render() {
    const { number, name, items } = this.props;
    return (
      <Fragment>
        <tr>
          <td>{number}</td>
          <td className={styles.title}>
            <button type="button" onClick={this.showDoc}>
              <Svg name="folder" />
              <span>{name}</span>
            </button>
          </td>
          <td />
        </tr>
        {this.renderRows(items)}
      </Fragment>
    );
  }
}

DocumentFolder.propTypes = {
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ),
};

DocumentFolder.defaultProps = {
  items: [{}],
};
