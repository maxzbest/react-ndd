import React, { Component } from 'react';
import SelectForm from '../Select';
import Button from '../Button';
import Input from '../Input';
import styles from './CalcModal.module.scss';
import Svg from '../ImportImage';

const DEFAULT_VALUE_SELECT = { value: '1', label: '1' };

export default class CalcModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRegion: DEFAULT_VALUE_SELECT,
      inputLength: '',
      inputTerm: '',
      inputQuantity: '',
    };
  }

  handleInputLength = value => {
    this.setState({
      inputLength: value,
    });
  };

  handleInputTerm = value => {
    this.setState({
      inputTerm: value,
    });
  };

  handleChangeQuantity = value => {
    this.setState({
      inputQuantity: value,
    });
  };

  handleSelectRegion = value => {
    this.setState({
      selectedRegion: value,
    });
  };

  render() {
    const { inputLength, inputTerm, inputQuantity, selectedRegion } = this.state;
    const value = selectedRegion && selectedRegion.value;
    return (
      <form className={styles.modal}>
        <h1>Калькулятор стоимости доступа к кабельной канализации</h1>
        <div className={styles.input}>
          <p className={styles.title}>Регион</p>
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
        <div className={styles.input}>
          <p className={styles.title}>Протяжённость, м</p>
          <Input onChange={this.handleInputLength} value={inputLength} />
        </div>
        <div className={styles.input}>
          <p className={styles.title}>Срок использования, мес.</p>
          <Input onChange={this.handleInputTerm} value={inputTerm} />
        </div>
        <div className={styles.input}>
          <p className={styles.title}>
            Количество участков для проведения работ по осмотру, измерению, обследованию, шт.
          </p>
          <Input onChange={this.handleChangeQuantity} value={inputQuantity} />
          <div className={styles.submit}>
            <p>
              Подсчет носит приблизительный характер и не является публичной офертой. За точными данными, пожалуйста,
              обращайтесь в соответствующий региональный филиал «Ростелекома» (контакты см. в разделе
              <a href="/requests">«Запросы»</a>).
            </p>
            <Button typebtn="warning">
              <Svg name="calc" />
              Рассчитать
            </Button>
          </div>
        </div>
      </form>
    );
  }
}
