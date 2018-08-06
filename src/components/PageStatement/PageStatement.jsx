import React, { Component } from 'react';
import SelectForm from '../Select';
import Button from '../Button';
import Input from '../Input';
import Svg from '../ImportImage';
import styles from './PageStatement.module.scss';
import TablePagination from '../TablePagination';
import TablePageStatements from '../Table/TablePageStatements';
import Datepicker from '../Datepicker';

const DEFAULT_VALUE_SELECT = { value: '1', label: '1' };

export default class PageStatement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDateUseFrom: null,
      selectedDateUseTo: null,
      selectedDateSendTo: null,
      selectedDateSendFrom: null,
      activePage: 1,
      countData: 520,
      inputValueObj: '',
      inputValueName: '',
      inputValueNumber: '',
      selectedMRF: DEFAULT_VALUE_SELECT,
    };
  }

  handleChangeInputObj = value => {
    this.setState({
      inputValueObj: value,
    });
  };

  handleChangeInputName = value => {
    this.setState({
      inputValueName: value,
    });
  };

  handleChangeInputNumber = value => {
    this.setState({
      inputValueNumber: value,
    });
  };

  handleChangeDate = stateName => selected => {
    this.setState({ [stateName]: selected });
  };

  handleSelectMRF = value => {
    this.setState({
      selectedMRF: value,
    });
  };

  clearInputs = () => {
    this.setState({
      inputValueObj: '',
      inputValueName: '',
      inputValueNumber: '',
      selectedDateSendTo: null,
      selectedDateSendFrom: null,
      selectedDateUseFrom: null,
      selectedDateUseTo: null,
      selectedMRF: DEFAULT_VALUE_SELECT,
    });
  };

  handlePageChange = pageNumber => {
    this.setState({ activePage: pageNumber });
  };

  render() {
    const {
      selectedDateSendTo,
      selectedDateSendFrom,
      selectedDateUseFrom,
      selectedDateUseTo,
      inputValueObj,
      inputValueName,
      inputValueNumber,
      selectedMRF,
      countData,
      activePage,
    } = this.state;
    const valueMRF = selectedMRF && selectedMRF.value;
    return (
      <div className={styles.page__statements}>
        <h1 className={styles.page__title}>Реестр заявлений о предоставлении доступа к инфраструктуре</h1>
        <div className={styles.filter__row}>
          <div className={styles.filter__container}>
            <div className={styles.row}>
              <div className={styles.input__field}>
                <p className={styles.input__title}>Субъект РФ/МРФ Ростелекома</p>
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
                  defaultValue={selectedMRF}
                  handleSelect={this.handleSelectMRF}
                  value={valueMRF}
                />
              </div>
              <div className={styles.input__field}>
                <p className={styles.input__title}>Дата поступления заявления</p>
                <div className={styles.field}>
                  <div className={styles.input__label}>От</div>
                  <Datepicker
                    selected={selectedDateSendFrom}
                    onChange={this.handleChangeDate('selectedDateSendFrom')}
                  />
                  <div className={styles.input__label}>До</div>
                  <Datepicker selected={selectedDateSendTo} onChange={this.handleChangeDate('selectedDateSendTo')} />
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.input__field}>
                <p className={styles.input__title}>Наименование и описание объекта</p>
                <Input onChange={this.handleChangeInputObj} value={inputValueObj} />
              </div>
              <div className={styles.input__field}>
                <p className={styles.input__title}>Планируемый срок начала использования объекта</p>
                <div className={styles.field}>
                  <div className={styles.input__label}>От</div>
                  <Datepicker selected={selectedDateUseFrom} onChange={this.handleChangeDate('selectedDateUseFrom')} />
                  <div className={styles.input__label}>До</div>
                  <Datepicker selected={selectedDateUseTo} onChange={this.handleChangeDate('selectedDateUseTo')} />
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.input__field}>
                <p className={styles.input__title}>Наименование заявителя</p>
                <Input onChange={this.handleChangeInputName} value={inputValueName} />
              </div>
              <div className={styles.input__field}>
                <p className={styles.input__title}>Номер заявления</p>
                <Input onChange={this.handleChangeInputNumber} value={inputValueNumber} />
              </div>
            </div>
            <div className={styles.row}>
              <Button typebtn="warning">
                <Svg name="filter" />
                Найти объекты
              </Button>
              <Button typebtn="clear" onClick={this.clearInputs}>
                Очистить форму
              </Button>
            </div>
          </div>
        </div>

        <TablePageStatements countData={countData} />
        <TablePagination activePage={activePage} onChange={this.handlePageChange} totalItemsCount={countData} />
      </div>
    );
  }
}
