import React, { Component } from 'react';
import SelectForm from '../Select';
import Button from '../Button';
import Input from '../Input';
import Svg from '../ImportImage';
import styles from './PageObjects.module.scss';
import PopUp from '../PopUp';
import CalcModal from '../CalcModal';
import TablePagination from '../TablePagination';
import TablePageObjects from '../Table/TablePageObjects';

const DEFAULT_VALUE_SELECT = { value: '1', label: '1' };

export default class PageObjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      countData: 520,
      inputValue: '',
      selectedMRF: DEFAULT_VALUE_SELECT,
      selectedObj: DEFAULT_VALUE_SELECT,
      isModalOpen: false,
    };
  }

  handleChangeInput = value => {
    this.setState({
      inputValue: value,
    });
  };

  handleSelectMRF = value => {
    this.setState({
      selectedMRF: value,
    });
  };

  handleSelectObj = value => {
    this.setState({
      selectedObj: value,
    });
  };

  clearInputs = () => {
    this.setState({
      inputValue: '',
      selectedMRF: DEFAULT_VALUE_SELECT,
      selectedObj: DEFAULT_VALUE_SELECT,
    });
  };

  showModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  handlePageChange = pageNumber => {
    this.setState({ activePage: pageNumber });
  };

  render() {
    const { inputValue, selectedMRF, selectedObj, isModalOpen, countData, activePage } = this.state;
    const valueMRF = selectedMRF && selectedMRF.value;
    const valueObj = selectedObj && selectedObj.value;
    return (
      <div className={styles.container}>
        <h1>Информация об объектах инфраструктуры</h1>
        <div className={styles.top}>
          <div className={styles.filter}>
            <div className={styles.row}>
              <div className={styles.input}>
                <p className={styles.title}>МРФ Ростелекома</p>
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
              <div className={styles.input}>
                <p className={styles.title}>Наименование объекта</p>
                <SelectForm
                  options={[
                    { value: '1', label: 'Все' },
                    {
                      value: '2',
                      label:
                        'Сооружения связи, в том числе линейно-кабельные сооружения связи (за исключением кабелей связи, в том числе их части)',
                    },
                    {
                      value: '3',
                      label:
                        'Здания, сооружения либо отдельные помещения в них, специально созданные для размещения сетей электросвязи (их отдельных элементов)',
                    },
                    { value: '4', label: 'Столповые и стоечные опоры' },
                  ]}
                  defaultValue={selectedObj}
                  handleSelect={this.handleSelectObj}
                  value={valueObj}
                />
              </div>
              <div className={styles.input}>
                <p className={styles.title}>Местонахождение объекта</p>
                <Input onChange={this.handleChangeInput} value={inputValue} />
              </div>
            </div>
            <div className={styles.row} />
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
          <div className={styles.calc}>
            <p>Узнайте стоимость доступа к кабельной канализации</p>
            <Button typebtn="info" onClick={this.showModal}>
              <Svg name="calc" />
              Рассчитать
            </Button>
          </div>
        </div>
        <TablePageObjects countData={countData} />
        <TablePagination activePage={activePage} onChange={this.handlePageChange} totalItemsCount={countData} />
        <PopUp closeModal={this.closeModal} open={isModalOpen} innerComponent={<CalcModal />} />
      </div>
    );
  }
}
