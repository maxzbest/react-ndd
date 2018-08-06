import React, { Component } from 'react';
import SelectForm from '../Select';
import Button from '../Button';
import styles from './RegionModal.module.scss';

const DEFAULT_VALUE_SELECT = { value: '1', label: '1' };

export default class RegionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRegion: DEFAULT_VALUE_SELECT,
    };
  }

  handleSelectRegion = value => {
    this.setState({
      selectedRegion: value,
    });
  };

  render() {
    const { selectedRegion } = this.state;
    const value = selectedRegion && selectedRegion.value;
    return (
      <form className={styles.region}>
        <h1>Выберите ваш регион</h1>
        <div className={styles.inputField}>
          <SelectForm
            options={[
              { value: '1', label: 'Все' },
              { value: '2', label: 'Волга' },
              { value: '3', label: 'Дальний Восток' },
              { value: '4', label: 'Северо-Запад' },
              { value: '5', label: 'Сибирь' },
              { value: '6', label: 'Забайкальский край' },
              { value: '7', label: 'Урал' },
              { value: '8', label: 'Центр' },
              { value: '9', label: 'Юг' },
            ]}
            defaultValue={selectedRegion}
            handleSelect={this.handleSelectRegion}
            value={value}
          />
        </div>

        <div className={styles.region__footer}>
          <div className={styles.submit}>
            <Button typebtn="warning">Выбрать</Button>
          </div>
        </div>
      </form>
    );
  }
}
