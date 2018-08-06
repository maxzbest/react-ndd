import React, { Component } from 'react';

import SymbolCount from '../SymbolCount';
import TextArea from '../TextArea';
import styles from './TextAreaWithCounter.module.scss';

const MAX_LENGTH = 500;

export default class TextAreaWithCounter extends Component {
  state = {
    value: '',
  };

  getCounterType() {
    const { value } = this.state;
    if (value.length && value.length <= MAX_LENGTH) return 'valid';
    return 'invalid';
  }

  handletextAreaValueChange = text => {
    this.setState({
      value: text,
    });
  };

  renderCounter() {
    const { value } = this.state;
    if (value.length === 0) {
      return <div className={styles.invalid}>Обязательное поле</div>;
    }

    if (value.length > MAX_LENGTH) {
      return <div className={styles.invalid}>Превышено максимальное кол-во символов ({MAX_LENGTH})</div>;
    }

    return <SymbolCount count={MAX_LENGTH - value.length} type={this.getCounterType()} />;
  }

  render() {
    return (
      <div>
        <TextArea onChange={this.handletextAreaValueChange} />
        {this.renderCounter()}
      </div>
    );
  }
}
