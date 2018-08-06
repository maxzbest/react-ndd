import React, { Component } from 'react';
import Input from '../Input';
import Button from '../Button';
import Svg from '../ImportImage';
import styles from './FormSearch.module.scss';

class FormSearch extends Component {
  state = {
    value: '',
  };

  handleTextChange = text => {
    this.setState({
      value: text,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <form action="search">
        <div className={styles.field__search}>
          <Input
            name="text-field"
            type="text"
            placeholder="Введите поисковое слово или фразу"
            onChange={this.handleTextChange}
            value={value}
          />
          <Button typebtn="search">
            <Svg name="search" />
          </Button>
        </div>
      </form>
    );
  }
}

export default FormSearch;
